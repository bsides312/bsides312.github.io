<script lang="ts">
	import '../app.css';
	import logoImg from '$lib/logo.png';
</script>

<header id="header" class="d-flex align-items-center">
	<div class="container-fluid container-xxl d-flex align-items-center">
		<div id="logo" class="me-auto">
			<a href="/" class="scrollto">
				<img src={logoImg} alt="BSides312 Logo" />
			</a>
		</div>

		<nav id="navbar" class="navbar order-last order-lg-0">
			<ul>
				<li><a class="nav-link" href="/">Home</a></li>
				<li><a class="nav-link" href="/#contribute">Get Tickets</a></li>
				<li class="dropdown">
					<a class="nav-link" href="/#supporters" aria-haspopup="true" aria-expanded="false">
						<span>Sponsor Us</span> 
						<i class="bi bi-chevron-down"></i>
					</a>
					<ul>
						<li><a class="nav-link" href="/support">How to Donate</a></li>
						<li><a class="nav-link" href="/#supporters">Current Supporters</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a class="nav-link" href="/#contribute" aria-haspopup="true" aria-expanded="false">
						<span>Contribute</span> 
						<i class="bi bi-chevron-down"></i>
					</a>
					<ul>
						<li><a class="nav-link" href="/#contribute">Volunteer</a></li>
						<li><a class="nav-link" href="/#contribute">Call for Presentations</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a href="/" class="nav-link" aria-haspopup="true" aria-expanded="false">
						<span>Event</span> 
						<i class="bi bi-chevron-down"></i>
					</a>
					<ul>
						<li><a class="nav-link" href="/speakers">Meet our Speakers</a></li>
						<li><a class="nav-link" href="/schedule">Conference Schedule</a></li>
						<li><a class="nav-link" href="/previous-speakers">Previous Speakers</a></li>
						<li><a class="nav-link" href="/#about">Venue & Parking</a></li>
						<li><a class="nav-link" href="/code-of-conduct">Code of Conduct</a></li>
					</ul>
				</li>
				<li class="dropdown">
					<a class="nav-link" href="/" aria-haspopup="true" aria-expanded="false">
						<span>About</span> 
						<i class="bi bi-chevron-down"></i>
					</a>
					<ul>
						<li><a class="nav-link" href="/#about">About BSides312</a></li>
						<li><a class="nav-link" href="/board">Our Board</a></li>
						<li><a class="nav-link" href="/#faq">FAQ</a></li>
						<li><a class="nav-link" href="/privacy">Privacy Policy</a></li>
					</ul>
				</li>
				<li>
					<a class="nav-link" href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener">
						<i class="bi bi-youtube me-1"></i>YouTube
					</a>
				</li>
				<li><a class="nav-link" href="#footer">Contact</a></li>
			</ul>
			<i class="bi bi-list mobile-nav-toggle"></i>
		</nav>
	</div>
</header>

<main>
	<slot />
</main>

<footer id="footer">
	<div class="footer-top">
		<div class="container">
			<div class="row">
				<!-- Logo and About -->
				<div class="col-lg-4 col-md-6">
					<div class="footer-info mb-4">
						<img src={logoImg} alt="BSides312 Logo" class="mb-3" />
						<p>
							BSides312 is Chicago's biggest little non-profit hacking & information security
							conference, run by and for the local community.
						</p>
					</div>
				</div>

				<!-- Contact Info -->
				<div class="col-lg-4 col-md-6">
					<div class="footer-links mb-4">
						<h4>Contact Us</h4>
						<p>
							<strong>Phone:</strong> (760) BAker-3-9969<br />
							<strong>Email:</strong> questions [@] bsides312.org<br />
							<strong>Venue:</strong> Chicago, IL<br />
						</p>
					</div>
				</div>

				<!-- Links and Social -->
				<div class="col-lg-4 col-md-6">
					<div class="footer-links mb-4">
						<h4>Follow Us</h4>
						<div class="social-links mb-3">
							<a
								href="https://infosec.exchange/@bsides312"
								class="mastodon"
								rel="me noopener"
								target="_blank"
								aria-label="Follow us on Mastodon"
							>
								<i class="bi bi-mastodon"></i>
							</a>
							<a
								href="https://twitter.com/bsides312"
								class="twitter"
								target="_blank"
								rel="noopener"
								aria-label="Follow us on Twitter"
							>
								<i class="bi bi-twitter"></i>
							</a>
							<a
								href="https://www.facebook.com/BSides312"
								class="facebook"
								target="_blank"
								rel="noopener"
								aria-label="Follow us on Facebook"
							>
								<i class="bi bi-facebook"></i>
							</a>
							<a
								href="https://www.instagram.com/bsides312"
								class="instagram"
								target="_blank"
								rel="noopener"
								aria-label="Follow us on Instagram"
							>
								<i class="bi bi-instagram"></i>
							</a>
							<a
								href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g"
								class="youtube"
								target="_blank"
								rel="noopener"
								aria-label="Watch us on YouTube"
							>
								<i class="bi bi-youtube"></i>
							</a>
						</div>
						<h4>Quick Links</h4>
						<ul>
							<li><a href="/code-of-conduct">Code of Conduct</a></li>
							<li><a href="/privacy">Privacy Policy</a></li>
							<li><a href="/board">Our Board</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="copyright-section">
		<div class="container">
			<div class="copyright text-center py-3">
				Copyright 2025 <strong>Hak4Kidz NFP</strong>. All Rights Reserved.
			</div>
		</div>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Open Sans', sans-serif;
		background-color: #0c0c0c;
		color: #fff;
	}

	header {
		background: rgba(6, 12, 34, 0.9);
		backdrop-filter: blur(10px);
		padding: 15px 0;
		position: fixed;
		top: 0;
		width: 100%;
		z-index: 1000;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	#logo img {
		max-height: 60px;
	}

	.navbar ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.nav-link {
		color: #fff;
		text-decoration: none;
		padding: 8px 15px;
		border-radius: 4px;
		transition: all 0.3s ease;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.nav-link:hover {
		background: rgba(93, 189, 252, 0.1);
		color: #5dbdfc;
	}

	.dropdown {
		position: relative;
	}

	.dropdown ul {
		position: absolute;
		top: 100%;
		left: 0;
		background: rgba(6, 12, 34, 0.95);
		backdrop-filter: blur(10px);
		min-width: 200px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		opacity: 0;
		visibility: hidden;
		transform: translateY(-10px);
		transition: all 0.3s ease;
		flex-direction: column;
		gap: 0;
		padding: 10px 0;
	}

	.dropdown:hover ul {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}

	.dropdown ul .nav-link {
		padding: 10px 20px;
		border-radius: 0;
	}

	.mobile-nav-toggle {
		display: none;
		font-size: 24px;
		color: #fff;
		cursor: pointer;
	}

	main {
		margin-top: 80px;
		min-height: calc(100vh - 80px);
	}

	footer {
		background: #060c22;
		color: #fff;
		padding: 40px 0 0 0;
	}

	.footer-info img {
		max-height: 50px;
	}

	.footer-links h4 {
		color: #5dbdfc;
		margin-bottom: 20px;
	}

	.social-links {
		display: flex;
		gap: 15px;
	}

	.social-links a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		background: rgba(93, 189, 252, 0.1);
		color: #5dbdfc;
		border-radius: 50%;
		text-decoration: none;
		transition: all 0.3s ease;
	}

	.social-links a:hover {
		background: #5dbdfc;
		color: #fff;
		transform: translateY(-2px);
	}

	.footer-links ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-links ul li {
		padding: 5px 0;
	}

	.footer-links ul a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		transition: color 0.3s ease;
	}

	.footer-links ul a:hover {
		color: #5dbdfc;
	}

	.copyright-section {
		background: rgba(0, 0, 0, 0.2);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		margin-top: 40px;
	}

	@media (max-width: 768px) {
		.mobile-nav-toggle {
			display: block;
		}

		.navbar ul {
			display: none;
			position: fixed;
			top: 80px;
			left: 0;
			right: 0;
			background: rgba(6, 12, 34, 0.95);
			flex-direction: column;
			padding: 20px;
			gap: 0;
		}

		.navbar ul.active {
			display: flex;
		}

		.dropdown ul {
			position: static;
			opacity: 1;
			visibility: visible;
			transform: none;
			background: transparent;
			border: none;
			padding-left: 20px;
		}
	}
</style> 