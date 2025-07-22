<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Speakers - BSides312</title>
	<meta name="description" content="Meet the expert speakers presenting at BSides312 - Chicago's biggest little cybersecurity conference." />
</svelte:head>

<section class="section">
	<div class="container">
		<div class="section-header text-center mb-5">
			<h1>Speaker Lineup Coming Soon</h1>
			<p class="lead">We're working hard to bring you an amazing lineup of speakers for BSides312 2026!</p>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="card text-center p-5 main-cfp-card">
					<div class="card-body">
						<i class="bi bi-megaphone display-1 text-primary mb-4"></i>
						<h3 class="mb-4">Call for Presentations</h3>
						<p class="mb-4">
							Are you passionate about cybersecurity? Do you have knowledge, research, or experiences to share with the community? 
							We want to hear from you! Our Call for Presentations (CFP) will open soon.
						</p>
						<p class="mb-4">
							<strong>Conference Date:</strong> May 15th, 2026<br>
							<strong>Location:</strong> Chicago, IL
						</p>
						<div class="d-grid gap-2 d-md-block">
							<a href="{base}/previous-speakers" class="btn btn-primary me-md-2">
								<i class="bi bi-people me-2"></i>View Previous Speakers
							</a>
							<a href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener" class="btn btn-outline-primary">
								<i class="bi bi-youtube me-2"></i>Watch Past Talks
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-md-6">
				<div class="card h-100 info-card">
					<div class="card-body">
						<h4 class="card-title">
							<i class="bi bi-lightbulb text-warning me-2"></i>What We're Looking For
						</h4>
						<ul class="list-unstyled">
							<li><i class="bi bi-check-circle text-success me-2"></i>Cutting-edge research</li>
							<li><i class="bi bi-check-circle text-success me-2"></i>Practical security tools and techniques</li>
							<li><i class="bi bi-check-circle text-success me-2"></i>Career development and industry insights</li>
							<li><i class="bi bi-check-circle text-success me-2"></i>Community-driven projects</li>
							<li><i class="bi bi-check-circle text-success me-2"></i>Diverse perspectives and experiences</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="card h-100 info-card">
					<div class="card-body">
						<h4 class="card-title">
							<i class="bi bi-clock text-info me-2"></i>Important Dates
						</h4>
						<ul class="list-unstyled">
							<li><strong>CFP Opens:</strong> TBA</li>
							<li><strong>CFP Closes:</strong> TBA</li>
							<li><strong>Speaker Notifications:</strong> TBA</li>
							<li><strong>Conference Date:</strong> May 15th, 2026</li>
						</ul>
						<p class="mt-3">
							<small class="text-muted">
								Follow us on social media or subscribe to our newsletter for CFP announcements!
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.main-cfp-card {
		background: rgba(6, 12, 34, 0.6);
		border: 2px solid rgba(93, 189, 252, 0.3);
		border-radius: 20px;
		backdrop-filter: blur(15px);
	}

	.main-cfp-card .card-body {
		padding: 2rem;
	}

	.main-cfp-card h3 {
		color: var(--primary-color);
		font-weight: 700;
	}

	.main-cfp-card p {
		color: var(--text-dark-contrast);
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.info-card {
		background: rgba(6, 12, 34, 0.6);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 15px;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.info-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
		border-color: var(--primary-color);
		background: rgba(6, 12, 34, 0.8);
	}

	.info-card .card-title {
		color: var(--primary-color);
		font-size: 1.4rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.info-card li {
		color: var(--text-dark-contrast);
		font-size: 1rem;
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
	}

	.info-card li strong {
		color: var(--primary-color);
	}

	.display-1 {
		font-size: 4rem;
		opacity: 0.9;
	}

	.btn-outline-primary {
		border: 2px solid var(--primary-color);
		color: var(--primary-color);
		background: transparent;
		padding: 12px 30px;
		border-radius: 50px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.btn-outline-primary:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px);
		box-shadow: 0 8px 25px rgba(93, 189, 252, 0.3);
	}

	@media (max-width: 768px) {
		.display-1 {
			font-size: 3rem;
		}

		.main-cfp-card .card-body {
			padding: 1.5rem;
		}

		.main-cfp-card h3 {
			font-size: 1.8rem;
		}

		.main-cfp-card p {
			font-size: 1rem;
		}

		.info-card .card-title {
			font-size: 1.2rem;
		}

		.info-card li {
			font-size: 0.95rem;
		}
	}

	@media (max-width: 576px) {
		.display-1 {
			font-size: 2.5rem;
		}

		.main-cfp-card .card-body {
			padding: 1rem;
		}

		.main-cfp-card h3 {
			font-size: 1.6rem;
		}

		.btn-primary, .btn-outline-primary {
			padding: 10px 25px;
			font-size: 0.9rem;
		}
	}
</style> 