<script lang="ts">
	const SITE_URL = 'https://bsides312.org';
	const DEFAULT_IMAGE = `${SITE_URL}/assets/img/opengraph_logo.jpg`;

	export let title: string;
	export let description: string;
	export let path: string = '/';
	export let image: string = DEFAULT_IMAGE;
	export let noindex: boolean = false;

	$: url = `${SITE_URL}${path}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<link rel="canonical" href={url} />

		<!-- Open Graph / Facebook -->
		<meta property="og:type" content="website" />
		<meta property="og:url" content={url} />
		<meta property="og:site_name" content="BSides312" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={image} />

		<!-- Twitter -->
		<meta property="twitter:card" content="summary_large_image" />
		<meta property="twitter:url" content={url} />
		<meta property="twitter:site" content="@bsides312" />
		<meta property="twitter:title" content={title} />
		<meta property="twitter:description" content={description} />
		<meta property="twitter:image" content={image} />
	{/if}
</svelte:head>
