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
		speakers: SessionSpeaker[];
	}

	interface Group {
		groupName: string;
		sessions: GroupSession[];
	}

	let speakers: Speaker[] = [];
	let speakerTrack: Record<string, string> = {};
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
			case 'LinkedIn': return 'bi-linkedin';
			case 'Twitter': return 'bi-twitter-x';
			case 'Facebook': return 'bi-facebook';
			case 'Blog': return 'bi-globe';
			case 'Company_Website': return 'bi-briefcase';
			default: return 'bi-link-45deg';
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
			<p>Meet the experts presenting at BSides312 2026</p>
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
					<div class="speaker-card">
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
									>
										<i class="bi {linkIcon(link.linkType)}"></i>
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}
			</div>

			<div class="text-center mt-5">
				<a href="/schedule#schedule" class="btn btn-outline-primary">
					<i class="bi bi-calendar3 me-2"></i>View Full Schedule
				</a>
			</div>
		{/if}
	</div>
</section>
