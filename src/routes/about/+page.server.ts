import { readdirSync } from 'fs';
import { resolve } from 'path';
import type { PageServerLoad } from './$types';

function generateIcsContent(): string {
	const eventStart = new Date('2026-05-16T09:00:00-05:00');
	const eventEnd = new Date('2026-05-16T19:00:00-05:00');

	const formatDate = (date: Date): string => {
		return date
			.toISOString()
			.replace(/[-:]/g, '')
			.replace(/\.\d{3}/, '');
	};

	const description = `BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking and infosec community. Join us for talks, workshops, and networking with security professionals from around the world.`;

	const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BSides312//BSides312 2026//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VTIMEZONE
TZID:America/Chicago
BEGIN:DAYLIGHT
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
TZNAME:CDT
DTSTART:20260308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
TZNAME:CST
DTSTART:20261101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
UID:bsides312-2026@bsides312.org
DTSTART;TZID=America/Chicago:20260516T090000
DTEND;TZID=America/Chicago:20260516T190000
SUMMARY:BSides312 2026
LOCATION:Irish American Heritage Center\\, 4626 N Knox Ave\\, Chicago\\, IL 60641
DESCRIPTION:${description}
URL:https://bsides312.org
END:VEVENT
END:VCALENDAR`;

	return icsContent;
}

export const load: PageServerLoad = async () => {
	const galleryDir = resolve('static/assets/img/gallery');
	const files = readdirSync(galleryDir)
		.filter((f: string) => /\.(webp|jpg|jpeg|png|gif)$/i.test(f))
		.sort((a: string, b: string) => {
			const numA = parseInt(a);
			const numB = parseInt(b);
			if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
			return a.localeCompare(b);
		});

	return {
		galleryImages: files.map((f: string) => `/assets/img/gallery/${f}`),
		icsContent: generateIcsContent()
	};
};
