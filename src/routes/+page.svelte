<script lang="ts">
	import { getSponsorsByTier, sponsorTierImages } from '$lib/stores/sponsors';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';

	// Speaker photos for the scrolling gallery
	interface SpeakerPhoto {
		profilePicture: string;
		fullName: string;
	}
	let speakerPhotos: SpeakerPhoto[] = [];

	onMount(async () => {
		try {
			const res = await fetch('https://sessionize.com/api/v2/v1trm5nf/view/Speakers');
			if (res.ok) {
				speakerPhotos = await res.json();
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

	function downloadCalendar() {
		const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BSides312//BSides312 2026//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:America/Chicago
BEGIN:DAYLIGHT
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
TZNAME:CDT
DTSTART:20260308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
TZNAME:CST
DTSTART:20261101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:bsides312-2026@bsides312.org
DTSTART;TZID=America/Chicago:20260516T090000
DTEND;TZID=America/Chicago:20260516T190000
SUMMARY:BSides312 2026
LOCATION:Irish American Heritage Center\\, 4626 N Knox Ave\\, Chicago\\, IL 60641
DESCRIPTION:BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking and infosec community. Join us for talks, workshops, and networking with security professionals from around the world.
URL:https://bsides312.org
END:VEVENT
END:VCALENDAR`;
		const blob = new Blob([icsContent], { type: 'text/calendar' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'BSides312-2026.ics';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<svelte:head>
	<title>BSides312 - Chicago's Biggest Little Non-Profit Hacking Conference</title>
	<meta
		name="description"
		content="BSides312 is Chicago's biggest little non-profit hacking & information security conference. Join us for talks, workshops, and networking with security professionals from around the world."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<img src="{base}/assets/img/about_logo.png" alt="BSides312 Logo" class="img-fluid hero-logo" />
		<h1 class="text-center mb-4">Non-Profit Hacking Conference</h1>
		<p class="lead text-center mb-4">
			BSides312 brings together security professionals, researchers, and enthusiasts for an
			unforgettable day of learning and networking.
		</p>
		<div class="text-center">
			<p class="mb-3"><strong>We'll be back May 16TH, 2026!!</strong></p>
			<div class="hero-buttons">
				<div class="hero-buttons-row">
					<a
						href="https://www.simpletix.com/e/security-bsides312-2026-tickets-247316"
						target="_blank"
						rel="noopener"
						class="btn-primary"
					>
						<i class="bi bi-ticket-perforated me-2"></i>Get Tickets
					</a>
					<a
						href="https://tinyurl.com/bsides312"
						target="_blank"
						rel="noopener"
						class="btn-primary"
					>
						<i class="bi bi-discord me-2"></i>Join our Discord!
					</a>
					<a href="{base}/support" class="btn-primary">
						<i class="bi bi-heart-fill me-2"></i>Support Us!
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
				<div class="card mb-3">
					<div class="card-body when-where-body">
						<h3 class="card-title">
							<i class="bi bi-geo-alt-fill text-danger me-2"></i>When and Where
						</h3>
						<div class="when-where-top">
							<div class="when-where-datetime">
								<p class="mb-1"><strong>Date:</strong> May 16th, 2026</p>
								<p class="mb-0"><strong>Time:</strong> 9:00 AM - 7:00 PM CST</p>
							</div>
							<div class="when-where-address">
								<p class="mb-1">Irish American Heritage Center</p>
								<p class="mb-1">4626 N Knox Ave, Chicago, IL</p>
								<p class="mb-0"><small>TONS of parking!</small></p>
							</div>
						</div>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8!2d-87.7425!3d41.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc7f9c0f0f0f%3A0x0!2s4626%20N%20Knox%20Ave%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
							width="100%"
							height="200"
							class="map-iframe"
							allowfullscreen
							loading="lazy"
							referrerpolicy="no-referrer-when-downgrade"
							title="Irish American Heritage Center Location"
						></iframe>
						<div class="when-where-btns">
							<a
								href="https://maps.app.goo.gl/RuApEvazVQGJAXHi7"
								target="_blank"
								rel="noopener"
								class="btn-primary"
							>
								<i class="bi bi-box-arrow-up-right"></i>Open in Google Maps
							</a>
							<button
								class="btn-primary"
								on:click={downloadCalendar}
								type="button"
								aria-label="Add BSides312 to calendar"
							>
								<i class="bi bi-calendar-plus"></i>Add to Calendar
							</button>
						</div>
					</div>
				</div>
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
			<h2>Ride the L with Us!</h2>
			<p>Check out all our 1337 neighborhoods you can explore!</p>
		</div>

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
			<div class="col-lg-4 col-md-6">
				<div class="card activity-card h-100">
					<img
						src="{base}/assets/img/activities/ctf.jpg"
						alt="CTF Hacking Challenge"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">CTF Hacking Challenge!</h4>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card activity-card h-100">
					<img
						src="{base}/assets/img/activities/toool.jpg"
						alt="Lockpicking"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">Lockpicking!</h4>
					</div>
				</div>
			</div>
			<div class="col-lg-4 col-md-6">
				<div class="card activity-card h-100">
					<img
						src="{base}/assets/img/activities/lintile.jpg"
						alt="Game Shows with Lintile"
						class="activity-card-img"
						loading="lazy"
					/>
					<div class="card-body text-center">
						<h4 class="card-title">Game Shows with Lintile!</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Supporters Section -->
<section id="supporters" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Supporters</h2>
		</div>
		<div class="text-center mb-4">
			<a href="{base}/support#support" class="btn-primary">
				<i class="bi bi-heart-fill me-2"></i>Click for Sponsorship info!
			</a>
		</div>
		<div class="alert alert-warning container-fluid text-center fw-bold" role="alert">
			Our Call for Supporters is still open! Supporter logos will be listed here as they sign!
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
			We're full up on volunteers and speakers for 2026! <br>Grab a ticket and join us at the con!
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
