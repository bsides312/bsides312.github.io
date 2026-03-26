<script lang="ts">
	import { boardMembers } from '$lib/stores/boardMembers';
	import { faqItems } from '$lib/stores/faq';
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	export let data: PageData;

	let activeFaq: string | null = null;

	function toggleFaq(id: string) {
		activeFaq = activeFaq === id ? null : id;
	}

	let lightboxSrc: string | null = null;

	function openLightbox(src: string) {
		lightboxSrc = src;
	}

	function closeLightbox() {
		lightboxSrc = null;
	}

	function downloadCalendar() {
		const icsContent = data.icsContent;
		const blob = new Blob([icsContent], { type: 'text/calendar' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'BSides312-2026.ics';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<svelte:head>
	<title>About BSides312 2026 — Chicago's Biggest Little Non-Profit Hacking Conference</title>
	<meta
		name="description"
		content="Learn about BSides312 2026, a nonprofit one-day security conference on May 16 at the Irish American Heritage Center. Run by and for Chicago's hacking and Cybersecurity community."
	/>
</svelte:head>

<!-- About Section -->
<section id="about" class="section section-with-bg">
	<div class="container">
		<div class="card mb-4">
			<div class="card-body">
				<h3 class="card-title">
					<i class="bi bi-calendar-event text-warning me-2"></i>When & Where
				</h3>
				<p>
					<strong>Date:</strong> May 16th, 2026<br />
					<strong>Time:</strong> 9:00 AM - 7:00 PM CST<br />
					<br />
					<strong>Location:</strong><br />
					Irish American Heritage Center<br />
					4626 N Knox Ave<br />
					Chicago, IL
				</p>
				<button
					class="btn-primary"
					on:click={downloadCalendar}
					type="button"
					aria-label="Add BSides312 to calendar"
				>
					<i class="bi bi-calendar-plus me-2"></i>Add to Calendar
				</button>
			</div>
		</div>
		<div class="card">
			<div class="card-body">
				<h2><i class="bi bi-terminal me-2"></i>About BSides312</h2>
				<p>
					BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking
					and Cybersecurity community. In fact, many of them founded the original BSides Chicago!
					It's built as a collaborative venue; whether you hack hardware, excel at logistics, or
					just bring curious friends, you help shape the conversation.
				</p>
				<p>
					Like every BSides event, the conference follows a community-driven model built by and for
					hackers. Its purpose is to widen the conversation beyond the usual boundaries, offering
					space for people to both present and take part in an intimate, collaborative setting. The
					result is an intense mix of discussions, demos, and interaction where new ideas take
					shape.
				</p>
				<p>
					If you and your organization are as passionate about the security community as we are and
					would like to support our event, please reach out questions [@] bsides312.org. To show our
					thanks, supporters will be welcome to chat about themselves and their organization,
					fostering connections with the BSides312 community.
				</p>
			</div>
		</div>
	</div>

	<!-- Ribbon Image Gallery -->
	<div class="ribbon-gallery">
		<div class="ribbon-track">
			{#each [0, 1] as copy (copy)}
				{#each data.galleryImages as imgPath, i (imgPath)}
					<button
						class="ribbon-img-btn"
						on:click={() => openLightbox(`${base}${imgPath}`)}
						type="button"
						aria-label="View gallery photo {i + 1}"
					>
						<img
							src="{base}{imgPath}"
							alt="BSides312 gallery photo {i + 1}"
							class="ribbon-img"
							loading="lazy"
						/>
					</button>
				{/each}
			{/each}
		</div>
	</div>
</section>

<!-- Gallery Lightbox Modal -->
{#if lightboxSrc}
	<div
		class="lightbox-overlay"
		on:click={closeLightbox}
		on:keydown={(e) => e.key === 'Escape' && closeLightbox()}
		role="dialog"
		aria-modal="true"
		aria-label="Gallery image viewer"
		tabindex="-1"
	>
		<button class="lightbox-close" on:click={closeLightbox} aria-label="Close lightbox"
			>&times;</button
		>
		<img src={lightboxSrc} alt="BSides312 gallery full size" class="lightbox-img" />
	</div>
{/if}

<!-- FAQ Section -->
<section id="faq" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Frequently Asked Questions</h2>
		</div>

		<div class="row justify-content-center">
			<div class="col-lg-9">
				<ul class="faq-list">
					{#each faqItems as faq (faq.id)}
						<li>
							<button
								class="faq-question"
								class:expanded={activeFaq === faq.id}
								on:click={() => toggleFaq(faq.id)}
								type="button"
							>
								{faq.question}
								<i
									class="bi"
									class:bi-chevron-down={activeFaq !== faq.id}
									class:bi-chevron-up={activeFaq === faq.id}
								></i>
							</button>
							{#if activeFaq === faq.id}
								<div class="faq-answer">
									<!-- eslint-disable-next-line svelte/no-at-html-tags -->
									{@html faq.answer
										.replace(/\n\n/g, '</p><p>')
										.replace(/^/, '<p>')
										.replace(/$/, '</p>')}
								</div>
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Board Member Details Section -->
<section id="board" class="section section-with-bg">
	<div class="container">
		<div class="section-header">
			<h2>Board Member Details</h2>
			<p>
				Our BSides312 Board of Directors comprises a close-knit group of longtime friends, many of
				whom created the original BSides Chicago!
			</p>
		</div>

		{#each boardMembers as member (member.id)}
			<div class="card mb-4" id={member.id}>
				<div class="card-body">
					<div class="row align-items-center">
						<div class="col-md-3 text-center mb-3 mb-md-0">
							<img src={member.image} alt={member.name} class="board-img" />
						</div>
						<div class="col-md-9">
							<h3 class="card-title mb-1">{member.name}</h3>
							<p class="mb-3 board-role">
								<i class="bi bi-briefcase text-info me-2"></i>{member.title}
							</p>
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
			</div>
		{/each}
	</div>
</section>
