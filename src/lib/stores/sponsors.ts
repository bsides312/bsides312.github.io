import { base } from '$app/paths';

export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';
}

export const sponsors: Sponsor[] = [
	{
		name: 'Cisco',
		logo: `${base}/assets/img/supporters/cisco.jpg`,
		url: 'https://www.cisco.com/',
		tier: 'platinum'
	},
	{
		name: 'Anvilogic',
		logo: `${base}/assets/img/supporters/anvilogic.jpg`,
		url: 'https://www.anvilogic.com/',
		tier: 'gold'
	},
	{
		name: 'Binalyze',
		logo: `${base}/assets/img/supporters/binalyze.jpg`,
		url: 'https://binalyze.com/',
		tier: 'gold'
	},
	{
		name: 'CyberCX',
		logo: `${base}/assets/img/supporters/cybercx.jpg`,
		url: 'https://cybercx.com/',
		tier: 'gold'
	},
	{
		name: 'Netskope',
		logo: `${base}/assets/img/supporters/netskope.jpg`,
		url: 'https://www.netskope.com/',
		tier: 'gold'
	},
	{
		name: 'Picus Security',
		logo: `${base}/assets/img/supporters/picus.jpg`,
		url: 'https://www.picussecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Sumo Logic',
		logo: `${base}/assets/img/supporters/sumo_logic.jpg`,
		url: 'https://www.sumologic.com/',
		tier: 'gold'
	},
	{
		name: 'Tenable',
		logo: `${base}/assets/img/supporters/tenable.jpg`,
		url: 'https://www.tenable.com/',
		tier: 'gold'
	},
	{
		name: 'Wiz',
		logo: `${base}/assets/img/supporters/wiz.jpg`,
		url: 'https://www.wiz.io/',
		tier: 'gold'
	},
	{
		name: 'Black Hills Information Security',
		logo: `${base}/assets/img/supporters/bhis.jpg`,
		url: 'https://www.blackhillsinfosec.com/',
		tier: 'silver'
	},
	{
		name: 'Jordan Hirschfeld & Associates Technology',
		logo: `${base}/assets/img/supporters/jht.jpg`,
		url: 'https://jhtechnology.com/',
		tier: 'silver'
	},
	{
		name: 'Kodem Security',
		logo: `${base}/assets/img/supporters/kodem.jpg`,
		url: 'https://kodemsecurity.com/',
		tier: 'silver'
	},
	{
		name: 'Spearfish Security',
		logo: `${base}/assets/img/supporters/spearfish.jpg`,
		url: 'https://spearfishsecurity.com/',
		tier: 'silver'
	},
	{
		name: 'BSides Fort Worth',
		logo: `${base}/assets/img/supporters/bsidesftw.jpg`,
		url: 'https://www.bsidesftw.org/',
		tier: 'community'
	},
	{
		name: 'BurbSec',
		logo: `${base}/assets/img/supporters/burbsec.jpg`,
		url: 'https://burbsec.org/',
		tier: 'community'
	},
	{
		name: 'CornCon',
		logo: `${base}/assets/img/supporters/corncon.jpg`,
		url: 'https://corncon.net/',
		tier: 'community'
	},
	{
		name: 'RAICES',
		logo: `${base}/assets/img/supporters/raices.jpg`,
		url: 'https://www.raicestexas.org/',
		tier: 'community'
	},
	{
		name: 'Women in Cybersecurity (WiCyS)',
		logo: `${base}/assets/img/supporters/wicys.jpg`,
		url: 'https://www.wicys.org/',
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
	return sponsors.filter(sponsor => sponsor.tier === tier);
} 