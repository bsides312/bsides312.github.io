import { base } from '$app/paths';

export interface BoardMember {
	id: string;
	name: string;
	title: string;
	image: string;
	bio: string;
	social?: {
		linkedin?: string;
		twitter?: string;
		facebook?: string;
		instagram?: string;
	};
}

export const boardMembers: BoardMember[] = [
	{
		id: 'klowe',
		name: 'Kourtney Lowe',
		title: 'Chief Executive Officer',
		image: `${base}/assets/img/about/klowe.jpg`,
		bio: `Kourtney has over ten years of experience in the GRC space of information security, largely focusing on third party risk. She's volunteered with Th0tcon, Blue Team Con, Securing Sexuality, and is also active in the Chicago BurbSec community. She's passionate about the intersection of cybersecurity and psychology and gives advice about password managers, password hygiene, and security questions to anyone that will listen. Interests outside of the security space include Elvis (Presley and her dearly departed Puggle), pickles, classic movies, and music. The weirder, the better.`
	},
	{
		id: 'heal',
		name: 'Dave "Heal" Schwartzberg',
		title: 'Chief Financial Officer',
		image: `${base}/assets/img/about/heal.jpg`,
		bio: `David Schwartzberg is a Security Solutions Architect at Cisco Security. David is a regular speaker at conferences such as GrrCON and has also presented at THOTCON, CypherCon, OWASP AppSec, BSides (various locations), Black Hat Arsenal, DEF CON, DerbyCON, (ISC)2 Congress, SC Congress and other events. As a writer, David wrote the original CramSession study guide for the Network+ certification in 1999, a self published book (http://amzn.to/CfKSISO), blogger for Dark Reading, Barracuda Labs, and as a guest blogger for the award winning Naked Security blog (http://nakedsecurity.sophos.com). After David graduated from Queens College with a B.S. in Accounting and Information Systems, he has earned several certifications in the field of Information Technology including DevNet Associate, CCNA, CNA, CNE, MCP, Network+, Security+, and CISSP.

Utilizing his 6+ years of accounting experience combined with 28 years of Information Security and Information Technology experience, he speaks regularly with technology executives and professionals to help protect their corporate secrets and stay compliant.`
	},
	{
		id: 'jxmas',
		name: 'Johnny Xmas',
		title: 'Chief Marketing Officer',
		image: `${base}/assets/img/about/jxmas.jpg`,
		bio: `Johnny is a highly respected figure in the U.S. hacking community and the most punk rock Eagle Scout you've ever met. He is frequently found volunteering at events or presenting on topics ranging from his cutting-edge security research to his journey through the InfoSec career landscape, both as an engineer and a hiring manager.

As a Leadership member of the renowned BurbSec community meetup network, Johnny has been deeply involved with the group since 2011, fostering collaboration and mentorship within the industry. His contributions extend beyond BurbSec, as he partners with higher education institutions across the U.S., offering curriculum development and guest lectures.

Johnny has also provided Digital Forensics and Incident Response (DFIR) training to the Cybersecurity and Infrastructure Security Agency (CISA), the Department of Homeland Security (DHS), and their private sector partners.

Professionally, Johnny leads Offensive Security for a Fortune 1000/Global 5000 manufacturing and agricultural company, where he continues to drive innovation and strengthen organizational defenses.`
	},
	{
		id: 'rwagner',
		name: 'Robert Wagner',
		title: 'Director',
		image: `${base}/assets/img/about/rwagner.jpg`,
		bio: `Robert Wagner is an Advisory CISO and a highly respected security practitioner, advisor and strategist with nearly 20 years of experience. His security experience ranges from defending everything from Fortune 500 companies to government agencies, major universities, and financial institutions. He has presented and taught at Information Security and Hacker conferences ranging from DefCon, APIsecure, BSides Tel Aviv, GrrCON, Dawn or Doom, WCISC, and more. He is a co-founder of the not-for-profit organization Hak4Kidz, serves on the board of the Chicago ISSA chapter, and regularly volunteers for various hacker cons including BSides312, Blue Team Con, and others.`
	},
	{
		id: 'mkavka',
		name: 'Mike Kavka',
		title: 'Director',
		image: `${base}/assets/img/about/mkavka.jpg`,
		bio: `Mike "Shecky" Kavka has been involved in the Chicago security community for over 10 years. Currently a Senior Security Engineer as his day job, he has volunteered with events such as Blue Team Con and Hak4Kidz. Outside of the security world, Shecky is involved with model railroading, community theatre, and sings the National Anthem at some sporting events.`
	}
]; 