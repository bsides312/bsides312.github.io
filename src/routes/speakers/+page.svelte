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

	onMount(async () => {
		try {
			const [sRes, gRes] = await Promise.all([
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Speakers'),
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Sessions')
			]);
			if (!sRes.ok || !gRes.ok) throw new Error();
			speakers = await sRes.json();
			const groups: Group[] = await gRes.json();
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
					for (const sp of session.speakers) {
						speakerTrack[sp.id] = group.groupName;
					}
				}
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

	let selectedSpeaker: Speaker | null = null;
	let synopsisModal: { title: string; description: string; time: string; track: string } | null =
		null;

	function openSpeakerModal(speaker: Speaker) {
		selectedSpeaker = speaker;
	}

	function closeSpeakerModal() {
		selectedSpeaker = null;
		synopsisModal = null;
	}

	function formatTime(dt: string): string {
		if (!dt) return '';
		const [h, m] = dt.split('T')[1].split(':').map(Number);
		const ampm = h >= 12 ? 'PM' : 'AM';
		const hr = h > 12 ? h - 12 : h === 0 ? 12 : h;
		return `${hr}:${m.toString().padStart(2, '0')} ${ampm}`;
	}

	function openSynopsisModal(title: string, info: SessionInfo) {
		synopsisModal = { title, description: info.description, time: info.startsAt, track: info.track };
	}

	function closeSynopsisModal() {
		synopsisModal = null;
	}
</script>

<svelte:head>
	<title>Speakers - BSides312</title>
	<meta
		name="description"
		content="Meet the expert speakers presenting at BSides312 2026 — Chicago's biggest little cybersecurity conference."
	/>
</svelte:head>

<section id="speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Speakers</h2>
			<p>
				Meet the experts presenting at BSides312 2026!
				<br />New speakers are added automatically as they confirm their attendance.
			</p>
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

{#if selectedSpeaker}
	<div
		class="speaker-modal-overlay"
		on:click={closeSpeakerModal}
		on:keydown={(e) => e.key === 'Escape' && closeSpeakerModal()}
		role="dialog"
		aria-modal="true"
		aria-label="{selectedSpeaker.fullName} bio"
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div class="speaker-modal" on:click|stopPropagation>
			<button class="speaker-modal-close" on:click={closeSpeakerModal} aria-label="Close"
				>&times;</button
			>
			<div class="speaker-modal-header">
				<img
					class="speaker-modal-photo"
					src={selectedSpeaker.profilePicture}
					alt={selectedSpeaker.fullName}
				/>
				<div class="speaker-modal-info">
					<h3 class="speaker-modal-name">{selectedSpeaker.fullName}</h3>
					<div class="speaker-modal-tagline">{selectedSpeaker.tagLine}</div>
					{#if trackClass(selectedSpeaker.id)}
						<div class="speaker-track-badge {trackClass(selectedSpeaker.id)}">
							<span class="cta-badge {trackClass(selectedSpeaker.id)}-badge mini">L</span>
							{trackLabel(selectedSpeaker.id)}
						</div>
					{/if}
				</div>
			</div>
			{#if selectedSpeaker.sessions.length}
				{@const sess = selectedSpeaker.sessions[0]}
				{@const sessData = sessionSynopsisMap[String(sess.id)]}
				{#if sessData}
					<button
						class="speaker-modal-talk speaker-modal-talk-btn"
						on:click={() => openSynopsisModal(cleanTitle(sess.name), sessData)}
					>
						<i class="bi bi-chat-quote-fill me-2"></i>{cleanTitle(sess.name)}<span
							class="talk-click-hint">— view synopsis</span
						>
					</button>
				{:else}
					<div class="speaker-modal-talk">
						<i class="bi bi-chat-quote-fill me-2"></i>{cleanTitle(sess.name)}
					</div>
				{/if}
			{/if}
			{#if selectedSpeaker.bio}
				<div class="speaker-modal-bio">{selectedSpeaker.bio}</div>
			{/if}
			{#if visibleLinks(selectedSpeaker.links).length}
				<div class="speaker-modal-links">
					{#each visibleLinks(selectedSpeaker.links) as link (link.url)}
						<a
							href={link.url}
							target="_blank"
							rel="noopener"
							aria-label="{selectedSpeaker.fullName} {link.title}"
						>
							<i class="bi {linkIcon(link.linkType)}"></i>
						</a>
					{/each}
				</div>
			{/if}
		</div>
	</div>
{/if}

<!-- Synopsis modal (nested, higher z-index) -->
{#if synopsisModal}
	<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
	<div
		class="synopsis-modal-overlay"
		on:click={closeSynopsisModal}
		on:keydown={(e) => e.key === 'Escape' && closeSynopsisModal()}
		role="dialog"
		aria-modal="true"
		aria-label={synopsisModal.title}
		tabindex="-1"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions a11y-click-events-have-key-events -->
		<div class="speaker-modal" on:click|stopPropagation>
			<button class="speaker-modal-close" on:click={closeSynopsisModal} aria-label="Close"
				>&times;</button
			>
			<h3 class="talk-modal-title">{synopsisModal.title}</h3>
			{#if synopsisModal.time || synopsisModal.track}
				<div class="talk-modal-meta">
					{#if synopsisModal.time}
						<span><i class="bi bi-clock me-1"></i>{formatTime(synopsisModal.time)}</span>
					{/if}
					{#if synopsisModal.time && synopsisModal.track}
						<span class="talk-modal-meta-sep">&bull;</span>
					{/if}
					{#if synopsisModal.track}
						<span>
							<span
								class="cta-badge {synopsisModal.track.includes('Green') ? 'green' : 'orange'}-badge mini"
								>L</span
							>
							{synopsisModal.track}
						</span>
					{/if}
				</div>
			{/if}
			<p class="talk-modal-description">{synopsisModal.description}</p>
		</div>
	</div>
{/if}
