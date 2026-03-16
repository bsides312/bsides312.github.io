<script lang="ts">
	import { getSponsorsByTier, sponsorTierImages } from '$lib/stores/sponsors';
	import { faqItems } from '$lib/stores/faq';
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	export let data: PageData;

	type SponsorTier = 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';

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

	// FAQ state management
	let activeFaq: string | null = null;

	function toggleFaq(id: string) {
		activeFaq = activeFaq === id ? null : id;
	}

	// Gallery lightbox
	let lightboxSrc: string | null = null;

	function openLightbox(src: string) {
		lightboxSrc = src;
	}

	function closeLightbox() {
		lightboxSrc = null;
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
		<img
			src="{base}/assets/img/about_logo.png"
			alt="BSides312 Logo"
			class="img-fluid hero-logo"
		/>
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
						class="btn-primary btn-transparent"
					>
						<i class="bi bi-ticket-perforated me-2"></i>Get Tickets
					</a>
					<a
						href="https://tinyurl.com/bsides312"
						target="_blank"
						rel="noopener"
						class="btn-primary btn-transparent"
					>
						<i class="bi bi-discord me-2"></i>Join our Discord!
					</a>
					<a
						href="{base}/support"
						class="btn-primary btn-transparent"
					>
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

<!-- About Section -->
<section id="about" class="section section-with-bg">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 mb-4">
				<div class="card h-100">
					<div class="card-body">
						<h2><i class="bi bi-terminal me-2"></i>About BSides312</h2>
						<p>
							BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking
							and infosec community. In fact, many of them founded the original BSides Chicago! It's
							built as a collaborative venue; whether you hack hardware, excel at logistics, or just
							bring curious friends, you help shape the conversation.
						</p>
						<p>
							Like every BSides event, the conference follows a community-driven model built by and for
							hackers. Its purpose is to widen the conversation beyond the usual boundaries, offering
							space for people to both present and take part in an intimate, collaborative setting. The
							result is an intense mix of discussions, demos, and interaction where new ideas take
							shape.
						</p>
						<p>
							If you and your organization are as passionate about the security community as we are and
							would like to support our event, please reach out questions [@] bsides312.org. To show our
							thanks, supporters will be welcome to chat about themselves and their organization,
							fostering connections with the BSides312 community.
						</p>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card mb-3">
					<div class="card-body">
						<h3 class="card-title"><i class="bi bi-geo-alt-fill text-danger me-2"></i>Where</h3>
						<p>
							Irish American Heritage Center<br />
							4626 N Knox Ave<br />
							Chicago, IL
						</p>
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
						<a
							href="https://maps.app.goo.gl/RuApEvazVQGJAXHi7"
							target="_blank"
							rel="noopener"
							class="map-link-btn"
						>
							<i class="bi bi-box-arrow-up-right me-1"></i>Open in Google Maps
						</a>
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<h3 class="card-title"><i class="bi bi-calendar-event text-warning me-2"></i>When</h3>
						<p class="mb-0"><strong>May 16th, 2026</strong> &mdash; Full day event</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Ribbon Image Gallery -->
	<div class="ribbon-gallery">
		<div class="ribbon-track">
			{#each Array(2) as _, copy}
				{#each data.galleryImages as imgPath, i}
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
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox">&times;</button>
		<img src={lightboxSrc} alt="BSides312 gallery photo full size" class="lightbox-img" />
	</div>
{/if}

<!-- Supporters Section -->
<section id="supporters" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Supporters</h2>
		</div>
		<div class="text-center mb-4">
			<a href="{base}/support#support" class="btn-sponsor-cta">
				<i class="bi bi-heart-fill me-2"></i>Click for Sponsorship info!
			</a>
		</div>
		<div class="alert alert-warning container-fluid text-center fw-bold" role="alert">
			Our Call for Supporters is still open!
			Supporter logos will be listed here as they sign!
		</div>
		{#each sponsorTiers as tier (tier.tierName)}
			<div class="row no-gutters supporters-wrap clearfix gy-4 gx-4 mb-5">
				<div class="section-header">
					<img src={tier.tierImage} alt={tier.tierName} class="sponsor-img-center" />
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
			Here are some non-financial ways you can help support our cause:
		</div>

		<div class="row">
			<div class="col-lg-6 mb-4" id="volunteer">
				<div class="card h-100">
					<div class="card-body">
						<h3 class="card-title">
							<i class="bi bi-people-fill text-info me-2"></i>Volunteer With Us
						</h3>
						<p>Our call for volunteers is closed for 2026, but thank you for your interest!</p>
						<p class="mb-0">
							<small class="text-muted-60">
								<i class="bi bi-bell me-1"></i>Follow us on social media to be notified when volunteer applications open for future events.
							</small>
						</p>
					</div>
				</div>
			</div>

			<div class="col-lg-6 mb-4" id="cfp">
				<div class="card h-100">
					<div class="card-body">
						<h3 class="card-title">
							<i class="bi bi-mic-fill text-warning me-2"></i>Call for Presentations — CLOSED
						</h3>
						<p>
							Our CFP is now <strong>closed</strong> and all talks have been selected. Thank you to
							everyone who submitted a proposal!
						</p>
						<p>
							If you submitted a talk, please check your email for a message from
							<strong>bsides312@events.sessionize.com</strong> with your selection status.
						</p>
						<p class="mb-0">
							In the meantime, check out talks from previous events on our
							<a href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener">
								<i class="bi bi-youtube me-1"></i>YouTube channel</a>.
						</p>
					</div>
				</div>
			</div>
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

<!-- FAQ Section -->
<section id="faq" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Frequently Asked Questions</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-9">
				<ul class="faq-list">
					{#each faqItems as faq (faq.id)}
						<li>
							<button
								class="faq-question"
								class:expanded={activeFaq === faq.id}
								on:click={() => toggleFaq(faq.id)}
								type="button"
							>
								{faq.question}
								<i
									class="bi"
									class:bi-chevron-down={activeFaq !== faq.id}
									class:bi-chevron-up={activeFaq === faq.id}
								></i>
							</button>
							{#if activeFaq === faq.id}
								<div class="faq-answer">
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html faq.answer
										.replace(/\n\n/g, '</p><p>')
										.replace(/^/, '<p>')
										.replace(/$/, '</p>')}
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>
