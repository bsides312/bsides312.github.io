// Builds the Schema.org Event JSON-LD object for BSides312, including
// per-talk `subEvent` entries fetched from Sessionize at build time.
// Runs server-side only — do not import from client code.

interface SessionizeSpeaker {
	id: string;
	name: string;
}

interface SessionizeSession {
	id: string;
	title: string;
	description?: string;
	startsAt: string;
	endsAt: string;
	isServiceSession: boolean;
	isPlenumSession: boolean;
	speakers: SessionizeSpeaker[];
	room: string;
}

interface SessionizeGroup {
	sessions: SessionizeSession[];
}

const SESSIONS_URL = 'https://sessionize.com/api/v2/v1trm5nf/view/Sessions';

// Chicago is UTC-5 (CDT) on May 16
const TZ_OFFSET = '-05:00';

function withTz(dt: string): string {
	// Sessionize returns naive local times like "2026-05-16T09:00:00"
	return dt.includes('+') || dt.endsWith('Z') ? dt : `${dt}${TZ_OFFSET}`;
}

function cleanTitle(title: string): string {
	return title.replace(/^\[Track \d+\]\s*/i, '').trim();
}

function truncate(text: string, max = 500): string {
	const collapsed = text.replace(/\s+/g, ' ').trim();
	return collapsed.length > max ? collapsed.slice(0, max - 1) + '…' : collapsed;
}

async function fetchSubEvents(fetchFn: typeof fetch): Promise<object[]> {
	try {
		const res = await fetchFn(SESSIONS_URL);
		if (!res.ok) {
			console.warn(`[eventSchema] Sessionize returned ${res.status}`);
			return [];
		}
		const groups: SessionizeGroup[] = await res.json();
		const sessions = groups.flatMap((g) => g.sessions);
		return sessions
			.filter((s) => !s.isServiceSession)
			.map((s) => {
				const subEvent: Record<string, unknown> = {
					'@type': 'Event',
					name: cleanTitle(s.title),
					startDate: withTz(s.startsAt),
					endDate: withTz(s.endsAt),
					eventStatus: 'https://schema.org/EventScheduled',
					eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
					location: {
						'@type': 'Place',
						name: `Irish American Heritage Center${s.room ? ` — ${s.room}` : ''}`,
						address: {
							'@type': 'PostalAddress',
							streetAddress: '4626 N Knox Ave',
							addressLocality: 'Chicago',
							addressRegion: 'IL',
							postalCode: '60630',
							addressCountry: 'US'
						}
					}
				};
				if (s.description?.trim()) {
					subEvent.description = truncate(s.description);
				}
				if (s.speakers.length) {
					subEvent.performer = s.speakers.map((sp) => ({
						'@type': 'Person',
						name: sp.name
					}));
				}
				return subEvent;
			});
	} catch (err) {
		console.warn('[eventSchema] Failed to fetch Sessionize sessions:', err);
		return [];
	}
}

export async function buildEventSchema(fetchFn: typeof fetch): Promise<object> {
	const subEvents = await fetchSubEvents(fetchFn);

	return {
		'@context': 'https://schema.org',
		'@type': 'Event',
		name: 'BSides312 2026',
		alternateName: 'Security BSides 312',
		description:
			'BSides312 is Chicago\u2019s Security BSides event \u2014 a non-profit hacker and cybersecurity conference featuring talks, workshops, villages, and CTFs.',
		startDate: `2026-05-16T09:00:00${TZ_OFFSET}`,
		endDate: `2026-05-16T18:00:00${TZ_OFFSET}`,
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
			name: 'Hak4Kidz NFP',
			url: 'https://bsides312.org/'
		},
		offers: {
			'@type': 'Offer',
			url: 'https://www.simpletix.com/e/security-bsides312-2026-tickets-247316',
			availability: 'https://schema.org/InStock',
			category: 'Conference Ticket'
		},
		...(subEvents.length > 0 ? { subEvent: subEvents } : {})
	};
}
