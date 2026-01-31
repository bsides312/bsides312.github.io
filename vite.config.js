import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],

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
