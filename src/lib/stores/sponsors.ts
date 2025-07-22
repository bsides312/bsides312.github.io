export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';
}

export const sponsors: Sponsor[] = [
	{
		name: 'Cisco',
		logo: 'assets/img/supporters/cisco.jpg',
		url: 'https://www.cisco.com/',
		tier: 'platinum'
	},
	{
		name: 'Anvilogic',
		logo: 'assets/img/supporters/anvilogic.jpg',
		url: 'https://www.anvilogic.com/',
		tier: 'gold'
	},
	{
		name: 'Binalyze',
		logo: 'assets/img/supporters/binalyze.jpg',
		url: 'https://binalyze.com/',
		tier: 'gold'
	},
	{
		name: 'CyberCX',
		logo: 'assets/img/supporters/cybercx.jpg',
		url: 'https://cybercx.com/',
		tier: 'gold'
	},
	{
		name: 'Netskope',
		logo: 'assets/img/supporters/netskope.jpg',
		url: 'https://www.netskope.com/',
		tier: 'gold'
	},
	{
		name: 'Picus Security',
		logo: 'assets/img/supporters/picus.jpg',
		url: 'https://www.picussecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Sumo Logic',
		logo: 'assets/img/supporters/sumo_logic.jpg',
		url: 'https://www.sumologic.com/',
		tier: 'gold'
	},
	{
		name: 'Tenable',
		logo: 'assets/img/supporters/tenable.jpg',
		url: 'https://www.tenable.com/',
		tier: 'gold'
	},
	{
		name: 'Wiz',
		logo: 'assets/img/supporters/wiz.jpg',
		url: 'https://www.wiz.io/',
		tier: 'gold'
	},
	{
		name: 'Black Hills Information Security',
		logo: 'assets/img/supporters/bhis.jpg',
		url: 'https://www.blackhillsinfosec.com/',
		tier: 'silver'
	},
	{
		name: 'Jordan Hirschfeld & Associates Technology',
		logo: 'assets/img/supporters/jht.jpg',
		url: 'https://jhtechnology.com/',
		tier: 'silver'
	},
	{
		name: 'Kodem Security',
		logo: 'assets/img/supporters/kodem.jpg',
		url: 'https://kodemsecurity.com/',
		tier: 'silver'
	},
	{
		name: 'Spearfish Security',
		logo: 'assets/img/supporters/spearfish.jpg',
		url: 'https://spearfishsecurity.com/',
		tier: 'silver'
	},
	{
		name: 'BSides Fort Worth',
		logo: 'assets/img/supporters/bsidesftw.jpg',
		url: 'https://www.bsidesftw.org/',
		tier: 'community'
	},
	{
		name: 'BurbSec',
		logo: 'assets/img/supporters/burbsec.jpg',
		url: 'https://burbsec.org/',
		tier: 'community'
	},
	{
		name: 'CornCon',
		logo: 'assets/img/supporters/corncon.jpg',
		url: 'https://corncon.net/',
		tier: 'community'
	},
	{
		name: 'RAICES',
		logo: 'assets/img/supporters/raices.jpg',
		url: 'https://www.raicestexas.org/',
		tier: 'community'
	},
	{
		name: 'Women in Cybersecurity (WiCyS)',
		logo: 'assets/img/supporters/wicys.jpg',
		url: 'https://www.wicys.org/',
		tier: 'community'
	}
];

// Sponsor tier images
export const sponsorTierImages = {
	platinum: 'assets/img/supporters/platinum3.png',
	gold: 'assets/img/supporters/gold3.png',
	silver: 'assets/img/supporters/silver3.png',
	bronze: 'assets/img/supporters/bronze3.png',
	founding: 'assets/img/supporters/founding3.png',
	community: 'assets/img/supporters/community3.png'
};

export function getSponsorsByTier(tier: Sponsor['tier']): Sponsor[] {
	return sponsors.filter(sponsor => sponsor.tier === tier);
} 