<script lang="ts">
	import { base } from '#lib/base';
	import SeoHead from '#lib/components/SeoHead.svelte';

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
				'Gold Level Plus',
				'(4) Additional event passes',
				'Bronze Level for 1 consecutive year'
			],
			donateUrl: 'https://paypal.me/bsides312/5000'
		},
		{
			name: 'Gold',
			price: '$4,000',
			description: 'Premium sponsorship experience',
			benefits: [
				'Silver Level Plus',
				'(3) Additional event passes',
				'Mention in the media coverage',
				'Logo on T-shirts',
				'Banner placement with maximum visibility',
				'Logo on YouTube Videos',
				'Event Booth'
			],
			donateUrl: 'https://paypal.me/bsides312/4000',
			highlighted: true
		},
		{
			name: 'Silver',
			price: '$3,000',
			description: 'Enhanced visibility package',
			benefits: [
				'Bronze Level Plus',
				'(3) Additional event passes',
				'Logo on signage around the event',
				'Announcements during the event',
				'Logo on printed materials'
			],
			donateUrl: 'https://paypal.me/bsides312/3000'
		},
		{
			name: 'Bronze',
			price: '$1,500',
			description: 'Essential sponsorship package',
			benefits: ['Logo on website', '(2) Event pass', 'Social media mentions'],
			donateUrl: 'https://paypal.me/bsides312/1500'
		}
	];
</script>

<SeoHead
	title="Support BSides312 — Sponsor Chicago's Security BSides Conference"
	description="Sponsor or donate to BSides312, the Security BSides hacker & cybersecurity conference in Chicago. Help make Chicago's non-profit infosec conference possible for our June 13, 2027 return."
	path="/support"
/>

<!-- Supporter Section -->
<section id="support" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h1>Support Us</h1>
			<div class="mt-3 d-flex flex-wrap gap-3 justify-content-center">
				<a href="https://paypal.me/bsides312" target="_blank" rel="noopener" class="btn-primary"
					>Make an Ad-Hoc Donation!</a
				>
				<a
					href="{base}/assets/docs/BSides312_2027_Sponsor_Prospectus.pdf"
					target="_blank"
					rel="noopener"
					class="btn-primary">View Sponsorship Prospectus</a
				>
			</div>
		</div>

		<div class="alert alert-success container-fluid text-center fw-bold" role="alert">
			<a
				href="{base}/assets/docs/BSides312_2027_Sponsor_Prospectus.pdf"
				target="_blank"
				rel="noopener"
				class="prospectus-link"
			>
				Help make Chicago's biggest little hacker conference possible by becoming a Supporter!<br />
				BSides312 is run by the Hak4Kidz nonprofit, making Supporter contributions and personal donations
				tax-deductible.
			</a>
		</div>
		<div class="row justify-content-center">
			<div class="section-header">
				<br />
				<h3>Supporter Tiers</h3>
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
								<a href={tier.donateUrl} target="_blank" rel="noopener" class="btn-primary">
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
