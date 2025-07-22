<script lang="ts">
	// Placeholder for future speaker data
</script>

<svelte:head>
	<title>Speakers - BSides312</title>
	<meta name="description" content="BSides312 Speakers - Meet our presenters for 2026." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Meet Our Speakers</span></h1>
		<p>Amazing speakers coming in 2026!</p>
		<a href="#speakers" class="btn-primary">Stay Tuned for our Speakers!</a>
	</div>
</section>

<!-- Speakers Section -->
<section id="speakers" class="section">
	<div class="container">
		<div class="section-header">
			<h2>Our 2026 Speakers</h2>
			<p>We're currently finalizing our speaker lineup for BSides312 2026</p>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="speakers-placeholder">
					<div class="placeholder-content">
						<i class="bi bi-people"></i>
						<h3>Speaker Lineup Coming Soon</h3>
						<p>We're excited to announce that our Call for Presentations for BSides312 2026 is currently being planned. We'll be featuring amazing speakers from across the security community, covering topics from technical deep-dives to career development.</p>
						
						<div class="cfp-info">
							<div class="info-card">
								<i class="bi bi-megaphone"></i>
								<h4>Call for Presentations</h4>
								<p>Want to speak at BSides312? Our CFP will open 4-5 months before the conference. Follow us on social media for updates!</p>
							</div>
							<div class="info-card">
								<i class="bi bi-award"></i>
								<h4>All Skill Levels Welcome</h4>
								<p>We encourage talks from speakers of all experience levels, including first-time presenters. Mentorship available!</p>
							</div>
						</div>

						<div class="action-buttons">
							<a href="/previous-speakers" class="btn-primary">
								<i class="bi bi-arrow-left me-2"></i>View Previous Speakers
							</a>
							<a href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener" class="btn btn-secondary">
								<i class="bi bi-youtube me-2"></i>Watch Past Talks
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.speakers-placeholder {
		background: rgba(6, 12, 34, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 60px 40px;
		text-align: center;
		backdrop-filter: blur(10px);
		border-left: 4px solid var(--primary-color);
	}

	.placeholder-content i.bi-people {
		font-size: 4rem;
		color: var(--primary-color);
		margin-bottom: 30px;
		opacity: 0.8;
	}

	.placeholder-content h3 {
		color: var(--primary-color);
		font-size: 2.5rem;
		margin-bottom: 20px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.placeholder-content > p {
		color: var(--text-light);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 40px;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.cfp-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 30px;
		margin-bottom: 40px;
	}

	.info-card {
		background: rgba(93, 189, 252, 0.05);
		border: 1px solid rgba(93, 189, 252, 0.2);
		border-radius: 15px;
		padding: 30px;
		text-align: center;
		transition: all 0.3s ease;
	}

	.info-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 25px rgba(93, 189, 252, 0.1);
		border-color: var(--primary-color);
	}

	.info-card i {
		font-size: 2.5rem;
		color: var(--primary-color);
		margin-bottom: 20px;
	}

	.info-card h4 {
		color: var(--primary-color);
		font-size: 1.3rem;
		margin-bottom: 15px;
		font-weight: 600;
	}

	.info-card p {
		color: var(--text-muted);
		font-size: 1rem;
		line-height: 1.5;
		margin: 0;
	}

	.action-buttons {
		display: flex;
		justify-content: center;
		gap: 20px;
		flex-wrap: wrap;
	}

	.btn-primary, .btn-secondary {
		padding: 15px 30px;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
		font-size: 0.9rem;
		border: none;
	}

	.btn-primary {
		background: var(--gradient-primary);
		color: white;
	}

	.btn-primary:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(93, 189, 252, 0.3);
		color: white;
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.1);
		color: var(--text-light);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: translateY(-3px);
		color: white;
	}

	@media (max-width: 768px) {
		.speakers-placeholder {
			padding: 40px 30px;
		}

		.placeholder-content h3 {
			font-size: 2rem;
		}

		.placeholder-content > p {
			font-size: 1.1rem;
		}

		.cfp-info {
			grid-template-columns: 1fr;
			gap: 20px;
		}

		.info-card {
			padding: 25px;
		}

		.action-buttons {
			flex-direction: column;
			align-items: center;
		}
	}

	@media (max-width: 576px) {
		.speakers-placeholder {
			padding: 30px 20px;
		}

		.placeholder-content i.bi-people {
			font-size: 3rem;
		}

		.placeholder-content h3 {
			font-size: 1.8rem;
		}

		.btn-primary, .btn-secondary {
			padding: 12px 25px;
			font-size: 0.85rem;
		}
	}
</style> 