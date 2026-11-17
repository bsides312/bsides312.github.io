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

	const quickFacts = [
		{ value: 'June 2027', label: 'Next event · Chicago, IL (venue TBD)' },
		{ value: '299+', label: 'Attendees in 2026' },
		{ value: '117', label: 'Organizers, volunteers, sponsors & speakers' },
		{ value: '3', label: 'Events since 2024' }
	];

	const reasons = [
		{
			icon: 'bi-megaphone-fill',
			title: 'Brand placement & awareness',
			text: 'Depending on your level of sponsorship, you may receive brand placement on t-shirts, signage/lanyards, lunch sessions, or attendee badges. Creative and custom branding may be arranged, including transportation, swag, banners, and podcast interviews.'
		},
		{
			icon: 'bi-people-fill',
			title: 'Stay in touch with the industry',
			text: 'BSides enables supporters and participants to identify and connect with industry leaders and voices. Participants represent the social networking of security. They are the people you want to engage and solicit feedback from, and who will give a voice to your conversation.'
		},
		{
			icon: 'bi-lightbulb-fill',
			title: 'Be a part of the next big thing',
			text: 'Nobody knows what that "next big thing" will be, but these events are community driven, with presentations voted upon by the industry. We believe that listening to the underground can help prepare and equip you for whatever comes next.'
		},
		{
			icon: 'bi-bullseye',
			title: 'Big fish, small pond',
			text: 'For some, sponsoring large events is not within their price range, leaving them with no ability to communicate their message. At BSides we leave no one out. Sponsorship comes in all sizes, and our community atmosphere brings together active, engaged participants who want to listen.'
		}
	];

	const formatPoints = [
		{
			title: 'Engage',
			text: 'Unlike events where the speaker is rushed in and out, BSides provides a small and intimate environment where attendees directly engage the speaker before, during, and after their talk. Attendees are looking for more than information; they are looking to make connections they will call upon all year.'
		},
		{
			title: 'Culture',
			text: 'Physical events constrain themselves with space and time, but frameworks permit the continuous creation of individual events. Our goal is to provide people with options by removing those barriers. The initial BSides event spawned a wave of new events throughout the United States and around the world.'
		},
		{
			title: 'Participation',
			text: 'BSides is made up not of members but of participants. Sponsoring enables you to be a part of the conversation and interact with attendees. As our thanks, we are committed to connecting you with those attendees of interest to you and your business.'
		}
	];
</script>

<SeoHead
	title="Support BSides312 — Sponsor Chicago's Security BSides Conference"
	description="Sponsor or donate to BSides312, the Security BSides hacker & cybersecurity conference in Chicago. Help make Chicago's non-profit infosec conference possible for our June 2027 return."
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
		<div class="row g-3 justify-content-center mt-4 mb-5 quick-facts">
			{#each quickFacts as fact (fact.label)}
				<div class="col-6 col-lg-3">
					<div class="stat-tile">
						<div class="stat-value">{fact.value}</div>
						<div class="stat-label">{fact.label}</div>
					</div>
				</div>
			{/each}
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

		<div class="info-card text-center mt-2">
			<h3>Custom Sponsorship</h3>
			<p>
				BSides encourages participation from a wide range of organizations. If you have an idea for
				a custom sponsorship, let us know &mdash; we'll do our best to provide a way for you to get
				involved. Ideas may include (but are not limited to) the contribution of physical space,
				logoed swag bags, transportation, food and beverage, contests and give-aways, media
				publicity or PR, and/or legal assistance.
			</p>
			<a href="mailto:sponsors@bsides312.org" class="btn-primary">
				<i class="bi bi-envelope-fill me-2"></i>sponsors@bsides312.org
			</a>
		</div>
	</div>
</section>

<!-- Why Sponsor Section -->
<section id="why-sponsor" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Why Sponsor BSides312?</h2>
			<p>
				BSides offers events where all participants can engage each other to develop connections,
				friendships, and networks with industry professionals. We design our options so that an
				organization of any size can participate.
			</p>
		</div>
		<div class="row g-4 mb-4">
			{#each reasons as reason (reason.title)}
				<div class="col-md-6">
					<div class="info-card h-100">
						<h4><i class="bi {reason.icon} me-2"></i>{reason.title}</h4>
						<p>{reason.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<figure class="quote-block">
			<blockquote>
				&ldquo;BSides312 made sense for us to come here and work with the community. I heard there's
				over 400 attendees, so we got to spend a lot of time with people here locally that use our
				platform and work with our organization. So, it was a great event for us.&rdquo;
			</blockquote>
			<figcaption>&mdash; Lance Wright, SpecterOps</figcaption>
		</figure>
	</div>
</section>

<!-- About BSides312 Section -->
<section id="sponsor-about" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>BSides312 So Far</h2>
		</div>
		<div class="info-card mb-4">
			<p>
				BSides312 held its first annual event in June 2024 at The Bottom Lounge. In 2026 we held our
				third event at the Irish American Heritage Center in Chicago's peaceful Mayfair
				neighborhood. Our team of 117 organizers, volunteers, sponsors, and speakers welcomed over
				299 attendees to dive into securing people, incident response, penetration testing, and
				more.
			</p>
			<p>
				Programming also included the opening keynote presented by Heidi Potter (<em
					>Community Doesn't Start With a Conference</em
				>). Community engagement included an exhibitor area, a Capture the Flag contest, and
				locksport challenges provided by Chicago TOOOL.
			</p>
			<p class="mb-0">
				In 2025 we introduced a new initiative: recording both speaking tracks. The recordings are
				being released on YouTube and feature Platinum and Gold sponsor logos within the videos.
			</p>
		</div>

		<div class="section-header">
			<h2>What is Security BSides?</h2>
		</div>
		<div class="row g-4 mb-4">
			<div class="col-lg-6">
				<div class="info-card h-100">
					<p>
						Each BSides is a community-driven framework for building events for and by information
						security community members. The goal is to expand the spectrum of conversation beyond
						the traditional confines of space and time, creating opportunities for individuals to
						both present and participate in an intimate atmosphere that encourages collaboration.
					</p>
					<p class="mb-0">
						BSides was born in 2009 when a number of quality speakers were rejected from a
						mainstream conference, not due to lack of quality but rather lack of space and time. Our
						mission is to provide people with options by removing common conference barriers and by
						providing more options for speakers, topics, and events.
					</p>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="info-card h-100">
					<ul class="timeline-list">
						<li><strong>2009</strong> Launched in the United States.</li>
						<li><strong>2010</strong> First European event &mdash; BSides goes global.</li>
						<li>
							<strong>2011</strong> More than 30 events worldwide across the US, Europe, India, Hong Kong,
							and Australia.
						</li>
					</ul>
					<p class="mb-2"><strong>Some things never change:</strong></p>
					<ul class="check-list mb-0">
						<li>Community organized, volunteer driven, and corporate funded</li>
						<li>A forum for expanding the spectrum of conversation</li>
						<li>Focused on giving a voice to the &ldquo;next big thing&rdquo;</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="row g-4 mb-4">
			{#each formatPoints as point (point.title)}
				<div class="col-md-4">
					<div class="info-card h-100">
						<h4>{point.title}</h4>
						<p class="mb-0">{point.text}</p>
					</div>
				</div>
			{/each}
		</div>

		<div class="info-card mb-4">
			<h4><i class="bi bi-newspaper me-2"></i>Media Attention</h4>
			<p class="mb-0">
				BSides International has attracted media attention and been written up in CSO Online,
				Network World, ComputerWorld, Information Week, The Register, ZDNet, and Dark Reading
				magazines. In addition to numerous blog posts and podcast placements, BSides International
				has also received coverage from Hacker News Network (HNN), EFFector, and Cisco System Cyber
				Risk Report. Many participants have been quoted and picked up by mainstream news sources
				including National Public Radio (NPR).
			</p>
		</div>

		<div class="info-card text-center">
			<h3>Ready to get involved?</h3>
			<p>
				Although the event itself is low cost to participants, the cost of hosting it is borne by
				the organizers. Besides the invaluable potential to network with security professionals at
				every level, sponsoring is a wonderful way to support the local Chicago security community.
			</p>
			<div class="d-flex flex-wrap gap-3 justify-content-center">
				<a
					href="{base}/assets/docs/BSides312_2027_Sponsor_Prospectus.pdf"
					target="_blank"
					rel="noopener"
					class="btn-primary"
				>
					<i class="bi bi-file-earmark-pdf-fill me-2"></i>View Sponsorship Prospectus
				</a>
				<a href="mailto:sponsors@bsides312.org" class="btn-primary">
					<i class="bi bi-envelope-fill me-2"></i>Contact Us
				</a>
			</div>
		</div>
	</div>
</section>
