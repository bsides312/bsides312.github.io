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

<section id="speakers" class="section">
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
						<i class="bi bi-megaphone display-1 text-primary mb-4"></i>
						<h3 class="mb-4">Call for Presentations</h3>
						<p class="mb-4">
							Are you passionate about cybersecurity? Do you have knowledge, research, or
							experiences to share with the community? We want to hear from you!
						</p>
						<p class="mb-4">
							<strong>Conference Date:</strong> May 16th, 2026<br />
							<strong>Location:</strong> Chicago, IL
						</p>
						<div class="d-grid gap-2 d-md-block">
							<a
								href="https://sessionize.com/bsides312"
								target="_blank"
								rel="noopener"
								class="btn btn-primary mb-3 w-100"
							>
								<i class="bi bi-megaphone me-2"></i>Submit Your Proposal
							</a>
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
							<li><strong>CFP Opens:</strong>&nbsp;November 27th, 2025</li>
							<li><strong>CFP Closes:</strong>&nbsp;February 28th, 2026</li>
							<li><strong>Speaker Notifications:</strong>&nbsp;By March 15th, 2026</li>
							<li><strong>Conference Date:</strong>&nbsp;May 16th, 2026</li>
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
