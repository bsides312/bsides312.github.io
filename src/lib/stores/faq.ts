export interface FAQItem {
	id: string;
	question: string;
	answer: string;
}

export const faqItems: FAQItem[] = [
	{
		id: 'what-is-bsides',
		question: 'What the heck is a "BSides"?',
		answer: `A BSides conference (short for Security BSides) is a community-driven cybersecurity event that offers an open platform for professionals, researchers, and enthusiasts to share knowledge, present research, and network. These grassroots conferences are independently organized in cities around the world and are often low-cost or free, emphasizing accessibility and community involvement.

These grassroots conferences are independently organized in cities around the world (overseen by BSides International) and are often low-cost or free, emphasizing accessibility and community involvement. BSides events feature talks, workshops, panels, and hands-on activities like Capture the Flag competitions, often showcasing experimental or niche topics that might not appear at mainstream conferences.

Known for their DIY spirit and local flair, BSides conferences serve as an inclusive space for both newcomers and seasoned experts to engage and collaborate. Read below for more!`
	},
	{
		id: 'why-bsides312',
		question: 'But why make a "BSides312?"',
		answer: `To fill a gap. BSides312 embodies the essence of the Security BSides ethos, rooted in a desire to empower individuals who often go unheard in the dynamic realm of cybersecurity events.

Just as the original BSides (now "BSides Las Vegas") emerged from the overflow of talent at DEF CON, our Chicago-based initiative arose from an overflow of desire from THOTCON attendees to squeeze out one more day of content. In fact, some of the founders of BSides312 were even founders of the original BSides Chicago, but over the years various new handlers have opted to move the dates to later in the year. Ever since, a public demand for it to return existed, and we could no longer ignore the cry.

We understand the passion and drive of countless individuals eager to share their insights, yet constrained by limited opportunities. It's important to note that our mission is not to compete or detract from other local initiatives, rather, we aim to complement and expand the landscape of opportunities available to the Chicago cybersecurity community. By creating a welcoming platform, we aim to uplift and amplify voices that might otherwise remain unheard, fostering a culture of generosity and reciprocity within the vibrant cybersecurity community that has enriched us all. See below for the continuation of this story!`
	},
	{
		id: 'two-bsides-allowed',
		question: 'Two BSides in the same city? Is that allowed?',
		answer: 'Yes. In fact, Security BSides International approved Delhi and Los Angeles to have two Security BSides conferences, and now Chicago!'
	},
	{
		id: 'dress-code',
		question: 'Is there a dress code?',
		answer: `This is NOT a boring executive conference, and we want enable you to be yourself. Dress as you normally would in a public setting with strangers, with your "swimsuit bits" covered.

If you really love wearing a suit, please go for it. If you love being goth, queer, furry...whatever it is, please bring "you," so long as it doesn't distract from the content being provided!`
	},
	{
		id: 'skill-level',
		question: 'What skill level is required to attend?',
		answer: `BSides312 welcomes everyone from complete beginners to seasoned professionals. We've designed our talks and activities to cover various skill levels, and our CTF competition has challenges for both newcomers and experienced hackers. If you're new to security, don't worry! The community is friendly and our volunteers can help direct you to beginner-appropriate content.`
	},
	{
		id: 'parking',
		question: 'Is there parking at the venue?',
		answer: 'TBD in 2026!'
	},
	{
		id: 'photography',
		question: 'What\'s your photography policy?',
		answer: `We encourage you to document and share your BSides312 experience, but always ask for permission before photographing individuals' faces or other identifying features, and be clear about where the photos may be used. Speakers may indicate if they don't want their presentations recorded or photographed, so listen up!`
	},
	{
		id: 'accessibility',
		question: 'Is the venue mobility accessible?',
		answer: 'The TBD in 2026, though this is a primary concern when choosing our venues!'
	},
	{
		id: 'cfp',
		question: 'Can I submit a talk for next year?',
		answer: `Absolutely! Our Call for Presentations (CFP) for the next event typically opens about 4-5 months before the conference. Follow us on social media or join our mailing list to be notified when submissions open. We encourage talks from speakers of all experience levels, including first-time presenters. If you're interested in speaking but unsure about the process, feel free to reach out to us for mentorship.`
	}
]; 