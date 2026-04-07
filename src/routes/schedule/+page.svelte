<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	interface SessionSpeaker {
		id: string;
		name: string;
	}

	interface Session {
		id: string;
		title: string;
		description?: string;
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

	interface FullSpeaker {
		id: string;
		fullName: string;
		bio: string;
		tagLine: string;
		profilePicture: string;
	}

	let loading = true;
	let error = false;
	let allSessions: Session[] = [];
	let timeSlots: string[] = [];
	let speakerMap: Record<string, FullSpeaker> = {};
	let talkModal: { title: string; description: string } | null = null;
	let schedSpeakerModal: FullSpeaker | null = null;

	// Parse "HH:MM" from an ISO-ish datetime string into total minutes
	function toMins(dt: string): number {
		const [h, m] = dt.split('T')[1].split(':').map(Number);
		return h * 60 + m;
	}

	// Round a datetime to the nearest 30-min slot string
	function sessionSlot(startsAt: string): string {
		const rounded = Math.floor(toMins(startsAt) / 30) * 30;
		const hh = String(Math.floor(rounded / 60)).padStart(2, '0');
		const mm = String(rounded % 60).padStart(2, '0');
		return startsAt.split('T')[0] + `T${hh}:${mm}:00`;
	}

	// How many 30-min slots a session spans (min 1)
	function slotSpan(session: Session): number {
		return Math.max(1, Math.ceil((toMins(session.endsAt) - toMins(session.startsAt)) / 30));
	}

	onMount(async () => {
		try {
			const [sessRes, spRes] = await Promise.all([
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Sessions'),
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Speakers')
			]);
			if (!sessRes.ok || !spRes.ok) throw new Error();
			const groups: Group[] = await sessRes.json();
			const speakerList: FullSpeaker[] = await spRes.json();
			allSessions = groups.flatMap((g) => g.sessions);

			// Build 30-minute time slots spanning the full schedule
			const allTimes = allSessions.flatMap((s) => [s.startsAt, s.endsAt]).sort();
			const datePrefix = allTimes[0].split('T')[0];
			const startMin = Math.floor(toMins(allTimes[0]) / 30) * 30;
			const endMin = Math.ceil(toMins(allTimes[allTimes.length - 1]) / 30) * 30;
			const slots: string[] = [];
			for (let m = startMin; m < endMin; m += 30) {
				const hh = String(Math.floor(m / 60)).padStart(2, '0');
				const mm = String(m % 60).padStart(2, '0');
				slots.push(`${datePrefix}T${hh}:${mm}:00`);
			}
			timeSlots = slots;

			for (const sp of speakerList) {
				speakerMap[sp.id] = sp;
			}
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
		const mins = toMins(end) - toMins(start);
		return `${mins} min`;
	}

	// Service/plenum sessions span full width
	function getSpanning(time: string): Session | undefined {
		return allSessions.find(
			(s) => sessionSlot(s.startsAt) === time && (s.isPlenumSession || s.isServiceSession)
		);
	}

	function getTrack(time: string, room: string): Session | undefined {
		return allSessions.find(
			(s) =>
				sessionSlot(s.startsAt) === time &&
				s.room === room &&
				!s.isPlenumSession &&
				!s.isServiceSession
		);
	}

	// Check if a track slot is covered by a multi-row session from an earlier slot
	function isTrackOccupied(time: string, room: string): boolean {
		const slotIdx = timeSlots.indexOf(time);
		if (slotIdx <= 0) return false;
		for (let i = slotIdx - 1; i >= 0; i--) {
			const session = getTrack(timeSlots[i], room);
			if (session && i + slotSpan(session) > slotIdx) return true;
			if (session) break;
		}
		return false;
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

	function isKeynote(session: Session): boolean {
		return /KEYNOTE:/i.test(session.title);
	}

	function openTalkModal(session: Session) {
		if (session.description?.trim()) {
			talkModal = { title: cleanTitle(session.title), description: session.description };
		}
	}

	function openSpeakerModal(sp: SessionSpeaker) {
		const full = speakerMap[sp.id];
		if (full?.bio) schedSpeakerModal = full;
	}
</script>

<svelte:head>
	<title>Schedule — BSides312 2026 | Chicago Security BSides Conference</title>
	<meta
		name="description"
		content="Full schedule for BSides312 2026, the Security BSides hacker & cybersecurity conference in Chicago — talks, workshops, villages, and CTFs on May 16, 2026 at the Irish American Heritage Center."
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(data.eventSchema)}</` + `script>`}
</svelte:head>

<section id="schedule" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Event Schedule</h2>
			<p>May 16th, 2026 &mdash; Irish American Heritage Center, Chicago</p>
			<br />Presentations are added automatically as speakers confirm their attendance.
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
				<i class="bi bi-exclamation-triangle me-2"></i>Could not load schedule. Please try again
				later.
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

					{#each timeSlots as time, idx (time)}
						{@const row = idx + 2}
						{@const spanning = getSpanning(time)}
						{@const green = getTrack(time, 'GREEN LINE')}
						{@const orange = getTrack(time, 'ORANGE LINE')}
						{@const greenOcc = isTrackOccupied(time, 'GREEN LINE')}
						{@const orangeOcc = isTrackOccupied(time, 'ORANGE LINE')}

						<!-- Spanning background: renders at full duration behind everything -->
						{#if spanning}
							<div
								class="sched-session sched-spanning"
								style="grid-row: {row} / span {slotSpan(spanning)}; grid-column: 2 / 4"
							>
								<i class="bi {spanningIcon(spanning.title)} sched-spanning-icon"></i>
								<div>
									<span class="sched-spanning-title">{spanning.title}</span>
									<span class="sched-dur sched-dur-plenum"
										>{formatDuration(spanning.startsAt, spanning.endsAt)}</span
									>
								</div>
							</div>
						{/if}

						<!-- Time column: always shown for every 30-min slot -->
						<div class="sched-time" style="grid-row: {row}; grid-column: 1">
							{@html formatTime(time).replace(' ', '<br />')}
						</div>

						<!-- Track columns: always render on top -->
						{#if !greenOcc}
							<div
								class="sched-session sched-green"
								class:sched-empty={!green && !(orange && isKeynote(orange))}
								class:sched-keynote={green ? isKeynote(green) : orange && isKeynote(orange)}
								style="grid-row: {row} / span {green
									? slotSpan(green)
									: orange && isKeynote(orange)
										? slotSpan(orange)
										: 1}; grid-column: 2"
							>
								{#if green}
									<div class="sched-talk-title">
										{#if green.description?.trim()}
											<button class="sched-talk-btn" on:click={() => openTalkModal(green)}>
												{cleanTitle(green.title)}
											</button>
										{:else}
											{cleanTitle(green.title)}
										{/if}
									</div>
									{#if green.speakers.length}
										<div class="sched-speaker">
											<i class="bi bi-person-fill"></i>
											{#each green.speakers as sp, i (sp.id)}
												{@const full = speakerMap[sp.id]}
												{#if i > 0},{/if}
												{#if full?.bio}
													<button class="sched-speaker-btn" on:click={() => openSpeakerModal(sp)}>
														{full?.fullName ?? sp.name}
													</button>
												{:else}
													{full?.fullName ?? sp.name}
												{/if}
											{/each}
										</div>
									{/if}
									<span class="sched-dur sched-dur-green"
										>{formatDuration(green.startsAt, green.endsAt)}</span
									>
								{:else if orange && isKeynote(orange)}
									<div class="sched-talk-title sched-keynote-pointer">
										<i class="bi bi-arrow-left"></i> Go see the keynote!!
									</div>
								{:else}
									<span class="sched-empty-marker">—</span>
								{/if}
							</div>
						{/if}

						{#if !orangeOcc}
							<div
								class="sched-session sched-orange"
								class:sched-empty={!orange && !(green && isKeynote(green))}
								class:sched-keynote={orange ? isKeynote(orange) : green && isKeynote(green)}
								style="grid-row: {row} / span {orange
									? slotSpan(orange)
									: green && isKeynote(green)
										? slotSpan(green)
										: 1}; grid-column: 3"
							>
								{#if orange}
									<div class="sched-talk-title">
										{#if orange.description?.trim()}
											<button class="sched-talk-btn" on:click={() => openTalkModal(orange)}>
												{cleanTitle(orange.title)}
											</button>
										{:else}
											{cleanTitle(orange.title)}
										{/if}
									</div>
									{#if orange.speakers.length}
										<div class="sched-speaker">
											<i class="bi bi-person-fill"></i>
											{#each orange.speakers as sp, i (sp.id)}
												{@const full = speakerMap[sp.id]}
												{#if i > 0},{/if}
												{#if full?.bio}
													<button class="sched-speaker-btn" on:click={() => openSpeakerModal(sp)}>
														{full?.fullName ?? sp.name}
													</button>
												{:else}
													{full?.fullName ?? sp.name}
												{/if}
											{/each}
										</div>
									{/if}
									<span class="sched-dur sched-dur-orange"
										>{formatDuration(orange.startsAt, orange.endsAt)}</span
									>
								{:else if green && isKeynote(green)}
									<div class="sched-talk-title sched-keynote-pointer">
										<i class="bi bi-arrow-left"></i> Go see the keynote!!
									</div>
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

<!-- Talk / synopsis modal -->
{#if talkModal}
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<div
		class="speaker-modal-overlay"
		on:click={() => (talkModal = null)}
		on:keydown={(e) => e.key === 'Escape' && (talkModal = null)}
		role="dialog"
		aria-modal="true"
		aria-label={talkModal.title}
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div class="speaker-modal" on:click|stopPropagation>
			<button class="speaker-modal-close" on:click={() => (talkModal = null)} aria-label="Close"
				>&times;</button
			>
			<h3 class="talk-modal-title">{talkModal.title}</h3>
			<p class="talk-modal-description">{talkModal.description}</p>
		</div>
	</div>
{/if}

<!-- Speaker bio modal (from schedule page) -->
{#if schedSpeakerModal}
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<div
		class="speaker-modal-overlay"
		on:click={() => (schedSpeakerModal = null)}
		on:keydown={(e) => e.key === 'Escape' && (schedSpeakerModal = null)}
		role="dialog"
		aria-modal="true"
		aria-label="{schedSpeakerModal.fullName} bio"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div class="speaker-modal" on:click|stopPropagation>
			<button
				class="speaker-modal-close"
				on:click={() => (schedSpeakerModal = null)}
				aria-label="Close">&times;</button
			>
			<div class="speaker-modal-header">
				{#if schedSpeakerModal.profilePicture}
					<img
						class="speaker-modal-photo"
						src={schedSpeakerModal.profilePicture}
						alt={schedSpeakerModal.fullName}
					/>
				{/if}
				<div class="speaker-modal-info">
					<h3 class="speaker-modal-name">{schedSpeakerModal.fullName}</h3>
					{#if schedSpeakerModal.tagLine}
						<div class="speaker-modal-tagline">{schedSpeakerModal.tagLine}</div>
					{/if}
				</div>
			</div>
			{#if schedSpeakerModal.bio}
				<div class="speaker-modal-bio">{schedSpeakerModal.bio}</div>
			{/if}
		</div>
	</div>
{/if}
