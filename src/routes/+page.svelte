<script lang="ts">
	import { getSponsorsByTier, sponsorTierImages } from '$lib/stores/sponsors';
	import { faqItems } from '$lib/stores/faq';
	import { base } from '$app/paths';

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
		<div class="text-center mb-0">
			<img
				src="{base}/assets/img/about_logo.png"
				alt="BSides312 Logo"
				class="img-fluid hero-logo"
				style="max-height: 360px;"
			/>
		</div>
		<h1 class="text-center mb-4">Chicago's Biggest Little Non-Profit Hacking Conference</h1>
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
						<i class="bi bi-heart-fill me-2"></i>Sponsor Us!
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="section">
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<h2>About BSides312</h2>
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
					would like to sponsor our event, please reach out questions [@] bsides312.org. To show our
					thanks, sponsors will be welcome to chat about themselves and their organization,
					fostering connections with the BSides312 community.
				</p>
			</div>
			<div class="col-lg-6">
				<div class="row">
					<div class="col-lg-6">
						<h3>Where</h3>
						<p>
							Irish American Heritage Center<br />
							4626 N Knox Ave<br />
							Chicago, IL
						</p>
						<div class="map-container">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8!2d-87.7425!3d41.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc7f9c0f0f0f%3A0x0!2s4626%20N%20Knox%20Ave%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
								width="100%"
								height="200"
								style="border:0;border-radius:8px;"
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
								<i class="bi bi-geo-alt-fill"></i> Open in Google Maps
							</a>
						</div>
					</div>
					<div class="col-lg-6">
						<h3>When</h3>
						<p>May 16th, 2026</p>
					</div>
				</div>
				<div class="row mt-3">
				</div>
			</div>
		</div>
	</div>

	<!-- Ribbon Image Gallery -->
	<div class="ribbon-gallery">
		<div class="ribbon-track">
			{#each Array(2) as _, copy}
				{#each Array(31) as _, i}
					<img
						src="{base}/assets/img/gallery/{i + 1}.webp"
						alt="BSides312 gallery photo {i + 1}"
						class="ribbon-img"
						loading="lazy"
					/>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- Sponsors Section -->
<section id="supporters" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Sponsors</h2>
		</div>
		<div class="text-center mb-4">
			<a href="{base}/support#support" class="btn-sponsor-cta">
				<i class="bi bi-heart-fill me-2"></i>Click for Sponsorship info!
			</a>
		</div>
		<div class="alert alert-warning container-fluid text-center fw-bold" role="alert">
			Our Call for Sponsors is still open!
			Sponsors logos will be listed here as they sign!
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
			<div class="col-lg-6">
				<div id="volunteer">
					<div class="section-header">
						<h3>Volunteer With Us</h3>
						<p>
							Our call for volunteers is closed for 2026, but thank you for your interest!
						</p>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div id="cfp">
					<div class="section-header">
						<h3>Call for Presentations (Closes Feb 28th!)</h3>
						<p>
							We are looking for speakers of all experience levels! Share your knowledge, research, and
							insights with the BSides312 community.
						</p>
					</div>
					<div class="text-center mb-4">
						<a
							href="https://sessionize.com/bsides312"
							target="_blank"
							rel="noopener"
							class="btn-primary"
						>
							<i class="bi bi-megaphone me-2"></i>Submit Your Proposal
						</a>
					</div>
					<div class="cfp-details">
						<p>
							<strong>Talk Formats:</strong> Choose between 25-minute or 50-minute presentation slots
						</p>
						<p>
							Whether you're a first-time speaker or a seasoned presenter, we want to hear from you.
							Topics can range from technical deep-dives to broader security concepts, privacy, policy,
							and beyond.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


<!-- FAQ Section -->
<section id="faq" class="section">
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