<script lang="ts">
	import { boardMembers } from '$lib/stores/boardMembers';
</script>

<svelte:head>
	<title>Board Members - BSides312</title>
	<meta
		name="description"
		content="Meet the BSides312 Board of Directors - Chicago's community-run security conference leadership team"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1>BSides312<br /><span>Board of Directors</span></h1>
		<p>Meet the team behind Chicago's biggest little hacker conference</p>
	</div>
</section>

<!-- Board Member Details Section -->
<section id="board" class="section">
	<div class="container">
		<div class="section-header">
			<h2>Board Member Details</h2>
			<p>
				Our BSides312 Board of Directors comprises a close-knit group of longtime friends, many of
				whom created the original BSides Chicago!
			</p>
		</div>

		{#each boardMembers as member (member.id)}
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
									<a
										href={member.social.linkedin}
										target="_blank"
										rel="noopener"
										aria-label="{member.name} LinkedIn Profile"
									>
										<i class="bi bi-linkedin"></i>
									</a>
								{/if}
								{#if member.social.twitter}
									<a
										href={member.social.twitter}
										target="_blank"
										rel="noopener"
										aria-label="{member.name} Twitter Profile"
									>
										<i class="bi bi-twitter"></i>
									</a>
								{/if}
								{#if member.social.facebook}
									<a
										href={member.social.facebook}
										target="_blank"
										rel="noopener"
										aria-label="{member.name} Facebook Profile"
									>
										<i class="bi bi-facebook"></i>
									</a>
								{/if}
								{#if member.social.instagram}
									<a
										href={member.social.instagram}
										target="_blank"
										rel="noopener"
										aria-label="{member.name} Instagram Profile"
									>
										<i class="bi bi-instagram"></i>
									</a>
								{/if}
							</div>
						{/if}
						<h4>{member.title}</h4>
						<div class="bio">
							<!-- eslint-disable-next-line svelte/no-at-html-tags -->
							{@html member.bio
								.replace(/\n\n/g, '</p><p>')
								.replace(/^/, '<p>')
								.replace(/$/, '</p>')}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
