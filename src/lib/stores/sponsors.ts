import { base } from '$app/paths';

export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';
}

export const sponsors: Sponsor[] = [
	// Gold Sponsors
	{
		name: 'CardinalOps',
		logo: `${base}/assets/img/supporters/cardinalops.jpg`,
		url: 'https://cardinalops.com',
		tier: 'gold'
	},
	{
		name: 'Material Security',
		logo: `${base}/assets/img/supporters/material.jpg`,
		url: 'https://material.security',
		tier: 'gold'
	},
	{
		name: 'Picus Security',
		logo: `${base}/assets/img/supporters/picus.jpg`,
		url: 'https://www.picussecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Vorlon',
		logo: `${base}/assets/img/supporters/vorlon.jpg`,
		url: 'https://vorlon.io',
		tier: 'gold'
	},
	{
		name: 'Push Security',
		logo: `${base}/assets/img/supporters/push_security.jpg`,
		url: 'https://pushsecurity.com',
		tier: 'gold'
	},
	{
		name: 'Stellar Cyber',
		logo: `${base}/assets/img/supporters/stellar_cyber.jpg`,
		url: 'https://stellarcyber.ai',
		tier: 'gold'
	},
	// Silver Sponsors

	// Founding Sponsors
	{
		name: 'Binalyze',
		logo: `${base}/assets/img/supporters/binalyze.jpg`,
		url: 'https://www.binalyze.com/',
		tier: 'founding'
	},
	{
		name: 'Cobalt',
		logo: `${base}/assets/img/supporters/cobalt.jpg`,
		url: 'https://www.cobalt.io/',
		tier: 'founding'
	},

	// Community Supporters
	{
		name: 'Modest Merch',
		logo: `${base}/assets/img/supporters/modest_merch.jpg`,
		url: 'https://modestmerch.bigcartel.com',
		tier: 'community'
	},
	{
		name: 'Hak4Kidz',
		logo: `${base}/assets/img/supporters/hak4kidz.jpg`,
		url: 'https://www.hak4kidz.com',
		tier: 'community'
	},
	{
		name: 'BSides MKE',
		logo: `${base}/assets/img/supporters/bsidesmke.jpg`,
		url: 'https://www.bsidesmke.org',
		tier: 'community'
	},
	{
		name: 'WiCyS',
		logo: `${base}/assets/img/supporters/wicys.jpg`,
		url: 'https://www.wicys.org',
		tier: 'community'
	},
	{
		name: 'BurbSec',
		logo: `${base}/assets/img/supporters/burbsec.jpg`,
		url: 'https://burbsec.org/',
		tier: 'community'
	},
	{
		name: 'OzCon',
		logo: `${base}/assets/img/supporters/ozcon.jpg`,
		url: 'https://theozcon.com/',
		tier: 'community'
	}
];

// Supporter tier images
export const sponsorTierImages = {
	platinum: `${base}/assets/img/supporters/platinum3.png`,
	gold: `${base}/assets/img/supporters/gold3.png`,
	silver: `${base}/assets/img/supporters/silver3.png`,
	bronze: `${base}/assets/img/supporters/bronze3.png`,
	founding: `${base}/assets/img/supporters/founding3.png`,
	community: `${base}/assets/img/supporters/community3.png`
};

export function getSponsorsByTier(tier: Sponsor['tier']): Sponsor[] {
	return sponsors.filter((sponsor) => sponsor.tier === tier);
}
