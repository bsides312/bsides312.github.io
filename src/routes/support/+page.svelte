<script lang="ts">
	import { base } from '$app/paths';

	interface SponsorshipTier {
		name: string;
		price: string;
		description: string;
		benefits: string[];
		donateUrl?: string;
		highlighted?: boolean;
	}

	const sponsorshipTiers: SponsorshipTier[] = [
		{
			name: 'Diamond',
			price: '$10,000',
			description: 'Ultimate partnership experience',
			benefits: [
				'Platinum Level Plus',
				'(10) Additional event passes',
				'Gold Level for 1 consecutive year'
			],
			donateUrl: 'https://paypal.me/bsides312/10000'
		},
		{
			name: 'Platinum',
			price: '$5,000',
			description: 'Top-tier partnership',
			benefits: [
				'All Gold Level Perks',
				'(4) Additional event passes',
				'Bronze Level for 1 consecutive year'
			],
			donateUrl: 'https://paypal.me/bsides312/5000'
		},
		{
			name: 'Gold',
			price: '$3,000',
			description: 'Premium sponsorship experience',
			benefits: [
				'All Silver Level Perks',
				'(2) Additional event passes',
				'Mention in the media coverage',
				'Logo on T-shirts',
				'Logo on YouTube Videos',
				'Banner placement with maximum visibility',
				'Event Booth'
			],
			donateUrl: 'https://paypal.me/bsides312/3000',
			highlighted: true
		},
		{
			name: 'Silver',
			price: '$2,000',
			description: 'Enhanced visibility package',
			benefits: [
				'All Bronze Level Plus',
				'(2) Additional event passes',
				'Logo on signage around the event',
				'Announcements during the event',
				'Logo on printed materials'
			],
			donateUrl: 'https://paypal.me/bsides312/2000'
		},
		{
			name: 'Bronze',
			price: '$1,000',
			description: 'Essential sponsorship package',
			benefits: ['Logo on website', '(2) Event passes', 'Social media mentions'],
			donateUrl: 'https://paypal.me/bsides312/1000'
		}
	];
</script>

<svelte:head>
	<title>Support Us - BSides312</title>
	<meta
		name="description"
		content="Support BSides312 through corporate sponsorship or donations. Help us make Chicago's biggest little hacker conference possible."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br /><span>Support Us</span></h1>
		<p>
			BSides312 is run by the Hak4Kidz nonprofit, making corporate sponsorships and personal
			donations tax-deductible.
		</p>
		<div class="hero-buttons">
			<a href="#support" class="btn-primary">DONATE!</a>
			<a href="{base}/assets/docs/BSides 312_2026_Sponsor_Prospectus.pdf" target="_blank" rel="noopener" class="btn-primary btn-transparent">View Prospectus</a>
		</div>
	</div>
</section>

<!-- Corporate Sponsorship Section -->
<section id="support" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Believe In Us</h2>
		</div>

		<div class="alert alert-success container-fluid text-center fw-bold" role="alert">
			<a href="{base}/assets/docs/BSides 312_2026_Sponsor_Prospectus.pdf" target="_blank" rel="noopener" class="prospectus-link">
				Help make Chicago's biggest little hacker conference possible through corporate sponsorship!<br>
				Click here for the 2026 Sponsors Prospectus!
			</a>
		</div>

		<div class="row justify-content-center">
			<div class="section-header">
				<h3>Corporate Sponsorship Tiers</h3>
			</div>

			{#each sponsorshipTiers as tier (tier.name)}
				<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
					<div class="sponsorship-card" class:highlighted={tier.highlighted}>
						<div class="card-header">
							<h5 class="tier-name">{tier.name}</h5>
							<h6 class="tier-price">{tier.price}</h6>
							{#if tier.description}
								<p class="tier-description">{tier.description}</p>
							{/if}
						</div>
						<div class="card-body">
							<ul class="benefits-list">
								{#each tier.benefits as benefit (benefit)}
									<li>
										<i class="bi bi-check-circle"></i>
										{benefit}
									</li>
								{/each}
							</ul>
						</div>
						<div class="card-footer">
							{#if tier.donateUrl}
								<a href={tier.donateUrl} target="_blank" rel="noopener" class="btn btn-donate">
									Donate Now
								</a>
							{:else}
								<div class="contact-note">Contact us for details</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
