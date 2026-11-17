// Builds the Schema.org Event JSON-LD object for BSides312.
// Runs server-side only — do not import from client code.
//
// BSides312 2027 is planned for June 2027 in Chicago; the exact date and
// venue are TBD. CFP/tickets/sessions don't exist yet, so this omits
// subEvent and offers until those are announced — see git history (the
// commit that introduced this comment) for the prior 2026 Event object
// shape, including the Sessionize-backed subEvent/session logic and
// ticket Offers, to restore once sessions and ticket links exist.

export async function buildEventSchema(): Promise<object> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: 'BSides312 2027',
		alternateName: 'Security BSides 312',
		description:
			'BSides312 is Chicago’s Security BSides event — a non-profit hacker and cybersecurity conference featuring talks, workshops, villages, and CTFs.',
		// Exact date not yet announced; restore full start/end timestamps once it is.
		startDate: '2027-06',
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		keywords:
			'BSides, Security BSides, hacker conference, cybersecurity conference, Chicago, infosec',
		location: {
			'@type': 'Place',
			name: 'TBD',
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Chicago',
				addressRegion: 'IL',
				addressCountry: 'US'
			}
		},
		image: 'https://bsides312.org/assets/img/opengraph_logo.jpg',
		url: 'https://bsides312.org/',
		organizer: {
			'@type': 'Organization',
			name: 'BSides312',
			url: 'https://bsides312.org/'
		}
	};
}
