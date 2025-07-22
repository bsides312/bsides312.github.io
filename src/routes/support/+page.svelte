<script lang="ts">
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
			name: 'Community',
			price: 'Cross Promotion Collaboration',
			description: 'Community partnerships and collaboration',
			benefits: [
				'Logo on this website',
				'Social media mentions'
			]
		},
		{
			name: 'Basic',
			price: '$500',
			description: 'Choose two benefits',
			benefits: [
				'Logo on this website or venue',
				'(2) Event pass',
				'Social media mentions'
			],
			donateUrl: 'https://paypal.me/bsides312/500'
		},
		{
			name: 'Bronze',
			price: '$1000',
			description: 'Essential sponsorship package',
			benefits: [
				'Logo on this website',
				'(2) Event pass',
				'Social media mentions'
			],
			donateUrl: 'https://paypal.me/bsides312/1000'
		},
		{
			name: 'Silver',
			price: '$2000',
			description: 'Enhanced visibility package',
			benefits: [
				'All Bronze benefits plus:',
				'(2) Additional event passes',
				'Logo on signage around event',
				'Announcements during event',
				'Logo on printed materials'
			],
			donateUrl: 'https://paypal.me/bsides312/2000',
			highlighted: true
		},
		{
			name: 'Gold',
			price: '$3000',
			description: 'Premium sponsorship experience',
			benefits: [
				'All Silver benefits plus:',
				'(2) Additional event passes',
				'Mention in the media coverage',
				'Logo on T-shirts',
				'Banner placement with maximum visibility',
				'Event Booth'
			],
			donateUrl: 'https://paypal.me/bsides312/3000'
		},
		{
			name: 'Platinum',
			price: '$5000',
			description: 'Top-tier partnership',
			benefits: [
				'All Gold benefits plus:',
				'(4) Additional event passes',
				'Bronze Level for one consecutive year'
			],
			donateUrl: 'https://paypal.me/bsides312/5000'
		},
		{
			name: 'Diamond',
			price: '$10000',
			description: 'Ultimate partnership experience',
			benefits: [
				'All Platinum benefits plus:',
				'(10) Additional event passes',
				'Gold Level for one consecutive year'
			],
			donateUrl: 'https://paypal.me/bsides312/10000'
		}
	];
</script>

<svelte:head>
	<title>Support Us - BSides312</title>
	<meta name="description" content="Support BSides312 through corporate sponsorship or donations. Help us make Chicago's biggest little hacker conference possible." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Support Us</span></h1>
		<p>BSides312 is run by the Hak4Kidz nonprofit, making corporate sponsorships and personal donations tax-deductible.</p>
		<a href="#support" class="btn-primary">DONATE!</a>
	</div>
</section>

<!-- Corporate Sponsorship Section -->
<section id="support" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Believe In Us</h2>
			<p>Corporate Sponsorship and Donation Options</p>
			<p>To become a BSides312 corporate sponsor, email sponsorship [@] bsides312.org or use the 'Donate Now' buttons below.</p>
		</div>

		<div class="row">
			<div class="section-header">
				<h3>Corporate Sponsorship Tiers</h3>
			</div>

			{#each sponsorshipTiers as tier}
				<div class="col-xs-4 col-md-3 mb-4">
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
								{#each tier.benefits as benefit}
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
								<div class="contact-note">
									Contact us for details
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsorship-card {
		background: rgba(6, 12, 34, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		height: 100%;
		display: flex;
		flex-direction: column;
		backdrop-filter: blur(10px);
		transition: all 0.3s ease;
		overflow: hidden;
	}

	.sponsorship-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
		border-color: var(--primary-color);
	}

	.sponsorship-card.highlighted {
		border-color: var(--primary-color);
		box-shadow: 0 10px 30px rgba(93, 189, 252, 0.2);
		transform: scale(1.05);
	}

	.sponsorship-card.highlighted:hover {
		transform: scale(1.05) translateY(-5px);
	}

	.card-header {
		background: rgba(93, 189, 252, 0.1);
		padding: 30px 20px;
		text-align: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.tier-name {
		color: var(--primary-color);
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 15px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.tier-price {
		color: var(--text-light);
		font-size: 1.8rem;
		font-weight: 600;
		margin-bottom: 10px;
	}

	.tier-description {
		color: var(--text-muted);
		font-size: 0.9rem;
		margin: 0;
		font-style: italic;
	}

	.card-body {
		padding: 30px 20px;
		flex-grow: 1;
	}

	.benefits-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.benefits-list li {
		display: flex;
		align-items: flex-start;
		margin-bottom: 15px;
		color: var(--text-light);
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.benefits-list i {
		color: var(--primary-color);
		margin-right: 10px;
		margin-top: 2px;
		flex-shrink: 0;
	}

	.card-footer {
		padding: 25px 20px;
		text-align: center;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		background: rgba(6, 12, 34, 0.2);
	}

	.btn-donate {
		background: var(--gradient-primary);
		border: none;
		color: white;
		padding: 12px 30px;
		border-radius: 25px;
		font-weight: 600;
		text-decoration: none;
		display: inline-block;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 0.9rem;
	}

	.btn-donate:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(93, 189, 252, 0.3);
		color: white;
	}

	.contact-note {
		color: var(--text-muted);
		font-size: 0.9rem;
		font-style: italic;
		padding: 12px 0;
	}

	@media (max-width: 992px) {
		.col-xs-4.col-md-3 {
			flex: 0 0 50%;
			max-width: 50%;
		}

		.sponsorship-card.highlighted {
			transform: none;
		}

		.sponsorship-card.highlighted:hover {
			transform: translateY(-5px);
		}
	}

	@media (max-width: 768px) {
		.col-xs-4.col-md-3 {
			flex: 0 0 100%;
			max-width: 100%;
		}

		.sponsorship-card {
			margin-bottom: 30px;
		}

		.card-header {
			padding: 25px 15px;
		}

		.card-body {
			padding: 25px 15px;
		}

		.card-footer {
			padding: 20px 15px;
		}

		.tier-name {
			font-size: 1.3rem;
		}

		.tier-price {
			font-size: 1.5rem;
		}
	}

	@media (max-width: 576px) {
		.benefits-list li {
			font-size: 0.9rem;
		}

		.btn-donate {
			padding: 10px 25px;
			font-size: 0.85rem;
		}
	}
</style> 