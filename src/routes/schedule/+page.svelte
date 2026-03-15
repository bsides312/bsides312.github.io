<script lang="ts">
	import { onMount } from 'svelte';

	interface SessionSpeaker {
		id: string;
		name: string;
	}

	interface Session {
		id: string;
		title: string;
		startsAt: string;
		endsAt: string;
		isServiceSession: boolean;
		isPlenumSession: boolean;
		speakers: SessionSpeaker[];
		room: string;
	}

	interface Group {
		groupId: number;
		groupName: string;
		sessions: Session[];
	}

	let loading = true;
	let error = false;
	let allSessions: Session[] = [];
	let timeSlots: string[] = [];

	onMount(async () => {
		try {
			const res = await fetch('https://sessionize.com/api/v2/v1trm5nf/view/Sessions');
			if (!res.ok) throw new Error();
			const groups: Group[] = await res.json();
			allSessions = groups.flatMap((g) => g.sessions);
			timeSlots = [...new Set(allSessions.map((s) => s.startsAt))].sort();
		} catch {
			error = true;
		} finally {
			loading = false;
		}
	});

	function formatTime(dt: string): string {
		const [h, m] = dt.split('T')[1].split(':').map(Number);
		const ampm = h >= 12 ? 'PM' : 'AM';
		const hr = h > 12 ? h - 12 : h === 0 ? 12 : h;
		return `${hr}:${m.toString().padStart(2, '0')} ${ampm}`;
	}

	function formatDuration(start: string, end: string): string {
		const mins =
			(new Date('2000-01-01T' + end.split('T')[1]).getTime() -
				new Date('2000-01-01T' + start.split('T')[1]).getTime()) /
			60000;
		return `${mins} min`;
	}

	// Plenum + service sessions both span full width
	function getSpanning(time: string): Session | undefined {
		return allSessions.find(
			(s) => s.startsAt === time && (s.isPlenumSession || s.isServiceSession)
		);
	}

	function getTrack(time: string, room: string): Session | undefined {
		return allSessions.find(
			(s) =>
				s.startsAt === time && s.room === room && !s.isPlenumSession && !s.isServiceSession
		);
	}

	function spanningIcon(title: string): string {
		const t = title.toLowerCase();
		if (t.includes('lunch')) return 'bi-cup-hot-fill';
		if (t.includes('keynote')) return 'bi-star-fill';
		if (t.includes('opening')) return 'bi-door-open-fill';
		if (t.includes('closing')) return 'bi-flag-fill';
		if (t.includes('afterparty') || t.includes('party')) return 'bi-music-note-beamed';
		return 'bi-calendar-event';
	}

	function cleanTitle(title: string): string {
		return title.replace(/^\[Track \d+\]\s*/i, '');
	}
</script>

<svelte:head>
	<title>Schedule - BSides312</title>
	<meta
		name="description"
		content="BSides312 2026 Conference Schedule — May 16th, Irish American Heritage Center, Chicago"
	/>
</svelte:head>

<section id="schedule" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Event Schedule</h2>
			<p>May 16th, 2026 &mdash; Irish American Heritage Center, Chicago</p>
		</div>

		{#if loading}
			<div class="text-center py-5">
				<div class="spinner-border" style="color: var(--primary-color);" role="status">
					<span class="visually-hidden">Loading&hellip;</span>
				</div>
				<p class="mt-3" style="color: rgba(255,255,255,0.5);">Loading schedule&hellip;</p>
			</div>
		{:else if error}
			<div class="alert alert-warning text-center" role="alert">
				<i class="bi bi-exclamation-triangle me-2"></i>Could not load schedule. Please try again later.
			</div>
		{:else}
			<!-- CTA line legend -->
			<div class="cta-legend">
				<div class="cta-legend-item">
					<span class="cta-badge green-badge">L</span>
					<div>
						<div class="cta-line-name green-text">Green Line</div>
						<div class="cta-line-sub">Main Hall</div>
					</div>
				</div>
				<div class="cta-legend-sep">&bull;</div>
				<div class="cta-legend-item">
					<span class="cta-badge orange-badge">L</span>
					<div>
						<div class="cta-line-name orange-text">Orange Line</div>
						<div class="cta-line-sub">Side Hall</div>
					</div>
				</div>
			</div>

			<div class="schedule-wrapper">
				<div class="schedule-grid">
					<!-- Column headers -->
					<div class="sched-header-time">Time</div>
					<div class="sched-header sched-header-green">
						<span class="cta-badge green-badge">L</span>
						<span>Green Line</span>
					</div>
					<div class="sched-header sched-header-orange">
						<span class="cta-badge orange-badge">L</span>
						<span>Orange Line</span>
					</div>

					{#each timeSlots as time}
						{@const spanning = getSpanning(time)}
						{@const green = getTrack(time, 'GREEN LINE')}
						{@const orange = getTrack(time, 'ORANGE LINE')}

						<div class="sched-time">{@html formatTime(time).replace(' ', '<br />')}</div>

						{#if spanning}
							<div class="sched-session sched-spanning">
								<i class="bi {spanningIcon(spanning.title)} sched-spanning-icon"></i>
								<div>
									<span class="sched-spanning-title">{spanning.title}</span>
									<span class="sched-dur sched-dur-plenum"
										>{formatDuration(spanning.startsAt, spanning.endsAt)}</span
									>
								</div>
							</div>
						{:else}
							<div class="sched-session sched-green" class:sched-empty={!green}>
								{#if green}
									<div class="sched-talk-title">{cleanTitle(green.title)}</div>
									{#if green.speakers.length}
										<div class="sched-speaker">
											<i class="bi bi-person-fill"></i>
											{green.speakers.map((s) => s.name).join(', ')}
										</div>
									{/if}
									<span class="sched-dur sched-dur-green"
										>{formatDuration(green.startsAt, green.endsAt)}</span
									>
								{:else}
									<span class="sched-empty-marker">—</span>
								{/if}
							</div>
							<div class="sched-session sched-orange" class:sched-empty={!orange}>
								{#if orange}
									<div class="sched-talk-title">{cleanTitle(orange.title)}</div>
									{#if orange.speakers.length}
										<div class="sched-speaker">
											<i class="bi bi-person-fill"></i>
											{orange.speakers.map((s) => s.name).join(', ')}
										</div>
									{/if}
									<span class="sched-dur sched-dur-orange"
										>{formatDuration(orange.startsAt, orange.endsAt)}</span
									>
								{:else}
									<span class="sched-empty-marker">—</span>
								{/if}
							</div>
						{/if}
					{/each}
				</div>
			</div>

			<p class="sched-note">
				<i class="bi bi-info-circle me-1"></i>Schedule is subject to change.
			</p>
		{/if}
	</div>
</section>
