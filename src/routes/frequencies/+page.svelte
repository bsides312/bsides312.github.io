<script lang="ts">
	import { onMount } from 'svelte';

	// Signal payload — assembled at runtime from char codes
	// Not greppable as a string literal
	const _sig = [67, 48, 109, 112, 108, 49, 109, 51, 110, 116];

	let displayText = '';
	let showCode = false;
	let cursorVisible = true;

	const lines = [
		'> SCANNING FREQUENCIES...',
		'> BAND: 312 MHz',
		'> SIGNAL LOCK ACQUIRED',
		'> DECODING TRANSMISSION...',
		'> CLEARANCE: GRANTED',
		'',
		'> COMPLIMENTARY ACCESS CODE:'
	];

	let currentLines: string[] = [];

	onMount(() => {
		const cursorInterval = setInterval(() => {
			cursorVisible = !cursorVisible;
		}, 530);

		let lineIndex = 0;
		const typeNextLine = () => {
			if (lineIndex < lines.length) {
				currentLines = [...currentLines, lines[lineIndex]];
				lineIndex++;
				setTimeout(typeNextLine, 400 + Math.random() * 300);
			} else {
				showCode = true;
				displayText = String.fromCharCode(..._sig);
			}
		};

		setTimeout(typeNextLine, 800);

		return () => clearInterval(cursorInterval);
	});
</script>

<svelte:head>
	<title>// SIGNAL INTERCEPT</title>
</svelte:head>

<div class="terminal">
	<div class="terminal-header">
		<span class="terminal-dot red"></span>
		<span class="terminal-dot yellow"></span>
		<span class="terminal-dot green"></span>
		<span class="terminal-title">FREQ_MONITOR v3.12</span>
	</div>
	<div class="terminal-body">
		{#each currentLines as line}
			<p class="terminal-line">{line}</p>
		{/each}
		{#if showCode}
			<p class="code-reveal">{displayText}</p>
		{/if}
		<span class="cursor" class:visible={cursorVisible}>█</span>
	</div>
</div>
