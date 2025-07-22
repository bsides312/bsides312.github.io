import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// Use static adapter for GitHub Pages
		adapter: adapter({
			// GitHub Pages expects files in the root or docs folder
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		}),
		// Configure paths for GitHub Pages
		paths: {
			// Set base path if using a custom domain, leave empty for username.github.io
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		},
		prerender: {
			handleMissingId: 'warn' // Don't fail build on missing anchor IDs
		}
	}
};

export default config;
