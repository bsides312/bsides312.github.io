<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { base } from '$app/paths';

	let canvas: HTMLCanvasElement;
	let cleanup: (() => void) | null = null;

	onMount(() => {
		const ctx2d = canvas.getContext('2d', { alpha: true, desynchronized: true });
		if (!ctx2d) return;
		const ctx: CanvasRenderingContext2D = ctx2d;

		const COLORS = ['#5dbdfc', '#5dbdfc', '#5dbdfc', '#5dbdfc', '#0c5', '#0c5', '#ff6624'];
		type Pt = { x: number; y: number };
		type Path = { pts: Pt[]; segLens: number[]; total: number };
		type Pulse = { path: Path; t: number; speed: number; color: string; tail: number };
		type Spark = {
			x: number;
			y: number;
			vx: number;
			vy: number;
			life: number;
			decay: number;
			color: string;
		};

		const paths: Path[] = [];
		const pulses: Pulse[] = [];
		const sparks: Spark[] = [];
		let W = 0,
			H = 0;

		// Offscreen substrate canvas — the faint circuit traces are rendered
		// once per resize and blitted each frame, so we only pay the polyline
		// stroke cost when the layout changes.
		const sub = document.createElement('canvas');
		const sctx = sub.getContext('2d')!;

		// ---- land mask (Chicago map) ----
		// Sample the cta_bg.jpg map to keep pulses on land. Water/lake cells
		// stay dark and pulses can't enter them, which gives the animation
		// its Chicago skyline silhouette.
		const MASK_CELL = 12;
		let landMask: Uint8Array | null = null;
		let MASK_W = 0,
			MASK_H = 0;
		const bgImg = new Image();
		let bgImgData: ImageData | null = null;
		let bgImgW = 0,
			bgImgH = 0;

		bgImg.onload = () => {
			bgImgW = bgImg.naturalWidth;
			bgImgH = bgImg.naturalHeight;
			const off = document.createElement('canvas');
			off.width = bgImgW;
			off.height = bgImgH;
			const oc = off.getContext('2d')!;
			oc.drawImage(bgImg, 0, 0);
			try {
				bgImgData = oc.getImageData(0, 0, bgImgW, bgImgH);
			} catch {
				bgImgData = null;
			}
			resize();
		};
		bgImg.src = `${base}/assets/img/cta_bg.jpg`;

		function buildLandMask() {
			if (!bgImgData) {
				landMask = null;
				return;
			}
			// Match the body's background-size: cover / center transform so the
			// mask aligns with what's actually visible behind the canvas.
			const scale = Math.max(W / bgImgW, H / bgImgH);
			const offX = (W - bgImgW * scale) / 2;
			const offY = (H - bgImgH * scale) / 2;
			MASK_W = Math.ceil(W / MASK_CELL);
			MASK_H = Math.ceil(H / MASK_CELL);
			landMask = new Uint8Array(MASK_W * MASK_H);
			const data = bgImgData.data;
			const iw = bgImgW,
				ih = bgImgH;
			for (let gy = 0; gy < MASK_H; gy++) {
				for (let gx = 0; gx < MASK_W; gx++) {
					let isLand = 0;
					// 6 jittered samples per cell — cheap, catches grid lines
					for (let s = 0; s < 6; s++) {
						const cx = (gx + Math.random()) * MASK_CELL;
						const cy = (gy + Math.random()) * MASK_CELL;
						const ix = ((cx - offX) / scale) | 0;
						const iy = ((cy - offY) / scale) | 0;
						if (ix < 0 || iy < 0 || ix >= iw || iy >= ih) continue;
						const idx = (iy * iw + ix) * 4;
						// any channel above ~28 ⇒ has detail (streets / labels / land)
						if (data[idx] > 28 || data[idx + 1] > 28 || data[idx + 2] > 28) {
							isLand = 1;
							break;
						}
					}
					landMask[gy * MASK_W + gx] = isLand;
				}
			}
		}

		function isOnLand(x: number, y: number) {
			if (!landMask) return true;
			const gx = (x / MASK_CELL) | 0;
			const gy = (y / MASK_CELL) | 0;
			if (gx < 0 || gy < 0 || gx >= MASK_W || gy >= MASK_H) return false;
			return landMask[gy * MASK_W + gx] === 1;
		}

		function segmentOnLand(ax: number, ay: number, bx: number, by: number) {
			const d = Math.hypot(bx - ax, by - ay);
			const steps = Math.max(2, Math.ceil(d / MASK_CELL));
			for (let k = 0; k <= steps; k++) {
				const f = k / steps;
				if (!isOnLand(ax + (bx - ax) * f, ay + (by - ay) * f)) return false;
			}
			return true;
		}

		function resize() {
			W = window.innerWidth;
			H = window.innerHeight;
			canvas.width = W;
			canvas.height = H;
			sub.width = W;
			sub.height = H;
			buildLandMask();
			buildPaths();
			renderSubstrate();
		}

		function buildPaths() {
			paths.length = 0;
			const N = Math.min(55, Math.max(30, Math.floor((W * H) / 45000)));
			let tries = 0;
			while (paths.length < N && tries++ < N * 6) {
				const p = makePath();
				if (p) paths.push(p);
			}
		}

		function makePath(): Path | null {
			let x = 0,
				y = 0,
				found = false;
			for (let i = 0; i < 10; i++) {
				x = Math.random() * W;
				y = Math.random() * H;
				if (isOnLand(x, y)) {
					found = true;
					break;
				}
			}
			if (!found) return null;

			const pts: Pt[] = [{ x, y }];
			const segs = 4 + Math.floor(Math.random() * 6);
			let horiz = Math.random() > 0.5;
			for (let s = 0; s < segs; s++) {
				const len = 60 + Math.random() * 240;
				let dir = Math.random() > 0.5 ? 1 : -1;
				let nx = horiz ? x + len * dir : x;
				let ny = horiz ? y : y + len * dir;
				if (!segmentOnLand(x, y, nx, ny)) {
					dir = -dir;
					nx = horiz ? x + len * dir : x;
					ny = horiz ? y : y + len * dir;
					if (!segmentOnLand(x, y, nx, ny)) break;
				}
				x = Math.max(-50, Math.min(W + 50, nx));
				y = Math.max(-50, Math.min(H + 50, ny));
				pts.push({ x, y });
				horiz = !horiz;
			}
			if (pts.length < 3) return null;
			const segLens: number[] = [];
			let total = 0;
			for (let i = 1; i < pts.length; i++) {
				const L = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
				segLens.push(L);
				total += L;
			}
			return { pts, segLens, total };
		}

		function pointAt(path: Path, t: number): Pt {
			if (t <= 0) return path.pts[0];
			if (t >= 1) return path.pts[path.pts.length - 1];
			const target = t * path.total;
			let acc = 0;
			for (let i = 0; i < path.segLens.length; i++) {
				const L = path.segLens[i];
				if (acc + L >= target) {
					const f = (target - acc) / L;
					const a = path.pts[i],
						b = path.pts[i + 1];
					return { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f };
				}
				acc += L;
			}
			return path.pts[path.pts.length - 1];
		}

		function renderSubstrate() {
			sctx.clearRect(0, 0, W, H);
			sctx.lineCap = 'round';
			sctx.lineJoin = 'round';
			sctx.strokeStyle = 'rgba(93,189,252,0.07)';
			sctx.lineWidth = 0.6;
			for (const p of paths) {
				sctx.beginPath();
				sctx.moveTo(p.pts[0].x, p.pts[0].y);
				for (let i = 1; i < p.pts.length; i++) sctx.lineTo(p.pts[i].x, p.pts[i].y);
				sctx.stroke();
			}
		}

		function spawnPulse() {
			if (paths.length === 0) return;
			pulses.push({
				path: paths[Math.floor(Math.random() * paths.length)],
				t: 0,
				speed: 0.001 + Math.random() * 0.0035,
				color: COLORS[Math.floor(Math.random() * COLORS.length)],
				tail: 0.05 + Math.random() * 0.13
			});
		}

		function spawnSpark(x: number, y: number, color: string) {
			const n = 4 + Math.floor(Math.random() * 4);
			for (let i = 0; i < n; i++) {
				const ang = Math.random() * Math.PI * 2;
				const spd = 0.5 + Math.random() * 1.8;
				sparks.push({
					x,
					y,
					vx: Math.cos(ang) * spd,
					vy: Math.sin(ang) * spd,
					life: 1,
					decay: 0.03 + Math.random() * 0.04,
					color
				});
			}
		}

		// Build the polyline for the visible portion of a pulse's trail and
		// stroke it three times: wide+soft, medium, bright core. This is the
		// shadowBlur-free recipe for "glowing line" — three stacked strokes
		// under globalCompositeOperation='lighter' read as halation.
		const TRAIL_STEPS = 8;
		function drawPulseTrail(p: Pulse): Pt | null {
			const path = p.path;
			const trail: Pt[] = [];
			for (let k = 0; k <= TRAIL_STEPS; k++) {
				const tk = p.t - (k / TRAIL_STEPS) * p.tail;
				if (tk < 0) break;
				trail.push(pointAt(path, Math.min(1, tk)));
			}
			if (trail.length < 2) return null;

			ctx.strokeStyle = p.color;
			ctx.beginPath();
			ctx.moveTo(trail[0].x, trail[0].y);
			for (let k = 1; k < trail.length; k++) ctx.lineTo(trail[k].x, trail[k].y);

			ctx.globalAlpha = 0.16;
			ctx.lineWidth = 7;
			ctx.stroke();
			ctx.globalAlpha = 0.42;
			ctx.lineWidth = 2.5;
			ctx.stroke();
			ctx.globalAlpha = 0.95;
			ctx.lineWidth = 1.1;
			ctx.stroke();
			return trail[0];
		}

		// 60fps cap (regardless of display refresh rate)
		const FRAME_MS = 1000 / 60;
		let lastFrame = 0;
		let running = true;
		let rafId = 0;

		function frame(now: number) {
			if (running) rafId = requestAnimationFrame(frame);
			if (now - lastFrame < FRAME_MS) return;
			lastFrame = now;

			// soft fade trails — destination-out alpha-erases under everything
			ctx.globalCompositeOperation = 'destination-out';
			ctx.fillStyle = 'rgba(0,0,0,0.22)';
			ctx.fillRect(0, 0, W, H);

			// blit cached substrate
			ctx.globalCompositeOperation = 'source-over';
			ctx.globalAlpha = 1;
			ctx.drawImage(sub, 0, 0);

			// additive composite for pulse glow
			ctx.globalCompositeOperation = 'lighter';
			ctx.lineCap = 'round';
			ctx.lineJoin = 'round';

			for (let i = pulses.length - 1; i >= 0; i--) {
				const p = pulses[i];
				p.t += p.speed;
				if (p.t > 1 + p.tail) {
					const end = p.path.pts[p.path.pts.length - 1];
					spawnSpark(end.x, end.y, p.color);
					pulses.splice(i, 1);
					continue;
				}
				const head = drawPulseTrail(p);
				if (p.t <= 1 && head) {
					ctx.fillStyle = p.color;
					ctx.globalAlpha = 0.45;
					ctx.beginPath();
					ctx.arc(head.x, head.y, 5, 0, Math.PI * 2);
					ctx.fill();
					ctx.fillStyle = '#ffffff';
					ctx.globalAlpha = 1;
					ctx.beginPath();
					ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
					ctx.fill();
				}
			}

			// sparks (no shadowBlur — additive layering does the glow)
			for (let i = sparks.length - 1; i >= 0; i--) {
				const s = sparks[i];
				s.x += s.vx;
				s.y += s.vy;
				s.vx *= 0.92;
				s.vy *= 0.92;
				s.life -= s.decay;
				if (s.life <= 0) {
					sparks.splice(i, 1);
					continue;
				}
				ctx.fillStyle = s.color;
				ctx.globalAlpha = s.life * 0.9;
				ctx.beginPath();
				ctx.arc(s.x, s.y, 1.8, 0, Math.PI * 2);
				ctx.fill();
			}

			ctx.globalAlpha = 1;
			ctx.globalCompositeOperation = 'source-over';

			const target = 22;
			if (pulses.length < target && Math.random() < 0.3) spawnPulse();
		}

		// pause when tab not visible
		const onVisibility = () => {
			if (document.hidden) {
				running = false;
			} else if (!running) {
				running = true;
				lastFrame = 0;
				rafId = requestAnimationFrame(frame);
			}
		};
		document.addEventListener('visibilitychange', onVisibility);

		// debounced resize so dragging doesn't thrash buildPaths
		let rzTimer: ReturnType<typeof setTimeout> | null = null;
		const onResize = () => {
			if (rzTimer) clearTimeout(rzTimer);
			rzTimer = setTimeout(resize, 150);
		};
		window.addEventListener('resize', onResize);

		resize();
		for (let i = 0; i < 10; i++) spawnPulse();
		rafId = requestAnimationFrame(frame);

		cleanup = () => {
			running = false;
			if (rafId) cancelAnimationFrame(rafId);
			if (rzTimer) clearTimeout(rzTimer);
			document.removeEventListener('visibilitychange', onVisibility);
			window.removeEventListener('resize', onResize);
		};
	});

	onDestroy(() => {
		cleanup?.();
	});
</script>

<canvas bind:this={canvas} id="laser-grid" aria-hidden="true"></canvas>

<style>
	#laser-grid {
		position: fixed;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		pointer-events: none;
	}

	@media (prefers-reduced-motion: reduce) {
		#laser-grid {
			display: none;
		}
	}
</style>
