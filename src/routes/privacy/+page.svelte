<script lang="ts">
	// No special logic needed for this static page
</script>

<svelte:head>
	<title>Privacy Policy - BSides312</title>
	<meta name="description" content="BSides312 Privacy Policy - how we handle and protect your personal information." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Privacy Policy</span></h1>
		<p>How we protect and handle your information</p>
	</div>
</section>

<!-- Privacy Policy Section -->
<section class="section">
	<div class="container">
		<div class="section-header">
			<h2>Privacy Policy</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-9">
				<div class="privacy-content">
					<div class="privacy-section">
						<h3>Overview</h3>
						<ul>
							<li>BSides312 respects your privacy. The details you provide when registering are not disclosed to third parties except as required to fulfill our contractual obligations for hosting and delivering BSides312.</li>
							<li>The personal details that you provide to BSides312 (which may include name and email) are only used to register you for the event, provide access to necessary platforms as required to deliver the event, and to keep you informed of the event logistics and announcements.</li>
							<li>Your personal details are stored on specific cloud-based platforms that enable BSides312 to communicate with you and to deliver the conference event. Personal details are not disclosed for any other purpose unless required by law.</li>
						</ul>
					</div>

					<div class="privacy-section">
						<h3>When do we contact you?</h3>
						<p>BSides312 may contact you in these cases:</p>
						<ul>
							<li>In relation to any of our services, events, activities or online content you have signed up to/registered for.</li>
							<li>In relation to any correspondence we receive from you.</li>
							<li>In relation to any contribution you have submitted to, or about, BSides312 and our services, events and activities, including online blog posts, tweets or other media.</li>
							<li>To invite you to contribute in an after-event survey about BSides312.</li>
						</ul>
					</div>
					
					<div class="privacy-section">
						<h3>Data Retention</h3>
						<p>Data retention period:</p>
						<ul>
							<li>We will hold your personal information on our systems for as long as it is necessary for the delivery of the current year's event and after-event survey. We do not retain personal information from previous years' events, nor do we 'carry over' personal information to subsequent years. After the after-event survey has been completed, we delete that year's personal information.</li>
						</ul>
					</div>
				</div>

				<div class="attribution">
					<p class="text-center">
						<small>Privacy policy adapted from <a href="https://www.bsidesden.org/data-privacy" target="_blank" rel="noopener">BSides Denver</a>.</small>
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.privacy-content {
		margin-bottom: 40px;
	}

	.privacy-section {
		background: rgba(6, 12, 34, 0.4);
		border-radius: 15px;
		padding: 40px;
		margin-bottom: 30px;
		border-left: 4px solid var(--primary-color);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.privacy-section h3 {
		color: var(--primary-color);
		font-size: 1.8rem;
		margin-bottom: 20px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.privacy-section p {
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 20px;
		font-size: 1.1rem;
	}

	.privacy-section p:last-child {
		margin-bottom: 0;
	}

	.privacy-section ul {
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 20px;
		padding-left: 30px;
	}

	.privacy-section li {
		margin-bottom: 15px;
		font-size: 1.05rem;
	}

	.attribution {
		background: rgba(6, 12, 34, 0.2);
		border-radius: 10px;
		padding: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.attribution p {
		margin: 0;
		color: var(--text-muted);
		font-style: italic;
	}

	.attribution a {
		color: var(--primary-color);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: all 0.3s ease;
	}

	.attribution a:hover {
		border-bottom-color: var(--primary-color);
		color: #93bdfc;
	}

	@media (max-width: 768px) {
		.privacy-section {
			padding: 30px 25px;
		}

		.privacy-section h3 {
			font-size: 1.5rem;
		}

		.privacy-section p,
		.privacy-section li {
			font-size: 1rem;
		}

		.privacy-section ul {
			padding-left: 25px;
		}
	}

	@media (max-width: 576px) {
		.privacy-section {
			padding: 25px 20px;
		}

		.privacy-section h3 {
			font-size: 1.3rem;
		}

		.privacy-section ul {
			padding-left: 20px;
		}
	}
</style> 