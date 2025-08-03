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
				{ name: 'Filipi Pires', topic: 'Misconfiguration-Driven Cloud Attacks: A Graph-Based Exploration' },
				{ name: 'Ginji Terrano', topic: 'Open Sesame' },
				{ name: 'Jose Hernandez', topic: '' },
				{ name: 'Kadi McKean', topic: 'Trailblazing: Lessons from Oregon Trail for the Secure Software Supply Chain' },
				{ name: 'Olivia Gallucci', topic: 'Unlocking macOS Internals: A Beginner\'s Guide to Apple\'s Open Source Code' },
				{ name: 'Patrick Laverty', topic: 'Can a Hacker Murder Your City' },
				{ name: 'Roy Talyosef', topic: 'Adversarial Intelligence: Redefining Application Security through the eyes of an attacker' },
				{ name: 'Steve Shelton', topic: '(Keynote) When the Night Has Come: Finding Belonging in a World That Doesn\'t Understand Us' },
				{ name: 'Tamry Juntunen', topic: 'Empowering Neurodivergent Individuals in Cybersecurity: Strategies for Inclusion and Success' },
				{ name: 'Zach Smith', topic: 'Monsters Under Your Bed - Mapping the Dark Web with Python' }
			]
		},
		{
			year: 2024,
			speakers: [
				{ name: 'Stefani Goerlich', topic: 'Opening Keynote: "Securing Sexuality: Rewiring our Intimate Connections"' },
				{ name: 'Chris Roberts', topic: 'Closing Keynote: "The Evolution of Threat Intelligence: Tracking Your Boss for Fun, Profit, and Protection"' },
				{ name: 'Thamer AlJohani', topic: '"Navigating Privacy in the Digital Era: A Comprehensive Exploration of GDPR and CCPA"' },
				{ name: 'Sara Anstey', topic: '"Educating Your Guesses: How to Quantify Risk and Uncertainty"' },
				{ name: 'Dr. Catherine J. Ullman', topic: '"Dumpster Fires: three things about IR I learned as a firefighter"' },
				{ name: 'Jake Hildreth', topic: '"Protect Your Most Sensitive Users With This One Weird Trick!"' },
				{ name: 'Dwayne McDaniel', topic: '"Championing Security: Scaling Security At Every Level"' },
				{ name: 'Anita Nikolich', topic: '"Senior Citizens Fight Scammers"' },
				{ name: 'Whitney Phillips', topic: '"Mobile Application Penetration Testing"' },
				{ name: 'Ryan Wisniewski', topic: '"The SaaS and the Furious: A Deep Dive into SaaS Compromises"' }
			]
		}
	];
</script>

<svelte:head>
	<title>Previous Speakers - BSides312</title>
	<meta name="description" content="View our talented speakers from past BSides312 conferences" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Previous Speakers</span></h1>
		<p>BSides312 Conference Alumni</p>
		<a href="#previous-speakers" class="btn-primary">VIEW SPEAKERS</a>
	</div>
</section>

<!-- Previous Speakers Section -->
<section id="previous-speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Previous Speakers</h2>
			<p>View our talented speakers from past BSides312 conferences</p>
		</div>

		{#each previousSpeakers as yearGroup}
			<div class="year-section">
				<h3 class="year-header">{yearGroup.year}</h3>
				
				<div class="row">
					{#each yearGroup.speakers as speaker}
						<div class="col-md-6 col-lg-4">
							<div class="speaker-card">
								<h4 class="speaker-name">{speaker.name}</h4>
								{#if speaker.topic}
									<p class="speaker-topic">{speaker.topic}</p>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}

		<div class="youtube-section">
			<div class="text-center">
				<h3>Want to see these talks?</h3>
				<p>Check out our YouTube channel for recordings of past presentations!</p>
				<a href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener" class="btn-primary">
					<i class="bi bi-youtube me-2"></i>Visit Our YouTube Channel
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.year-section {
		margin-bottom: 80px;
	}

	.year-header {
		color: var(--primary-color);
		font-size: 2.5rem;
		margin-bottom: 40px;
		padding-bottom: 15px;
		border-bottom: 3px solid var(--primary-color);
		display: inline-block;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.speaker-card {
		background: rgba(6, 12, 34, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 15px;
		padding: 30px;
		margin-bottom: 30px;
		border-left: 4px solid var(--primary-color);
		backdrop-filter: blur(10px);
		transition: all 0.3s ease;
		height: 100%;
	}

	.speaker-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
		border-color: var(--primary-color);
		background: rgba(6, 12, 34, 0.6);
	}

	.speaker-name {
		color: var(--primary-color);
		font-size: 1.3rem;
		font-weight: 600;
		margin-bottom: 15px;
		font-family: 'Raleway', sans-serif;
	}

	.speaker-topic {
		color: var(--text-muted);
		font-style: italic;
		line-height: 1.5;
		margin: 0;
		font-size: 1rem;
	}

	.youtube-section {
		background: rgba(93, 189, 252, 0.05);
		border: 2px solid rgba(93, 189, 252, 0.2);
		border-radius: 20px;
		padding: 50px 30px;
		margin-top: 60px;
		text-align: center;
	}

	.youtube-section h3 {
		color: var(--primary-color);
		font-size: 2rem;
		margin-bottom: 20px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.youtube-section p {
		color: var(--text-light);
		font-size: 1.2rem;
		margin-bottom: 30px;
		line-height: 1.6;
	}

	.btn-primary {
		background: var(--gradient-primary);
		border: none;
		color: white;
		padding: 15px 40px;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 1rem;
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(93, 189, 252, 0.3);
		color: white;
	}

	@media (max-width: 768px) {
		.year-header {
			font-size: 2rem;
		}

		.speaker-card {
			padding: 25px;
		}

		.speaker-name {
			font-size: 1.2rem;
		}

		.speaker-topic {
			font-size: 0.95rem;
		}

		.youtube-section {
			padding: 40px 25px;
		}

		.youtube-section h3 {
			font-size: 1.7rem;
		}

		.youtube-section p {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 576px) {
		.year-section {
			margin-bottom: 60px;
		}

		.year-header {
			font-size: 1.8rem;
		}

		.speaker-card {
			padding: 20px;
		}

		.speaker-name {
			font-size: 1.1rem;
		}

		.speaker-topic {
			font-size: 0.9rem;
		}

		.youtube-section {
			padding: 30px 20px;
		}

		.youtube-section h3 {
			font-size: 1.5rem;
		}

		.btn-primary {
			padding: 12px 30px;
			font-size: 0.9rem;
		}
	}
</style> 