// Builds the Schema.org Event JSON-LD object for BSides312.
// Runs server-side only — do not import from client code.
//
// BSides312 2027 is confirmed for June 13, 2027 at the Irish American
// Heritage Center. CFP/tickets/sessions don't exist yet, so this omits
// subEvent and offers until those are announced — see git history (the
// commit that introduced this comment) for the prior 2026 Event object
// shape, including the Sessionize-backed subEvent/session logic and
// ticket Offers, to restore once sessions and ticket links exist.

// Chicago is UTC-5 (CDT) in June
const TZ_OFFSET = '-05:00';

export async function buildEventSchema(): Promise<object> {
	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: 'BSides312 2027',
		alternateName: 'Security BSides 312',
		description:
			'BSides312 is Chicago’s Security BSides event — a non-profit hacker and cybersecurity conference featuring talks, workshops, villages, and CTFs.',
		startDate: `2027-06-13T08:00:00${TZ_OFFSET}`,
		endDate: `2027-06-13T20:00:00${TZ_OFFSET}`,
		eventStatus: 'https://schema.org/EventScheduled',
		eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
		keywords:
			'BSides, Security BSides, hacker conference, cybersecurity conference, Chicago, infosec',
		location: {
			'@type': 'Place',
			name: 'Irish American Heritage Center',
			address: {
				'@type': 'PostalAddress',
				streetAddress: '4626 N Knox Ave',
				addressLocality: 'Chicago',
				addressRegion: 'IL',
				postalCode: '60630',
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
