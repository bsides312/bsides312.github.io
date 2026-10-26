import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: vitePreprocess(),
			// Use static adapter for GitHub Pages
			adapter: adapter({
				// GitHub Pages expects files in the root or docs folder
				pages: 'build',
				assets: 'build',
				precompress: false,
				strict: true
			}),
			// Configure paths for GitHub Pages with custom domain (bsides312.org)
			// Custom domains don't need a base path
			paths: {
				base: process.argv.includes('dev') ? '' : ''
			},
			// Prerender all pages for static hosting
			prerender: {
				handleHttpError: 'warn',
				handleMissingId: 'warn',
				entries: ['*']
			}
		})
	],

	build: {
		sourcemap: false,
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: undefined
			}
		}
	},

	server: {
		port: 3000,
		host: true,
		fs: {
			allow: ['..']
		}
	},

	preview: {
		port: 4173,
		host: true
	},

	// Ensure proper asset handling for GitHub Pages
	assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.pdf']
});
