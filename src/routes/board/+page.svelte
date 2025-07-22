<script lang="ts">
	import { boardMembers } from '$lib/stores/boardMembers';
</script>

<svelte:head>
	<title>Board Members - BSides312</title>
	<meta name="description" content="Meet the BSides312 Board of Directors - Chicago's community-run security conference leadership team" />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br><span>Board of Directors</span></h1>
		<p>Meet the team behind Chicago's biggest little hacker conference</p>
	</div>
</section>

<!-- Board Member Details Section -->
<section class="section">
	<div class="container">
		<div class="section-header">
			<h2>Board Member Details</h2>
			<p>Our BSides312 Board of Directors comprises a close-knit group of longtime friends, many of whom created the original BSides Chicago!</p>
		</div>

		{#each boardMembers as member}
			<div class="row align-items-center mb-5 board-member-row" id={member.id}>
				<div class="col-md-4 text-center">
					<img src={member.image} alt={member.name} class="board-img" />
				</div>
				<div class="col-md-8">
					<div class="board-member-details">
						<h3>{member.name}</h3>
						{#if member.social}
							<div class="social-links mb-3">
								{#if member.social.linkedin}
									<a href={member.social.linkedin} target="_blank" rel="noopener">
										<i class="bi bi-linkedin"></i>
									</a>
								{/if}
								{#if member.social.twitter}
									<a href={member.social.twitter} target="_blank" rel="noopener">
										<i class="bi bi-twitter"></i>
									</a>
								{/if}
								{#if member.social.facebook}
									<a href={member.social.facebook} target="_blank" rel="noopener">
										<i class="bi bi-facebook"></i>
									</a>
								{/if}
								{#if member.social.instagram}
									<a href={member.social.instagram} target="_blank" rel="noopener">
										<i class="bi bi-instagram"></i>
									</a>
								{/if}
							</div>
						{/if}
						<h4>{member.title}</h4>
						<div class="bio">
							{@html member.bio.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').replace(/$/, '</p>')}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.board-member-row {
		background: rgba(6, 12, 34, 0.4);
		border-radius: 15px;
		padding: 40px;
		margin-bottom: 40px;
		border-left: 4px solid var(--primary-color);
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
	}

	.board-member-row:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
		border-color: var(--primary-color);
	}

	.board-img {
		width: 250px;
		height: 250px;
		object-fit: cover;
		border-radius: 50%;
		border: 4px solid var(--primary-color);
		box-shadow: 0 10px 30px rgba(93, 189, 252, 0.3);
	}

	.board-member-details h3 {
		color: var(--primary-color);
		font-size: 2rem;
		margin-bottom: 15px;
		font-family: 'Raleway', sans-serif;
		font-weight: 700;
	}

	.board-member-details h4 {
		color: var(--text-muted);
		font-size: 1.2rem;
		margin-bottom: 25px;
		font-style: italic;
	}

	.bio {
		color: var(--text-light);
		line-height: 1.8;
		font-size: 1.1rem;
	}

	.bio :global(p) {
		margin-bottom: 20px;
	}

	.bio :global(p:last-child) {
		margin-bottom: 0;
	}

	.social-links {
		display: flex;
		gap: 15px;
	}

	.social-links a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
		background: rgba(93, 189, 252, 0.1);
		color: var(--primary-color);
		border-radius: 50%;
		text-decoration: none;
		font-size: 1.2rem;
		transition: all 0.3s ease;
	}

	.social-links a:hover {
		background: var(--primary-color);
		color: white;
		transform: translateY(-2px) scale(1.1);
		box-shadow: 0 5px 15px rgba(93, 189, 252, 0.4);
	}

	@media (max-width: 768px) {
		.board-member-row {
			padding: 30px 20px;
			text-align: center;
		}

		.board-img {
			width: 200px;
			height: 200px;
			margin-bottom: 30px;
		}

		.board-member-details h3 {
			font-size: 1.5rem;
		}

		.social-links {
			justify-content: center;
		}
	}

	@media (max-width: 576px) {
		.board-img {
			width: 150px;
			height: 150px;
		}

		.board-member-details h3 {
			font-size: 1.3rem;
		}

		.board-member-details h4 {
			font-size: 1rem;
		}

		.bio {
			font-size: 1rem;
		}
	}
</style> 