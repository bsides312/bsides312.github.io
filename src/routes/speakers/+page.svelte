<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Speakers - BSides312</title>
	<meta
		name="description"
		content="Meet the expert speakers presenting at BSides312 - Chicago's biggest little cybersecurity conference."
	/>
</svelte:head>

<section id="speakers" class="section section-with-bg">
	<div class="container">
		<div class="section-header text-center mb-5">
			<h1>Speaker Lineup Coming Soon</h1>
			<p class="lead">
				We're working hard to bring you an amazing lineup of speakers for BSides312 2026!
			</p>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-8">
				<div class="card text-center p-5 main-cfp-card">
					<div class="card-body">
						<i class="bi bi-lock display-1 text-danger mb-4"></i>
						<h3 class="mb-4">Call for Presentations — CLOSED</h3>
						<p class="mb-4">
							Our CFP is now <strong>closed</strong> and all talks have been selected. Thank you to
							everyone who submitted a proposal!
						</p>
						<p class="mb-4">
							If you submitted a talk, please check your email for a message from
							<strong>bsides312@events.sessionize.com</strong> with your selection status.
						</p>
						<p class="mb-4">
							In the meantime, check out talks from previous events on our YouTube channel.
						</p>
						<p class="mb-4">
							<strong>Conference Date:</strong> May 16th, 2026<br />
							<strong>Location:</strong> Chicago, IL
						</p>
						<div class="d-grid gap-2 d-md-block">
							<a href="{base}/previous-speakers" class="btn btn-outline-primary me-md-2">
								<i class="bi bi-people me-2"></i>View Previous Speakers
							</a>
							<a
								href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
								target="_blank"
								rel="noopener"
								class="btn btn-outline-primary"
							>
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
							<li>
								<i class="bi bi-check-circle text-success me-2"></i><strong>ACTIONABLE</strong>&nbsp;Information
							</li>
							<li>
								<i class="bi bi-check-circle text-success me-2"></i>Practical security tools and
								techniques
							</li>
							<li>
								<i class="bi bi-check-circle text-success me-2"></i>Career development and industry
								insights
							</li>
							<li><i class="bi bi-check-circle text-success me-2"></i>Community-driven projects</li>
							<li>
								<i class="bi bi-check-circle text-success me-2"></i>Diverse perspectives and
								experiences
							</li>
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
							<li><strong>CFP Opened:</strong>&nbsp;November 27th, 2025</li>
							<li><strong>CFP Closed:</strong>&nbsp;February 28th, 2026</li>
							<li><strong>Speaker Notifications:</strong>&nbsp;By March 15th, 2026</li>
							<li><strong>Conference Date:</strong>&nbsp;May 16th, 2026</li>
						</ul>
						<p class="mt-3">
							<small class="text-muted">
								Follow us on social media for the speaker lineup announcement!
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
