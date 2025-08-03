<script lang="ts">
	// Placeholder for future schedule data
</script>

<svelte:head>
	<title>Schedule - BSides312</title>
	<meta
		name="description"
		content="BSides312 Conference Schedule - Coming May 15th, 2026 in Chicago."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br /><span>Event Schedule</span></h1>
		<p>Two Tracks! Maybe more!</p>
		<a href="#schedule" class="btn-primary">Coming Soon</a>
	</div>
</section>

<!-- Schedule Section -->
<section id="schedule" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Event Schedule</h2>
			<p>Schedule for BSides312 2026 coming soon!</p>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="schedule-placeholder">
					<div class="placeholder-content">
						<i class="bi bi-calendar-event"></i>
						<h3>Schedule Coming Soon</h3>
						<p>
							We're working hard to finalize our speaker lineup and schedule for BSides312 2026.
							Check back soon or follow us on social media for updates!
						</p>
						<div class="event-details">
							<div class="detail">
								<i class="bi bi-calendar3"></i>
								<span>May 15th, 2026</span>
							</div>
							<div class="detail">
								<i class="bi bi-geo-alt"></i>
								<span>Chicago, IL</span>
							</div>
							<div class="detail">
								<i class="bi bi-clock"></i>
								<span>Full Day Event</span>
							</div>
						</div>
						<a
							href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
							target="_blank"
							rel="noopener"
							class="btn-primary"
						>
							<i class="bi bi-youtube me-2"></i>Watch Previous Years
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.schedule-placeholder {
		background: rgba(6, 12, 34, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 20px;
		padding: 60px 40px;
		text-align: center;
		backdrop-filter: blur(10px);
		border-left: 4px solid var(--primary-color);
	}

	.placeholder-content i.bi-calendar-event {
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

	.placeholder-content p {
		color: var(--text-light);
		font-size: 1.2rem;
		line-height: 1.6;
		margin-bottom: 40px;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.event-details {
		display: flex;
		justify-content: center;
		gap: 30px;
		margin-bottom: 40px;
		flex-wrap: wrap;
	}

	.detail {
		display: flex;
		align-items: center;
		gap: 10px;
		color: var(--text-muted);
		font-size: 1.1rem;
		font-weight: 500;
	}

	.detail i {
		color: var(--primary-color);
		font-size: 1.2rem;
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
		.schedule-placeholder {
			padding: 40px 30px;
		}

		.placeholder-content h3 {
			font-size: 2rem;
		}

		.placeholder-content p {
			font-size: 1.1rem;
		}

		.event-details {
			gap: 20px;
			flex-direction: column;
			align-items: center;
		}

		.detail {
			font-size: 1rem;
		}
	}

	@media (max-width: 576px) {
		.schedule-placeholder {
			padding: 30px 20px;
		}

		.placeholder-content i.bi-calendar-event {
			font-size: 3rem;
		}

		.placeholder-content h3 {
			font-size: 1.8rem;
		}

		.btn-primary {
			padding: 12px 30px;
			font-size: 0.9rem;
		}
	}
</style>
