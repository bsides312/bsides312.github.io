import { base } from '$app/paths';

export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';
}

export const sponsors: Sponsor[] = [
	{
		name: 'Picus Security',
		logo: `${base}/assets/img/supporters/picus.jpg`,
		url: 'https://www.picussecurity.com/',
		tier: 'gold'
	},
	{
		name: 'BurbSec',
		logo: `${base}/assets/img/supporters/burbsec.jpg`,
		url: 'https://burbsec.org/',
		tier: 'community'
	}
];

// Sponsor tier images
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