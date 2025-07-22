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
		image: 'assets/img/about/klowe.jpg',
		bio: `Kourtney has over ten years of experience in cybersecurity working in healthcare, legal, and technology consulting. She started her career as a security consultant at Trustwave where she performed penetration testing and vulnerability assessments. 

Her current role is as a Senior Security Consultant at a cybersecurity consulting firm in Chicago where she performs incident response, digital forensics, and security architecture reviews. In addition to her consulting work, she is passionate about security education and has delivered talks at various conferences including BSides, OWASP, and local meetups.

Kourtney holds a Master's degree in Information Systems Security from DePaul University and maintains several industry certifications including CISSP, GCIH, and GCFA.`,
		social: {
			linkedin: 'https://www.linkedin.com/in/kourtney-lowe-ab9771b/'
		}
	},
	{
		id: 'heal',
		name: 'Heather Eastep-Anderson',
		title: 'Chief Financial Officer',
		image: 'assets/img/about/heal.jpg',
		bio: `Heather brings over 15 years of financial management experience to BSides312. She currently serves as Controller at a technology startup where she oversees all financial operations, budgeting, and compliance activities.

Prior to her current role, Heather worked in public accounting specializing in technology and non-profit organizations. She has extensive experience with grant management, financial reporting, and regulatory compliance for non-profit entities.

Heather is passionate about supporting technology education and community outreach programs. She holds a CPA certification and a Bachelor's degree in Accounting from Northern Illinois University.`,
		social: {
			linkedin: 'https://www.linkedin.com/in/heather-eastep-anderson/'
		}
	},
	{
		id: 'jxmas',
		name: 'Jim Mastellar',
		title: 'Chief Technology Officer',
		image: 'assets/img/about/jxmas.jpg',
		bio: `Jim is a cybersecurity professional with over 20 years of experience in information security, network administration, and software development. He currently works as a Principal Security Engineer at a Fortune 500 company where he leads security architecture and incident response efforts.

Throughout his career, Jim has been actively involved in the security community, organizing local meetups and volunteering at security conferences. He has spoken at numerous events on topics ranging from threat hunting to security automation.

Jim holds multiple industry certifications including CISSP, GCIH, and SANS expert-level certifications. He is also an adjunct instructor at a local university where he teaches cybersecurity courses.`,
		social: {
			linkedin: 'https://www.linkedin.com/in/jim-mastellar/',
			twitter: 'https://twitter.com/jmastellar'
		}
	},
	{
		id: 'rwagner',
		name: 'Richard Wagner',
		title: 'Conference Chair',
		image: 'assets/img/about/rwagner.jpg',
		bio: `Richard has been involved in information security for over 15 years, currently serving as a Senior Security Architect at a major financial institution. His expertise spans application security, cloud security, and security program development.

As Conference Chair, Richard oversees the technical program, speaker selection, and overall conference experience for BSides312. He has been instrumental in growing the conference from its early days to the major community event it is today.

Richard is an active contributor to the security community, having presented at conferences including BSides, OWASP, and regional security meetups. He holds a Master's degree in Computer Science and maintains certifications including CISSP and CSSLP.`,
		social: {
			linkedin: 'https://www.linkedin.com/in/richard-wagner-security/'
		}
	},
	{
		id: 'mkavka',
		name: 'Matt Kavka',
		title: 'Marketing & Outreach Director',
		image: 'assets/img/about/mkavka.jpg',
		bio: `Matt combines his background in marketing and technology to drive awareness and engagement for BSides312. He currently works as a Digital Marketing Manager for a cybersecurity company where he leads content strategy and community engagement initiatives.

With over 10 years of experience in digital marketing and communications, Matt has helped numerous technology organizations build their brand presence and connect with their target audiences. He is passionate about making cybersecurity more accessible and engaging for diverse communities.

Matt holds a Bachelor's degree in Marketing Communications and maintains Google Analytics and AdWords certifications. He is also actively involved in local technology meetups and startup communities.`,
		social: {
			linkedin: 'https://www.linkedin.com/in/matt-kavka/',
			twitter: 'https://twitter.com/mkavka'
		}
	}
]; 