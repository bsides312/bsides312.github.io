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
			year: 2026,
			speakers: [
				{ name: '4dw@r3', topic: 'OpenSource Poison: A Long Ignored Risk' },
				{ name: 'Admford', topic: 'You Did the Work — Now Get the Title' },
				{
					name: 'Amanda Kollmorgan',
					topic: 'Ctrl + Alt + Lead: Rebooting Cyber Culture with Human Skills'
				},
				{ name: 'Catherine Ullman', topic: 'So, You Want to be a Forensicator...' },
				{
					name: 'Heidi Potter',
					topic: '(Keynote) Community Doesn’t Start With a Conference'
				},
				{
					name: 'HelpMeRob',
					topic:
						'We Need to Talk About Signal: Security Assumptions, Threat Models, and Activist Community Risk'
				},
				{
					name: 'John Mathot',
					topic: 'The Subliminal Handshake: secret communication using the TLS handshake'
				},
				{
					name: 'Kyprianos Vasilopoulos',
					topic:
						'The Walking Dead of AD: Uncovering rare DACL-led escalation and a BloodHound-integrated tool'
				},
				{
					name: 'Larry Trowell',
					topic:
						'Laser Beams & Light Streams: Letting Hackers Go Pew Pew, Building Affordable Light-Based Hardware'
				},
				{ name: 'Matt Scheurer', topic: 'Definitely Not Secure (DNS)' },
				{
					name: 'mcdwayne',
					topic: 'From Pets To Cattle To Agents: Evolving Identity And Security For Workloads'
				},
				{ name: 'Mr. Sprawl', topic: 'Bullying your co-workers with Phishing emails' },
				{
					name: 'Nikos Vourdas',
					topic:
						'The Walking Dead of AD: Uncovering rare DACL-led escalation and a BloodHound-integrated tool'
				},
				{
					name: 'PANTH13R',
					topic:
						'Laser Beams & Light Streams: Letting Hackers Go Pew Pew, Building Affordable Light-Based Hardware'
				},
				{
					name: 'Paul Petefish',
					topic: 'Penetration Testing Is Busted: Introducing a Continuous Testing Methodology'
				},
				{
					name: 'rand0h',
					topic:
						'Countdown To ZeroPay- When the fall is all that’s left, it matters a great deal.'
				},
				{
					name: 'Tib3rius',
					topic: 'Vibe Hacking: Building Autonomous Offensive Security Tools with Claude Code'
				},
				{ name: 'ギンジ🐾ターラノー', topic: 'Beyond the Self Check-Out' }
			]
		},
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
				{
					name: 'Jose Hernandez',
					topic: 'Bringing Down the BYOVD: Leveraging WDAC to End Malicious Driver Attacks'
				},
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
	<title>Previous Speakers — BSides312 | Chicago Security BSides Conference</title>
	<meta
		name="description"
		content="Browse past speakers from BSides312, the Security BSides hacker & cybersecurity conference in Chicago."
	/>
</svelte:head>

<!-- Previous Speakers Section -->
<section id="previous-speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Previous Speakers</h2>
			<p>View our talented speakers from past BSides312 conferences</p>
			<a
				href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
				target="_blank"
				rel="noopener"
				class="btn-primary mt-3"
			>
				<i class="bi bi-youtube me-2"></i>Watch Many Past Talks on YouTube
			</a>
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
	</div>
</section>
