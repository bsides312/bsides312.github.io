<script lang="ts">
	import { onMount } from 'svelte';

	// Signal payload — assembled at runtime from char codes
	// Not greppable as a string literal
	const _sig = [67, 48, 109, 112, 108, 49, 109, 51, 110, 116];

	let displayText = '';
	let showCode = false;
	let cursorVisible = true;

	const lines = [
		'> SCANNING FREQUENCIES...',
		'> BAND: 312 MHz',
		'> SIGNAL LOCK ACQUIRED',
		'> DECODING TRANSMISSION...',
		'> CLEARANCE: GRANTED',
		'',
		'> COMPLIMENTARY ACCESS CODE:'
	];

	let currentLines: string[] = [];

	onMount(() => {
		const cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 530);

		let lineIndex = 0;
		const typeNextLine = () => {
			if (lineIndex < lines.length) {
				currentLines = [...currentLines, lines[lineIndex]];
				lineIndex++;
				setTimeout(typeNextLine, 400 + Math.random() * 300);
			} else {
				showCode = true;
				displayText = String.fromCharCode(..._sig);
			}
		};

		setTimeout(typeNextLine, 800);

		return () => clearInterval(cursorInterval);
	});
</script>

<svelte:head>
	<title>// SIGNAL INTERCEPT</title>
</svelte:head>

<div class="terminal">
	<div class="terminal-header">
		<span class="terminal-dot red"></span>
		<span class="terminal-dot yellow"></span>
		<span class="terminal-dot green"></span>
		<span class="terminal-title">FREQ_MONITOR v3.12</span>
	</div>
	<div class="terminal-body">
		{#each currentLines as line}
			<p class="terminal-line">{line}</p>
		{/each}
		{#if showCode}
			<p class="code-reveal">{displayText}</p>
		{/if}
		<span class="cursor" class:visible={cursorVisible}>█</span>
	</div>
</div>

<style>
	.terminal {
		max-width: 700px;
		margin: 120px auto 60px;
		background: #0a0a0a;
		border: 1px solid #333;
		border-radius: 8px;
		overflow: hidden;
		box-shadow: 0 0 40px rgba(0, 255, 0, 0.1), 0 0 80px rgba(0, 0, 0, 0.5);
		font-family: 'Courier New', Courier, monospace;
	}

	.terminal-header {
		background: #1a1a1a;
		padding: 10px 15px;
		display: flex;
		align-items: center;
		gap: 8px;
		border-bottom: 1px solid #333;
	}

	.terminal-dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.terminal-dot.red {
		background: #ff5f56;
	}
	.terminal-dot.yellow {
		background: #ffbd2e;
	}
	.terminal-dot.green {
		background: #27c93f;
	}

	.terminal-title {
		color: #666;
		font-size: 0.8rem;
		margin-left: 10px;
	}

	.terminal-body {
		padding: 25px;
		min-height: 350px;
	}

	.terminal-line {
		color: #00ff41;
		font-size: 0.95rem;
		margin: 6px 0;
		line-height: 1.5;
		text-shadow: 0 0 5px rgba(0, 255, 65, 0.4);
	}

	.code-reveal {
		color: #ff6b35;
		font-size: 1.8rem;
		font-weight: bold;
		margin: 20px 0 10px;
		padding: 15px;
		border: 1px dashed #ff6b35;
		display: inline-block;
		text-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
		animation: fadeIn 0.5s ease-in;
		letter-spacing: 3px;
	}

	.cursor {
		color: #00ff41;
		font-size: 0.95rem;
		opacity: 0;
		transition: opacity 0.1s;
	}

	.cursor.visible {
		opacity: 1;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(5px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
