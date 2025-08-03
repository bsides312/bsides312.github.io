import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

	// GitHub Pages configuration
	base: process.env.NODE_ENV === 'production' ? '/' : '/',

	build: {
		outDir: 'dist',
		assetsDir: 'assets',
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
