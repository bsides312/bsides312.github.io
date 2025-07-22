export interface Sponsor {
	name: string;
	logo: string;
	url: string;
	tier: 'platinum' | 'gold' | 'silver' | 'bronze' | 'founding' | 'community';
}

export const sponsors: Sponsor[] = [
	// Platinum Sponsors
	{
		name: 'Cisco',
		logo: '/assets/img/supporters/cisco.jpg',
		url: 'https://www.cisco.com/',
		tier: 'platinum'
	},

	// Gold Sponsors
	{
		name: 'Kodem Security',
		logo: '/assets/img/supporters/kodem.jpg',
		url: 'https://www.kodemsecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Stellar Cyber',
		logo: '/assets/img/supporters/11.jpg',
		url: 'https://stellarcyber.ai/',
		tier: 'gold'
	},
	{
		name: 'WIZ',
		logo: '/assets/img/supporters/wiz.jpg',
		url: 'https://www.wiz.io/',
		tier: 'gold'
	},
	{
		name: 'Sprocket Security',
		logo: '/assets/img/supporters/13.jpg',
		url: 'https://www.sprocketsecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Spearfish General Store',
		logo: '/assets/img/supporters/spearfish.jpg',
		url: 'https://spearphish-general-store.myshopify.com/',
		tier: 'gold'
	},
	{
		name: 'Tenable',
		logo: '/assets/img/supporters/tenable.jpg',
		url: 'https://www.tenable.com/',
		tier: 'gold'
	},
	{
		name: 'Picus Security',
		logo: '/assets/img/supporters/picus.jpg',
		url: 'https://www.picussecurity.com/',
		tier: 'gold'
	},
	{
		name: 'Sumo Logic',
		logo: '/assets/img/supporters/sumo_logic.jpg',
		url: 'https://www.sumologic.com/',
		tier: 'gold'
	},

	// Silver Sponsors
	{
		name: 'Black Hills Information Security',
		logo: '/assets/img/supporters/bhis.jpg',
		url: 'https://www.blackhillsinfosec.com/',
		tier: 'silver'
	},
	{
		name: 'Just Hacking',
		logo: '/assets/img/supporters/jht.jpg',
		url: 'https://www.justhacking.com/',
		tier: 'silver'
	},
	{
		name: 'AnviLogic',
		logo: '/assets/img/supporters/anvilogic.jpg',
		url: 'https://www.anvilogic.com/',
		tier: 'silver'
	},
	{
		name: 'CyberCX',
		logo: '/assets/img/supporters/cybercx.jpg',
		url: 'https://cybercx.com/',
		tier: 'silver'
	},

	// Bronze Sponsors
	{
		name: 'Netskope',
		logo: '/assets/img/supporters/netskope.jpg',
		url: 'https://www.netskope.com/',
		tier: 'bronze'
	},

	// Founding Sponsors
	{
		name: 'Binalyze',
		logo: '/assets/img/supporters/binalyze.jpg',
		url: 'https://www.binalyze.com/',
		tier: 'founding'
	},
	{
		name: 'Cobalt',
		logo: '/assets/img/supporters/2.jpg',
		url: 'https://www.cobalt.io/',
		tier: 'founding'
	},

	// Community Sponsors
	{
		name: 'Hak4Kidz NFP',
		logo: '/assets/img/supporters/7.jpg',
		url: 'https://www.hak4kidz.com/',
		tier: 'community'
	},
	{
		name: 'BSides MKE',
		logo: '/assets/img/supporters/8.jpg',
		url: 'https://buy.stripe.com/6oE2aqaXN88M6e46op',
		tier: 'community'
	},
	{
		name: 'GCSI',
		logo: '/assets/img/supporters/9.jpg',
		url: 'https://GCSIChicago.org',
		tier: 'community'
	},
	{
		name: 'IntelliGuards',
		logo: '/assets/img/supporters/12.jpg',
		url: 'https://www.intelliguards.com',
		tier: 'community'
	},
	{
		name: 'BurbSec',
		logo: '/assets/img/supporters/burbsec.jpg',
		url: 'https://burbsec.com/',
		tier: 'community'
	},
	{
		name: 'BSides Fort Wayne',
		logo: '/assets/img/supporters/bsidesftw.jpg',
		url: 'https://www.bsidesfortwayne.org/',
		tier: 'community'
	},
	{
		name: 'CornCon',
		logo: '/assets/img/supporters/corncon.jpg',
		url: 'https://corncon.net/',
		tier: 'community'
	},
	{
		name: 'RAICES',
		logo: '/assets/img/supporters/raices.jpg',
		url: 'https://www.raicescyber.org/chicago-chapter',
		tier: 'community'
	},
	{
		name: 'WiCyS',
		logo: '/assets/img/supporters/wicys.jpg',
		url: 'https://www.wicys.org/',
		tier: 'community'
	}
];

export const sponsorTierImages = {
	platinum: '/assets/img/supporters/platinum3.png',
	gold: '/assets/img/supporters/gold3.png',
	silver: '/assets/img/supporters/silver3.png',
	bronze: '/assets/img/supporters/bronze3.png',
	founding: '/assets/img/supporters/founding3.png',
	community: '/assets/img/supporters/community3.png'
};

export const getSponsorsByTier = (tier: Sponsor['tier']) => {
	return sponsors.filter(sponsor => sponsor.tier === tier);
}; 