import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://bsides312.org';

const routes = [
	{ path: '/', priority: '1.0', changefreq: 'weekly' },
	{ path: '/about', priority: '0.8', changefreq: 'monthly' },
	{ path: '/schedule', priority: '0.9', changefreq: 'weekly' },
	{ path: '/speakers', priority: '0.9', changefreq: 'weekly' },
	{ path: '/previous-speakers', priority: '0.6', changefreq: 'monthly' },
	{ path: '/support', priority: '0.7', changefreq: 'monthly' },
	{ path: '/privacy', priority: '0.3', changefreq: 'yearly' },
	{ path: '/code-of-conduct', priority: '0.3', changefreq: 'yearly' }
];

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `	<url>
		<loc>${SITE_URL}${route.path}</loc>
		<changefreq>${route.changefreq}</changefreq>
		<priority>${route.priority}</priority>
	</url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
