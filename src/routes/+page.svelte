<script lang="ts">
	import { sponsors, getSponsorsByTier, sponsorTierImages, type Sponsor } from '$lib/stores/sponsors';
	import { faqItems } from '$lib/stores/faq';
	import { onMount } from 'svelte';

	let expandedFAQ = '';

	function toggleFAQ(id: string) {
		expandedFAQ = expandedFAQ === id ? '' : id;
	}

	interface SponsorTierData {
		tierName: string;
		tierSponsors: Sponsor[];
		tierImage: string;
	}

	function renderSponsorTier(tierName: string, tier: Sponsor['tier']): SponsorTierData | null {
		const tierSponsors = getSponsorsByTier(tier);
		if (tierSponsors.length === 0) return null;
		
		return { tierName, tierSponsors, tierImage: sponsorTierImages[tier] };
	}

	const sponsorTiers = [
		renderSponsorTier('Platinum Sponsors', 'platinum'),
		renderSponsorTier('Gold Sponsors', 'gold'),
		renderSponsorTier('Silver Sponsors', 'silver'),
		renderSponsorTier('Bronze Sponsors', 'bronze'),
		renderSponsorTier('Founding Sponsors', 'founding'),
		renderSponsorTier('Community Sponsors', 'community')
	].filter((tier): tier is SponsorTierData => tier !== null);
</script>

<svelte:head>
	<title>BSides312 - Chicago's Biggest Little Non-Profit Hacking Conference</title>
	<meta name="description" content="BSides312 is Chicago's biggest little non-profit hacking & information security conference. Join us May 15th, 2026 for talks, workshops, and networking." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<div class="text-center mb-4">
			<img src="/assets/img/about_logo.png" alt="BSides312 Logo" class="img-fluid hero-logo" style="max-height: 200px;" />
		</div>
		<h1>Chicago's Biggest Little <br /><span>Non-Profit</span> Hacker Conference</h1>
		<p>May 15th, 2026<br />Chicago, IL</p>
		<a href="#tickets" class="btn-primary">Stay Tuned!</a>
		<div class="mt-4 pt-3">
			<p class="mb-2 pb-0">See you in 2026, and in the meantime:</p>
			<a
				href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
				target="_blank"
				rel="noopener"
				class="btn-primary"
			>
				<i class="bi bi-youtube me-2"></i>Subscribe to our YouTube for all our past talks
			</a>
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
					BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking and
					infosec community. In fact, many of them founded the original BSides Chicago! It's built as a
					collaborative venue: whether you hack hardware, excel at logistics, or just bring curious
					friends, you help shape the conversation.
				</p>
				<p>
					Like every BSides event, the conference follows a community-driven model built by and for
					hackers. Its purpose is to widen the conversation beyond the usual boundaries, offering
					space for people to both present and take part in an intimate, collaborative setting. The
					result is an intense mix of discussions, demos, and interaction where new ideas take shape.
				</p>
				<p>
					If you and your organization are as passionate about the security community as we are and
					would like to sponsor our event, please reach out questions [@] bsides312.org. To show our
					thanks, sponsors will be welcome to chat about themselves and their organization, fostering
					connections with the BSides312 community.
				</p>
			</div>
			<div class="col-lg-6">
				<div class="row">
					<div class="col-lg-6">
						<h3>Where</h3>
						<p>Chicago, IL</p>
					</div>
					<div class="col-lg-6">
						<h3>When</h3>
						<p>May 15th, 2026</p>
					</div>
				</div>
				<div class="row mt-3">
					<div class="col-lg-12">
						<h3>Lodging TBD</h3>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Sponsors Section -->
<section id="supporters" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Sponsors</h2>
		</div>
		<div class="alert alert-warning container-fluid text-center fw-bold" role="alert">
			A huge thank you to all our sponsors for making this event possible!
		</div>

		{#each sponsorTiers as tier}
			<div class="row no-gutters supporters-wrap clearfix gy-4 gx-4 mb-5">
				<div class="section-header">
					<img src={tier.tierImage} alt={tier.tierName} class="sponsor-img-center" />
				</div>
				<div class="row justify-content-center">
					{#each tier.tierSponsors as sponsor}
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

<!-- FAQ Section -->
<section id="faq" class="section">
	<div class="container">
		<div class="section-header">
			<h2>Frequently Asked Questions</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-9">
				<ul class="faq-list">
					{#each faqItems as faq}
						<li>
							<button 
								class="faq-question"
								class:expanded={expandedFAQ === faq.id}
								on:click={() => toggleFAQ(faq.id)}
								type="button"
							>
								{faq.question}
								<i class="bi" class:bi-chevron-down={expandedFAQ !== faq.id} class:bi-chevron-up={expandedFAQ === faq.id}></i>
							</button>
							{#if expandedFAQ === faq.id}
								<div class="faq-answer">
									{@html faq.answer.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Contribute Section -->
<section id="contribute" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Donate your Time!</h2>
			<p>Here are some non-financial ways you can help support our cause:</p>
		</div>

		<div class="row">
			<div class="col-lg-6">
				<div id="volunteer">
					<div class="section-header">
						<h3>Volunteer With Us</h3>
						<p>Call for Volunteers is currently closed</p>
					</div>
				</div>
			</div>

			<div class="col-lg-6">
				<div id="cfp">
					<div class="section-header">
						<h3>Call for Presentations</h3>
						<p>Call for Presentations is currently closed</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-logo {
		animation: fadeInUp 1s ease-out 0.5s both;
	}

	.alert {
		background: rgba(255, 193, 7, 0.2);
		border: 1px solid #ffc107;
		color: #ffc107;
		border-radius: 10px;
		padding: 15px;
		margin-bottom: 40px;
	}

	.supporters-wrap {
		margin-bottom: 60px;
	}

	.faq-question {
		width: 100%;
		text-align: left;
		background: rgba(93, 189, 252, 0.1);
		border: none;
		color: white;
		padding: 20px;
		border-radius: 10px;
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.1rem;
		font-weight: 600;
		transition: all 0.3s ease;
	}

	.faq-question:hover {
		background: rgba(93, 189, 252, 0.2);
	}

	.faq-question.expanded {
		background: rgba(93, 189, 252, 0.2);
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.faq-answer {
		background: rgba(6, 12, 34, 0.4);
		padding: 20px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		color: rgba(255, 255, 255, 0.8);
		line-height: 1.6;
	}

	.faq-answer :global(p) {
		margin-bottom: 15px;
	}

	.faq-answer :global(p:last-child) {
		margin-bottom: 0;
	}

	.faq-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.faq-list li {
		margin-bottom: 15px;
		border-radius: 10px;
		overflow: hidden;
	}

	@media (max-width: 768px) {
		.hero h1 {
			font-size: 2.5rem;
		}

		.col-lg-4.col-md-4.col-xs-4 {
			flex: 0 0 50%;
			max-width: 50%;
		}
	}

	@media (max-width: 576px) {
		.col-lg-4.col-md-4.col-xs-4 {
			flex: 0 0 100%;
			max-width: 100%;
		}
	}
</style>
