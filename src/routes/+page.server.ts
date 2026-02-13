import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const galleryDir = resolve('static/assets/img/gallery');
	const files = readdirSync(galleryDir)
		.filter((f: string) => /\.(webp|jpg|jpeg|png|gif)$/i.test(f))
		.sort((a: string, b: string) => {
			// Sort numerically if filenames are numbers
			const numA = parseInt(a);
			const numB = parseInt(b);
			if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
			return a.localeCompare(b);
		});

	return {
		galleryImages: files.map((f: string) => `/assets/img/gallery/${f}`)
	};
};
