<script lang="ts">
	import { getSponsorsByTier, sponsorTierImages } from '$lib/stores/sponsors';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import WhenWhere from '$lib/components/WhenWhere.svelte';

	export let data: PageData;

	type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';

	// Speaker photos for the scrolling gallery
	interface SpeakerPhoto {
		profilePicture: string;
		fullName: string;
	}

	interface ApiSpeaker {
		fullName: string;
		tagLine: string;
		bio: string;
		profilePicture: string;
		sessions: { id: number; name: string }[];
	}

	interface KeynoteSpeaker {
		fullName: string;
		tagLine: string;
		bio: string;
		profilePicture: string;
		talkTitle: string;
		talkDescription: string;
	}

	let speakerPhotos: SpeakerPhoto[] = [];
	let keynote: KeynoteSpeaker | null = null;

	const KEYNOTE_NAME = 'Heidi Potter';
	const KEYNOTE_SESSION_ID = 1186139;

	onMount(async () => {
		try {
			const [sRes, sessRes] = await Promise.all([
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Speakers'),
				fetch('https://sessionize.com/api/v2/v1trm5nf/view/Sessions')
			]);
			if (sRes.ok) {
				const allSpeakers = await sRes.json();
				speakerPhotos = allSpeakers;
				const heidi = (allSpeakers as ApiSpeaker[]).find((s) => s.fullName === KEYNOTE_NAME);
				if (heidi && sessRes.ok) {
					const groups = await sessRes.json();
					const talkTitle = heidi.sessions[0]?.name ?? '';
					let talkDescription = '';
					for (const group of groups) {
						for (const session of group.sessions) {
							if (session.id === KEYNOTE_SESSION_ID) {
								talkDescription = session.description ?? '';
							}
						}
					}
					keynote = {
						fullName: heidi.fullName,
						tagLine: heidi.tagLine,
						bio: heidi.bio,
						profilePicture: heidi.profilePicture,
						talkTitle,
						talkDescription
					};
				}
			}
		} catch {
			// silently fail — gallery just won't show
		}
	});

	// Group sponsors by tier for display
	const sponsorTiers = (
		['platinum', 'gold', 'silver', 'bronze', 'founding', 'community'] as SponsorTier[]
	)
		.map((tier) => ({
			tierName: tier.charAt(0).toUpperCase() + tier.slice(1),
			tierSponsors: getSponsorsByTier(tier),
			tierImage: sponsorTierImages[tier]
		}))
		.filter((tier) => tier.tierSponsors.length > 0);

	// Gallery lightbox
	let lightboxSrc: string | null = null;

	function openLightbox(src: string) {
		lightboxSrc = src;
	}

	function closeLightbox() {
		lightboxSrc = null;
	}

	// Activity modals
	let activeActivity: string | null = null;

	const activityInfo: Record<string, { title: string; description: string }> = {
		ctf: {
			title: 'CTF Solo Hacking Challenge!',
			description: `Learn new hacking and problem-solving skills, and maybe even win some prizes like A LIFETIME BADGE! 
			<br><br>This competition is built for individuals, <strong>NOT TEAMS</strong>, and isn't entirely <em>inside real computers.</em>`
		},
		lockpicking: {
			title: 'Lockpicking!',
			description:
				"Join The Open Organisation Of Lockpickers' Chicago chapter to not only learn how picking locks works, but try it out yourself on tons of practice locks!"
		},
		gameshows: {
			title: 'Game Shows with Lintile!',
			description:
				"Which game shows? Who knows! Which Lintile? The host of Defcon's HACKER JEOPARDY!"
		},
		linux: {
			title: 'Linux Village!',
			description:
				'<p class="modal-heading">Are you Linux Curious?</p><p class="modal-heading">Got an older Windows computer that can\'t really support Windows 11 but aren\'t ready to spend on an upgrade?</p><p class="modal-heading">Just done with Microsoft\'s "Agentic OS?"</p><p>Our Linux village is here for you with computers to test out Linux on, experts to answer your questions, and we will even install Linux Mint on your computer for you - the OS is free and so is our help! Our mission is to help you explore Linux as your "daily driver" OS, and show you just what you can do in a modern Linux environment. So if you\'ve ever wondered what all the talk is about, if you\'re ready to take the Linux plunge, or if you\'re anywhere in between, stop by and talk with us, we\'re here to help you on your Linux journey!</p>'
		}
	};

	function openActivity(id: string) {
		activeActivity = id;
	}

	function closeActivity() {
		activeActivity = null;
	}
</script>

<svelte:head>
	<title>BSides312 2026 — Chicago's Security BSides Hacking Conference | May 16</title>
	<meta
		name="description"
		content="BSides312 is the Security BSides conference in Chicago — a non-profit, one-day hacker & cybersecurity event on May 16, 2026 at the Irish American Heritage Center. Talks, workshops, villages, CTFs, and networking with Chicago's infosec community."
	/>
	<meta
		name="keywords"
		content="BSides312, Security BSides, hacker conference Chicago, cybersecurity conference Chicago, infosec Chicago, Chicago hacking conference, CTF Chicago"
	/>
	{@html `<script type="application/ld+json">${JSON.stringify(data.eventSchema)}</` + `script>`}
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<img src="{base}/assets/img/about_logo.png" alt="BSides312 Logo" class="img-fluid hero-logo" />
		<h1 class="text-center mb-4">
			Chicago's Biggest Little <br />Non-Profit <br />Cybersecurity Conference
		</h1>
		<p class="lead text-center mb-4">
			BSides312 brings together security professionals, researchers, and enthusiasts for an
			unforgettable day of learning and networking.
		</p>
		<div class="text-center">
			<p class="mb-3"><strong>Join us in 2027! Check back in November!</strong></p>
			<div class="hero-buttons">
				<div class="hero-buttons-row">
					<a
						href="https://tinyurl.com/bsides312"
						target="_blank"
						rel="noopener"
						class="btn-primary"
					>
						<i class="bi bi-discord me-2"></i>Join our Discord!
					</a>
					<a
						href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
						target="_blank"
						rel="noopener"
						class="btn-primary btn-youtube"
					>
						<i class="bi bi-youtube me-2"></i>Watch Past Talks!
					</a>
				</div>
			</div>
		</div>
	</div>
	<div class="scroll-indicator" aria-hidden="true">
		<i class="bi bi-chevron-double-down"></i>
	</div>
</section>

<!-- About Section Teaser -->
<section id="about" class="section section-with-bg">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<WhenWhere />
			</div>
		</div>
	</div>

	<!-- Ribbon Image Gallery -->
	<div class="ribbon-gallery">
		<div class="ribbon-track">
			{#each [0, 1] as copy (copy)}
				{#each data.galleryImages as imgPath, i (imgPath)}
					<button
						class="ribbon-img-btn"
						on:click={() => openLightbox(`${base}${imgPath}`)}
						type="button"
						aria-label="View gallery photo {i + 1}"
					>
						<img
							src="{base}{imgPath}"
							alt="BSides312 gallery photo {i + 1}"
							class="ribbon-img"
							loading="lazy"
						/>
					</button>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- Gallery Lightbox Modal -->
{#if lightboxSrc}
	<div
		class="lightbox-overlay"
		on:click={closeLightbox}
		on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
		role="dialog"
		aria-modal="true"
		aria-label="Gallery image viewer"
		tabindex="-1"
	>
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox"
			>&times;</button
		>
		<img src={lightboxSrc} alt="BSides312 gallery full size" class="lightbox-img" />
	</div>
{/if}

<!-- Ride the L Section -->
<section id="ride-the-l" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Here's what you missed in 2026!</h2>
			<p>Stay Tuned for 2027 info - Coming in November!</p>
		</div>

		<!-- Keynote Speaker -->
		{#if keynote}
			<div class="card mb-5 keynote-card">
				<div class="card-body">
					<h3 class="card-title text-center mb-4">
						<i class="bi bi-star-fill me-2"></i>Keynote Speaker<i class="bi bi-star-fill ms-2"></i>
					</h3>
					<div class="keynote-layout">
						<img src={keynote.profilePicture} alt={keynote.fullName} class="keynote-photo" />
						<div class="keynote-info">
							<h4 class="keynote-name">{keynote.fullName}</h4>
							<div class="keynote-tagline">{keynote.tagLine}</div>
							<div class="keynote-talk">
								<i class="bi bi-mic-fill me-2"></i><em>{keynote.talkTitle}</em>
							</div>
							{#if keynote.talkDescription}
								<p class="keynote-synopsis">{keynote.talkDescription}</p>
							{/if}
							{#if keynote.bio}
								<p class="keynote-bio">{keynote.bio}</p>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/if}

		<!-- 2 Talk Tracks -->
		<div class="card mb-5">
			<div class="card-body text-center">
				<h3 class="card-title">
					<i class="bi bi-mic-fill me-2"></i>2 Talk Tracks with 15 Diverse Presenters!!
				</h3>
				{#if speakerPhotos.length}
					<div class="ribbon-gallery speaker-ribbon">
						<div class="ribbon-track">
							{#each [0, 1, 2] as copy (copy)}
								{#each speakerPhotos as speaker (speaker.fullName)}
									<a href="{base}/speakers#speakers" class="ribbon-speaker-card">
										<img
											src={speaker.profilePicture}
											alt={speaker.fullName}
											class="ribbon-speaker-img"
											loading="lazy"
										/>
										<div class="ribbon-speaker-name">{speaker.fullName}</div>
									</a>
								{/each}
							{/each}
						</div>
					</div>
				{/if}
				<div class="text-center mt-3">
					<a href="{base}/speakers#speakers" class="btn-primary">
						<i class="bi bi-people-fill me-2"></i>Meet All the Speakers!
					</a>
				</div>
			</div>
		</div>

		<!-- Win Prizes -->
		<h3 class="subsection-heading">
			<i class="bi bi-trophy-fill me-2"></i>Win Prizes while Learning and Testing new Skills!
		</h3>
		<div class="row justify-content-center gy-4">
			<div class="col-lg-3 col-md-6">
				<a
					href="https://ctf.bsides312.org/"
					target="_blank"
					rel="noopener"
					class="card activity-card h-100"
				>
					<img
						src="{base}/assets/img/activities/boompappow.gif"
						alt="CTF Hacking Challenge"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">CTF Hacking Challenge!</h4>
					</div>
				</a>
			</div>
			<div class="col-lg-3 col-md-6">
				<button class="card activity-card h-100" on:click={() => openActivity('lockpicking')}>
					<img
						src="{base}/assets/img/activities/toool.gif"
						alt="Lockpicking"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">Lockpicking!</h4>
					</div>
				</button>
			</div>
			<div class="col-lg-3 col-md-6">
				<button class="card activity-card h-100" on:click={() => openActivity('gameshows')}>
					<img
						src="{base}/assets/img/activities/lintile.jpg"
						alt="Game Shows with Lintile"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">Game Shows with Lintile!</h4>
					</div>
				</button>
			</div>
			<div class="col-lg-3 col-md-6">
				<button class="card activity-card h-100" on:click={() => openActivity('linux')}>
					<img
						src="{base}/assets/img/activities/linux.jpg"
						alt="Linux Village"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">Linux Village!</h4>
					</div>
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Activity Modal -->
{#if activeActivity && activityInfo[activeActivity]}
	<div
		class="lightbox-overlay"
		on:click={closeActivity}
		on:keydown={(e) => e.key === 'Escape' && closeActivity()}
		role="dialog"
		aria-modal="true"
		aria-label={activityInfo[activeActivity].title}
		tabindex="-1"
	>
		<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
		<div class="activity-modal" on:click|stopPropagation>
			<button class="lightbox-close" on:click={closeActivity} aria-label="Close">&times;</button>
			<h3>{activityInfo[activeActivity].title}</h3>
			{@html activityInfo[activeActivity].description}
		</div>
	</div>
{/if}

<!-- Supporters Section -->
<section id="supporters" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>2026 Supporters</h2>
		</div>
		{#each sponsorTiers as tier (tier.tierName)}
			<div class="row no-gutters supporters-wrap clearfix gy-4 gx-4 mb-5">
				<div class="col-12">
					<div class="section-header">
						<img src={tier.tierImage} alt={tier.tierName} class="sponsor-img-center" />
					</div>
				</div>
				<div class="row justify-content-center">
					{#each tier.tierSponsors as sponsor (sponsor.name)}
						<div class="col-lg-4 col-md-4 col-xs-4">
							<div class="sponsor-logo">
								<a href={sponsor.url} target="_blank" rel="noopener">
									<img src={sponsor.logo} class="img-fluid" alt={sponsor.name} />
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- Contribute Section -->
<section id="contribute" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Donate your Time!</h2>
		</div>
		<div class="alert alert-success container-fluid text-center fw-bold" role="alert">
			CFV Opens in November!
		</div>
	</div>
</section>

<!-- sigint carrier -->
<div class="signal-carrier" aria-hidden="true">
	<span data-sig="tT" data-seq="3"></span>
	<span data-sig="Gu" data-seq="1"></span>
	<span data-sig="1x" data-seq="4"></span>
	<span data-sig="3s" data-seq="2"></span>
	<span data-sig="!" data-seq="5"></span>
</div>
