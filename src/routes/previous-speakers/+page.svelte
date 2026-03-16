<script lang="ts">
	interface Speaker {
		name: string;
		topic?: string;
	}

	interface YearSpeakers {
		year: number;
		speakers: Speaker[];
	}

	const previousSpeakers: YearSpeakers[] = [
		{
			year: 2025,
			speakers: [
				{ name: 'Cathy Ullman', topic: 'Defending Beyond Defense' },
				{ name: 'Chris Traynor', topic: 'Pentest Pains' },
				{ name: 'Danielle McGuire', topic: 'Securing the Grid of Tomorrow' },
				{
					name: 'Filipi Pires',
					topic: 'Misconfiguration-Driven Cloud Attacks: A Graph-Based Exploration'
				},
				{ name: 'Ginji Terrano', topic: 'Open Sesame' },
				{ name: 'Jose Hernandez', topic: 'Bringing Down the BYOVD: Leveraging WDAC to End Malicious Driver Attacks' },
				{
					name: 'Kadi McKean',
					topic: 'Trailblazing: Lessons from Oregon Trail for the Secure Software Supply Chain'
				},
				{
					name: 'Olivia Gallucci',
					topic: "Unlocking macOS Internals: A Beginner's Guide to Apple's Open Source Code"
				},
				{ name: 'Patrick Laverty', topic: 'Can a Hacker Murder Your City' },
				{
					name: 'Roy Talyosef',
					topic:
						'Adversarial Intelligence: Redefining Application Security through the eyes of an attacker'
				},
				{
					name: 'Steve Shelton',
					topic:
						"(Keynote) When the Night Has Come: Finding Belonging in a World That Doesn't Understand Us"
				},
				{
					name: 'Tamry Juntunen',
					topic:
						'Empowering Neurodivergent Individuals in Cybersecurity: Strategies for Inclusion and Success'
				},
				{ name: 'Zach Smith', topic: 'Monsters Under Your Bed - Mapping the Dark Web with Python' }
			]
		},
		{
			year: 2024,
			speakers: [
				{
					name: 'Stefani Goerlich',
					topic: 'Opening Keynote: "Securing Sexuality: Rewiring our Intimate Connections"'
				},
				{
					name: 'Chris Roberts',
					topic:
						'Closing Keynote: "The Evolution of Threat Intelligence: Tracking Your Boss for Fun, Profit, and Protection"'
				},
				{
					name: 'Thamer AlJohani',
					topic:
						'"Navigating Privacy in the Digital Era: A Comprehensive Exploration of GDPR and CCPA"'
				},
				{
					name: 'Sara Anstey',
					topic: '"Educating Your Guesses: How to Quantify Risk and Uncertainty"'
				},
				{
					name: 'Dr. Catherine J. Ullman',
					topic: '"Dumpster Fires: three things about IR I learned as a firefighter"'
				},
				{
					name: 'Jake Hildreth',
					topic: '"Protect Your Most Sensitive Users With This One Weird Trick!"'
				},
				{
					name: 'Dwayne McDaniel',
					topic: '"Championing Security: Scaling Security At Every Level"'
				},
				{ name: 'Anita Nikolich', topic: '"Senior Citizens Fight Scammers"' },
				{ name: 'Whitney Phillips', topic: '"Mobile Application Penetration Testing"' },
				{
					name: 'Ryan Wisniewski',
					topic: '"The SaaS and the Furious: A Deep Dive into SaaS Compromises"'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>Previous Speakers - BSides312</title>
	<meta name="description" content="View our talented speakers from past BSides312 conferences" />
</svelte:head>

<!-- Previous Speakers Section -->
<section id="previous-speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Previous Speakers</h2>
			<p>View our talented speakers from past BSides312 conferences</p>
		</div>

		{#each previousSpeakers as yearGroup (yearGroup.year)}
			<div class="mb-5">
				<h3 class="mb-4 pb-2 year-heading">
					<i class="bi bi-calendar-event text-warning me-2"></i>{yearGroup.year}
				</h3>

				<div class="row">
					{#each yearGroup.speakers as speaker (speaker.name)}
						<div class="col-md-6 col-lg-4 mb-3">
							<div class="card h-100">
								<div class="card-body">
									<h5 class="card-title mb-1">
										<i class="bi bi-person text-info me-2"></i>{speaker.name}
									</h5>
									{#if speaker.topic}
										<p class="mb-0 speaker-topic">{speaker.topic}</p>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div class="card text-center p-4 mt-3">
			<div class="card-body">
				<i class="bi bi-youtube display-1 text-danger mb-3"></i>
				<h3 class="mb-3">Want to see these talks?</h3>
				<p class="mb-4">Check out our YouTube channel for recordings of many past presentations!</p>
				<a
					href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
					target="_blank"
					rel="noopener"
					class="btn btn-outline-primary"
				>
					<i class="bi bi-youtube me-2"></i>Visit Our YouTube Channel
				</a>
			</div>
		</div>
	</div>
</section>
