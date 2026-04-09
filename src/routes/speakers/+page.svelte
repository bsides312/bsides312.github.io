<script lang="ts">
	import { onMount } from 'svelte';

	interface SpeakerLink {
		title: string;
		url: string;
		linkType: string;
	}

	interface SpeakerSession {
		id: number;
		name: string;
	}

	interface Speaker {
		id: string;
		fullName: string;
		bio: string;
		tagLine: string;
		profilePicture: string;
		sessions: SpeakerSession[];
		links: SpeakerLink[];
	}

	interface SessionSpeaker {
		id: string;
		name: string;
	}

	interface GroupSession {
		id: number;
		description?: string;
		startsAt?: string;
		speakers: SessionSpeaker[];
	}

	interface Group {
		groupName: string;
		sessions: GroupSession[];
	}

	let speakers: Speaker[] = [];
	let speakerTrack: Record<string, string> = {};
	interface SessionInfo {
		description: string;
		startsAt: string;
		track: string;
	}
	let sessionSynopsisMap: Record<string, SessionInfo> = {};
	let loading = true;
	let error = false;

	const KEYNOTE_NAME = 'Heidi Potter';
	const KEYNOTE_SESSION_ID = 1186139;

	interface KeynoteSpeaker {
		speaker: Speaker;
		talkTitle: string;
		talkDescription: string;
	}
	let keynote: KeynoteSpeaker | null = null;

	onMount(async () => {
		try {
			const [sRes, gRes] = await Promise.all([
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Speakers'),
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Sessions')
			]);
			if (!sRes.ok || !gRes.ok) throw new Error();
			const allSpeakers: Speaker[] = await sRes.json();
			const groups: Group[] = await gRes.json();
			let keynoteDescription = '';
			for (const group of groups) {
				for (const session of group.sessions) {
					if (session.description?.trim()) {
						const track = group.groupName.includes('GREEN')
							? 'Green Line'
							: group.groupName.includes('ORANGE')
								? 'Orange Line'
								: '';
						sessionSynopsisMap[String(session.id)] = {
							description: session.description,
							startsAt: session.startsAt ?? '',
							track
						};
					}
					if (session.id === KEYNOTE_SESSION_ID) {
						keynoteDescription = session.description ?? '';
					}
					for (const sp of session.speakers) {
						speakerTrack[sp.id] = group.groupName;
					}
				}
			}
			const keynoteSpeaker = allSpeakers.find((s) => s.fullName === KEYNOTE_NAME);
			if (keynoteSpeaker) {
				keynote = {
					speaker: keynoteSpeaker,
					talkTitle: keynoteSpeaker.sessions[0]?.name ?? '',
					talkDescription: keynoteDescription
				};
				speakers = allSpeakers.filter((s) => s.fullName !== KEYNOTE_NAME);
			} else {
				speakers = allSpeakers;
			}
		} catch {
			error = true;
		} finally {
			loading = false;
		}
	});

	function linkIcon(type: string): string {
		switch (type) {
			case 'LinkedIn':
				return 'bi-linkedin';
			case 'Twitter':
				return 'bi-twitter-x';
			case 'Facebook':
				return 'bi-facebook';
			case 'Blog':
				return 'bi-globe';
			case 'Company_Website':
				return 'bi-briefcase';
			default:
				return 'bi-link-45deg';
		}
	}

	function trackClass(id: string): string {
		const t = speakerTrack[id] ?? '';
		if (t.includes('GREEN')) return 'green';
		if (t.includes('ORANGE')) return 'orange';
		return '';
	}

	function trackLabel(id: string): string {
		const t = speakerTrack[id] ?? '';
		if (t.includes('GREEN')) return 'Green Line';
		if (t.includes('ORANGE')) return 'Orange Line';
		return '';
	}

	function cleanTitle(title: string): string {
		return title.replace(/^\[Track \d+\]\s*/i, '');
	}

	function visibleLinks(links: SpeakerLink[]): SpeakerLink[] {
		return links.filter((l) => l.linkType !== 'Sessionize' && l.linkType !== 'Company_Website');
	}

	interface SpeakerModal {
		speaker: Speaker;
		talkTitle?: string;
		sessInfo?: SessionInfo;
	}
	let speakerModal: SpeakerModal | null = null;

	function openSpeakerModal(speaker: Speaker) {
		const sess = speaker.sessions[0];
		speakerModal = {
			speaker,
			talkTitle: sess ? cleanTitle(sess.name) : undefined,
			sessInfo: sess ? sessionSynopsisMap[String(sess.id)] : undefined
		};
	}

	function formatTime(dt: string): string {
		if (!dt) return '';
		const [h, m] = dt.split('T')[1].split(':').map(Number);
		const ampm = h >= 12 ? 'PM' : 'AM';
		const hr = h > 12 ? h - 12 : h === 0 ? 12 : h;
		return `${hr}:${m.toString().padStart(2, '0')} ${ampm}`;
	}
</script>

<svelte:head>
	<title>Speakers — BSides312 2026 | Chicago Security BSides Conference</title>
	<meta
		name="description"
		content="Meet the expert speakers presenting at BSides312 2026, the Security BSides hacker & cybersecurity conference in Chicago. May 16, 2026 at the Irish American Heritage Center."
	/>
</svelte:head>

<section id="speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Speakers</h2>
			<p>Meet the experts presenting at BSides312 2026!</p>
		</div>

		{#if loading}
			<div class="text-center py-5">
				<div class="spinner-border" style="color: var(--primary-color);" role="status">
					<span class="visually-hidden">Loading&hellip;</span>
				</div>
				<p class="mt-3" style="color: rgba(255,255,255,0.5);">Loading speakers&hellip;</p>
			</div>
		{:else if error}
			<div class="alert alert-warning text-center" role="alert">
				<i class="bi bi-exclamation-triangle me-2"></i>Could not load speakers. Please try again
				later.
			</div>
		{:else}
			{#if keynote}
				<div class="card mb-5 keynote-card">
					<div class="card-body">
						<h3 class="card-title text-center mb-4">
							<i class="bi bi-star-fill me-2"></i>Keynote Speaker<i class="bi bi-star-fill ms-2"
							></i>
						</h3>
						<div class="keynote-layout">
							<img
								src={keynote.speaker.profilePicture}
								alt={keynote.speaker.fullName}
								class="keynote-photo"
							/>
							<div class="keynote-info">
								<h4 class="keynote-name">{keynote.speaker.fullName}</h4>
								<div class="keynote-tagline">{keynote.speaker.tagLine}</div>
								<div class="keynote-talk">
									<i class="bi bi-mic-fill me-2"></i><em>{keynote.talkTitle}</em>
								</div>
								{#if keynote.talkDescription}
									<p class="keynote-synopsis">{keynote.talkDescription}</p>
								{/if}
								{#if keynote.speaker.bio}
									<p class="keynote-bio">{keynote.speaker.bio}</p>
								{/if}
							</div>
						</div>
					</div>
				</div>
			{/if}

			<div class="speakers-grid">
				{#each speakers as speaker (speaker.id)}
					<button class="speaker-card" type="button" on:click={() => openSpeakerModal(speaker)}>
						<img
							class="speaker-photo"
							src={speaker.profilePicture}
							alt={speaker.fullName}
							loading="lazy"
						/>
						<div class="speaker-name">{speaker.fullName}</div>
						<div class="speaker-tagline">{speaker.tagLine}</div>
						{#if trackClass(speaker.id)}
							<div class="speaker-track-badge {trackClass(speaker.id)}">
								<span class="cta-badge {trackClass(speaker.id)}-badge mini">L</span>
								{trackLabel(speaker.id)}
							</div>
						{/if}
						{#if speaker.sessions.length}
							<div class="speaker-talk">{cleanTitle(speaker.sessions[0].name)}</div>
						{/if}
						{#if visibleLinks(speaker.links).length}
							<div class="speaker-links">
								{#each visibleLinks(speaker.links) as link (link.url)}
									<a
										href={link.url}
										target="_blank"
										rel="noopener"
										aria-label="{speaker.fullName} {link.title}"
										on:click|stopPropagation
									>
										<i class="bi {linkIcon(link.linkType)}"></i>
									</a>
								{/each}
							</div>
						{/if}
					</button>
				{/each}
			</div>

			<div
				class="text-center mt-5"
				style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;"
			>
				<a href="/schedule#schedule" class="btn-primary">
					<i class="bi bi-calendar3 me-2"></i>View Full Schedule
				</a>
				<a href="/previous-speakers#previous-speakers" class="btn-primary">
					<i class="bi bi-clock-history me-2"></i>Previous Speakers
				</a>
			</div>
		{/if}
	</div>
</section>

{#if speakerModal}
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<div
		class="speaker-modal-overlay"
		on:click={() => (speakerModal = null)}
		on:keydown={(e) => e.key === 'Escape' && (speakerModal = null)}
		role="dialog"
		aria-modal="true"
		aria-label="{speakerModal.speaker.fullName} bio"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div class="speaker-modal" on:click|stopPropagation>
			<button class="speaker-modal-close" on:click={() => (speakerModal = null)} aria-label="Close"
				>&times;</button
			>
			<!-- Speaker at top -->
			<div class="speaker-modal-header">
				<img
					class="speaker-modal-photo"
					src={speakerModal.speaker.profilePicture}
					alt={speakerModal.speaker.fullName}
				/>
				<div class="speaker-modal-info">
					<h3 class="speaker-modal-name">{speakerModal.speaker.fullName}</h3>
					<div class="speaker-modal-tagline">{speakerModal.speaker.tagLine}</div>
					{#if trackClass(speakerModal.speaker.id)}
						<div class="speaker-track-badge {trackClass(speakerModal.speaker.id)}">
							<span class="cta-badge {trackClass(speakerModal.speaker.id)}-badge mini">L</span>
							{trackLabel(speakerModal.speaker.id)}
						</div>
					{/if}
				</div>
			</div>
			{#if speakerModal.speaker.bio}
				<div class="speaker-modal-bio">{speakerModal.speaker.bio}</div>
			{/if}
			{#if visibleLinks(speakerModal.speaker.links).length}
				<div class="speaker-modal-links">
					{#each visibleLinks(speakerModal.speaker.links) as link (link.url)}
						<a
							href={link.url}
							target="_blank"
							rel="noopener"
							aria-label="{speakerModal.speaker.fullName} {link.title}"
						>
							<i class="bi {linkIcon(link.linkType)}"></i>
						</a>
					{/each}
				</div>
			{/if}
			<!-- Presentation at bottom -->
			{#if speakerModal.talkTitle}
				<div class="modal-about-divider">Presentation</div>
				<h4 class="talk-modal-title">{speakerModal.talkTitle}</h4>
				{#if speakerModal.sessInfo}
					<div class="talk-modal-meta">
						{#if speakerModal.sessInfo.track}
							<span>
								<span
									class="cta-badge {speakerModal.sessInfo.track.includes('Green')
										? 'green'
										: 'orange'}-badge mini">L</span
								>
								{speakerModal.sessInfo.track}
							</span>
						{/if}
						{#if speakerModal.sessInfo.track && speakerModal.sessInfo.startsAt}
							<span class="talk-modal-meta-sep">•</span>
						{/if}
						{#if speakerModal.sessInfo.startsAt}
							<span>{formatTime(speakerModal.sessInfo.startsAt)}</span>
						{/if}
					</div>
					{#if speakerModal.sessInfo.description}
						<p class="talk-modal-description">{speakerModal.sessInfo.description}</p>
					{/if}
				{/if}
			{/if}
		</div>
	</div>
{/if}
