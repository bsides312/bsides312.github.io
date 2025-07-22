<script lang="ts">
	// No special logic needed for this static page
</script>

<svelte:head>
	<title>Code of Conduct - BSides312</title>
	<meta name="description" content="BSides312 Code of Conduct - ensuring a harassment-free, inclusive conference experience for all attendees." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Code of Conduct</span></h1>
		<p>Creating an inclusive and welcoming environment for all</p>
	</div>
</section>

<!-- Code of Conduct Section -->
<section class="section">
	<div class="container">
		<div class="section-header">
			<h2>Code of Conduct</h2>
		</div>
		<div class="row">
			<div class="col-md-12">
				<div class="coc-content">
					<div class="coc-section">
						<h3>Our Commitment</h3>
						<p>BSides312 is dedicated to providing a harassment-free, inclusive, and welcoming experience for everyone, regardless of gender identity and expression, sexual orientation, disability, physical appearance, body size, race, ethnicity, nationality, age, religion, veteran status, or any other protected characteristic. We do not tolerate harassment of conference participants in any form.</p>
					</div>

					<div class="coc-section">
						<h3>Expected Behavior</h3>
						<p>All participants are expected to:</p>
						<ul>
							<li>Exercise consideration and respect in speech and actions</li>
							<li>Refrain from demeaning, discriminatory, or harassing behavior</li>
							<li>Be mindful of your surroundings and fellow participants</li>
							<li>Alert conference staff if you notice violations of this Code</li>
						</ul>
					</div>

					<div class="coc-section">
						<h3>Unacceptable Behavior</h3>
						<p>Harassment includes, but is not limited to:</p>
						<ul>
							<li>Verbal comments that reinforce social structures of domination</li>
							<li>Sexual imagery in public spaces</li>
							<li>Deliberate intimidation, stalking, or following</li>
							<li>Sustained disruption of talks or other events</li>
							<li>Inappropriate physical contact</li>
							<li>Unwelcome sexual attention</li>
							<li>Advocating for, or encouraging, any of the above behavior</li>
							<li>Microaggressions and subtle exclusionary behaviors</li>
							<li>Deliberate misgendering or deadnaming</li>
						</ul>
					</div>

					<div class="coc-section">
						<h3>Reporting & Enforcement</h3>
						<p>If you experience or witness violations of this Code:</p>
						<ul>
							<li>Contact any staff member (clearly identified by badges)</li>
							<li>Email: questions [at] bsides312.org</li>
							<li>All reports will be reviewed and investigated promptly</li>
						</ul>

						<p>Participants asked to stop any harassing behavior are expected to comply immediately. Conference staff may take any action deemed appropriate, including warning the offender, expulsion from the conference without refund, or banning from future events.</p>
					</div>

					<div class="coc-section">
						<h3>Inclusivity Statement</h3>
						<p>We actively welcome and value the contributions of people from all backgrounds. We prioritize the safety and inclusion of marginalized groups over maintaining the comfort of privileged groups. Our goal is to create an environment where all participants can fully engage in conference activities.</p>

						<p>This Code of Conduct applies to all conference spaces including talks, workshops, social gatherings and our website. We expect participants to follow these rules at the conference venue and encourage their application in all professional settings.</p>

						<p>This Code of Conduct is based on and modified from the <a href="https://geekfeminism.wikia.org/wiki/Conference_anti-harassment/Policy" target="_blank" rel="noopener">Geek Feminism wiki</a> and the <a href="https://www.contributor-covenant.org/" target="_blank" rel="noopener">Contributor Covenant</a>.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.coc-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.coc-section {
		background: rgba(6, 12, 34, 0.4);
		border-radius: 15px;
		padding: 40px;
		margin-bottom: 30px;
		border-left: 4px solid var(--primary-color);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.coc-section h3 {
		color: var(--primary-color);
		font-size: 1.8rem;
		margin-bottom: 20px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.coc-section p {
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 20px;
		font-size: 1.1rem;
	}

	.coc-section p:last-child {
		margin-bottom: 0;
	}

	.coc-section ul {
		color: var(--text-light);
		line-height: 1.8;
		margin-bottom: 20px;
		padding-left: 30px;
	}

	.coc-section li {
		margin-bottom: 10px;
		font-size: 1.05rem;
	}

	.coc-section a {
		color: var(--primary-color);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: all 0.3s ease;
	}

	.coc-section a:hover {
		border-bottom-color: var(--primary-color);
		color: #93bdfc;
	}

	@media (max-width: 768px) {
		.coc-section {
			padding: 30px 25px;
		}

		.coc-section h3 {
			font-size: 1.5rem;
		}

		.coc-section p,
		.coc-section li {
			font-size: 1rem;
		}

		.coc-section ul {
			padding-left: 25px;
		}
	}

	@media (max-width: 576px) {
		.coc-section {
			padding: 25px 20px;
		}

		.coc-section h3 {
			font-size: 1.3rem;
		}

		.coc-section ul {
			padding-left: 20px;
		}
	}
</style> 