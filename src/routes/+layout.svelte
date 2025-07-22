<script lang="ts">
	import '../app.css';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let mobileMenuActive = false;
	let activeDropdown: string | null = null;

	function toggleMobileMenu() {
		mobileMenuActive = !mobileMenuActive;
		// Close any open dropdowns when toggling main menu
		if (!mobileMenuActive) {
			activeDropdown = null;
		}
	}

	function closeMobileMenu() {
		mobileMenuActive = false;
		activeDropdown = null;
	}

	function toggleDropdown(dropdownId: string) {
		// Only handle dropdown on mobile
		if (window.innerWidth <= 768) {
			activeDropdown = activeDropdown === dropdownId ? null : dropdownId;
		}
	}

	onMount(() => {
		// Close mobile menu when clicking outside
		const handleClickOutside = (event: MouseEvent) => {
			const navbar = document.getElementById('navbar');
			const toggle = document.querySelector('.mobile-nav-toggle');
			
			if (navbar && toggle && 
				!navbar.contains(event.target as Node) && 
				!toggle.contains(event.target as Node)) {
				mobileMenuActive = false;
				activeDropdown = null;
			}
		};

		// Close dropdowns on window resize
		const handleResize = () => {
			if (window.innerWidth > 768) {
				activeDropdown = null;
			}
		};

		document.addEventListener('click', handleClickOutside);
		window.addEventListener('resize', handleResize);
		
		return () => {
			document.removeEventListener('click', handleClickOutside);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<header id="header" class="d-flex align-items-center">
	<div class="container-fluid container-xxl d-flex align-items-center">
		<div id="logo" class="me-auto">
			<a href="{base}/" class="scrollto">
				<img src="{base}/assets/img/logo.png" alt="BSides312 Logo" />
			</a>
		</div>

		<nav id="navbar" class="navbar order-last order-lg-0">
			<ul class:active={mobileMenuActive}>
				<li><a class="nav-link" href="{base}/" on:click={closeMobileMenu}>Home</a></li>
				<li><a class="nav-link" href="{base}/#contribute" on:click={closeMobileMenu}>Get Tickets</a></li>
				<li class="dropdown" class:active={activeDropdown === 'sponsor'}>
					<button class="nav-link dropdown-toggle" type="button" aria-haspopup="true" aria-expanded={activeDropdown === 'sponsor'} on:click={() => toggleDropdown('sponsor')}>
						<span>Sponsor Us</span> 
						<i class="bi" class:bi-chevron-down={activeDropdown !== 'sponsor'} class:bi-chevron-up={activeDropdown === 'sponsor'}></i>
					</button>
					<ul class:show={activeDropdown === 'sponsor'}>
						<li><a class="nav-link" href="{base}/support" on:click={closeMobileMenu}>How to Donate</a></li>
						<li><a class="nav-link" href="{base}/#supporters" on:click={closeMobileMenu}>Current Supporters</a></li>
					</ul>
				</li>
				<li class="dropdown" class:active={activeDropdown === 'contribute'}>
					<button class="nav-link dropdown-toggle" type="button" aria-haspopup="true" aria-expanded={activeDropdown === 'contribute'} on:click={() => toggleDropdown('contribute')}>
						<span>Contribute</span> 
						<i class="bi" class:bi-chevron-down={activeDropdown !== 'contribute'} class:bi-chevron-up={activeDropdown === 'contribute'}></i>
					</button>
					<ul class:show={activeDropdown === 'contribute'}>
						<li><a class="nav-link" href="{base}/#contribute" on:click={closeMobileMenu}>Volunteer</a></li>
						<li><a class="nav-link" href="{base}/#contribute" on:click={closeMobileMenu}>Call for Presentations</a></li>
					</ul>
				</li>
				<li class="dropdown" class:active={activeDropdown === 'event'}>
					<button class="nav-link dropdown-toggle" type="button" aria-haspopup="true" aria-expanded={activeDropdown === 'event'} on:click={() => toggleDropdown('event')}>
						<span>Event</span> 
						<i class="bi" class:bi-chevron-down={activeDropdown !== 'event'} class:bi-chevron-up={activeDropdown === 'event'}></i>
					</button>
					<ul class:show={activeDropdown === 'event'}>
						<li><a class="nav-link" href="{base}/speakers" on:click={closeMobileMenu}>Meet our Speakers</a></li>
						<li><a class="nav-link" href="{base}/schedule" on:click={closeMobileMenu}>Conference Schedule</a></li>
						<li><a class="nav-link" href="{base}/previous-speakers" on:click={closeMobileMenu}>Previous Speakers</a></li>
						<li><a class="nav-link" href="{base}/#about" on:click={closeMobileMenu}>Venue & Parking</a></li>
						<li><a class="nav-link" href="{base}/code-of-conduct" on:click={closeMobileMenu}>Code of Conduct</a></li>
					</ul>
				</li>
				<li class="dropdown" class:active={activeDropdown === 'about'}>
					<button class="nav-link dropdown-toggle" type="button" aria-haspopup="true" aria-expanded={activeDropdown === 'about'} on:click={() => toggleDropdown('about')}>
						<span>About</span> 
						<i class="bi" class:bi-chevron-down={activeDropdown !== 'about'} class:bi-chevron-up={activeDropdown === 'about'}></i>
					</button>
					<ul class:show={activeDropdown === 'about'}>
						<li><a class="nav-link" href="{base}/#about" on:click={closeMobileMenu}>About BSides312</a></li>
						<li><a class="nav-link" href="{base}/board" on:click={closeMobileMenu}>Our Board</a></li>
						<li><a class="nav-link" href="{base}/#faq" on:click={closeMobileMenu}>FAQ</a></li>
						<li><a class="nav-link" href="{base}/privacy" on:click={closeMobileMenu}>Privacy Policy</a></li>
					</ul>
				</li>
				<li>
					<a class="nav-link" href="https://www.youtube.com/channel/UCrCPvWW8z-_O8uUM8-ySz7g" target="_blank" rel="noopener" on:click={closeMobileMenu}>
						<i class="bi bi-youtube me-1"></i>YouTube
					</a>
				</li>
				<li><a class="nav-link" href="#footer" on:click={closeMobileMenu}>Contact</a></li>
			</ul>
			<i class="bi bi-list mobile-nav-toggle" on:click={toggleMobileMenu} on:keydown={(e) => e.key === 'Enter' && toggleMobileMenu()} tabindex="0" role="button" aria-label="Toggle mobile menu"></i>
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
						<img src="{base}/assets/img/logo.png" alt="BSides312 Logo" class="mb-3" />
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
							<li><a href="{base}/code-of-conduct">Code of Conduct</a></li>
							<li><a href="{base}/privacy">Privacy Policy</a></li>
							<li><a href="{base}/board">Our Board</a></li>
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
		background: none;
		border: none;
		font-family: inherit;
		font-size: inherit;
		cursor: pointer;
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
		padding: 8px;
		border-radius: 4px;
		transition: all 0.3s ease;
	}

	.mobile-nav-toggle:hover {
		background: rgba(93, 189, 252, 0.1);
		color: #5dbdfc;
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
			background: rgba(6, 12, 34, 0.98);
			backdrop-filter: blur(15px);
			flex-direction: column;
			padding: 20px;
			gap: 10px;
			border-bottom: 1px solid rgba(255, 255, 255, 0.1);
			max-height: calc(100vh - 80px);
			overflow-y: auto;
		}

		.navbar ul.active {
			display: flex;
		}

		.navbar ul li {
			width: 100%;
		}

		.nav-link {
			width: 100%;
			justify-content: space-between;
			padding: 12px 15px;
			border-radius: 8px;
		}

		.dropdown-toggle {
			cursor: pointer;
		}

		/* Override desktop hover behavior on mobile */
		.dropdown:hover ul {
			opacity: 0;
			visibility: hidden;
			transform: translateY(-10px);
		}

		.dropdown ul {
			position: static;
			opacity: 0;
			visibility: hidden;
			max-height: 0;
			overflow: hidden;
			transform: none;
			background: rgba(93, 189, 252, 0.1);
			border: 1px solid rgba(93, 189, 252, 0.2);
			border-radius: 8px;
			margin-top: 10px;
			padding: 0;
			transition: all 0.3s ease;
		}

		.dropdown ul.show {
			opacity: 1;
			visibility: visible;
			max-height: 300px;
			padding: 10px;
		}

		.dropdown ul .nav-link {
			padding: 8px 15px;
			font-size: 0.9rem;
			justify-content: flex-start;
		}
	}

	@media (max-width: 576px) {
		#logo img {
			max-height: 50px;
		}

		.footer-links h4 {
			font-size: 1.1rem;
		}

		.social-links {
			justify-content: center;
		}
	}
</style> 