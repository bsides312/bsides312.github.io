<script lang="ts">
	import { base } from '$app/paths';

	function downloadCalendar() {
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
DTSTART;TZID=America/Chicago:20260516T080000
DTEND;TZID=America/Chicago:20260516T200000
SUMMARY:BSides312 2026
LOCATION:Irish American Heritage Center\\, 4626 N Knox Ave\\, Chicago\\, IL 60630
DESCRIPTION:BSides312 is a nonprofit one-day conference run by longtime members of Chicago's hacking and Cybersecurity community. Join us for talks, workshops, and networking with security professionals from around the world.
URL:https://bsides312.org
END:VEVENT
END:VCALENDAR`;
		const blob = new Blob([icsContent], { type: 'text/calendar' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = 'BSides312-2026.ics';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	}
</script>

<div class="card mb-3">
	<div class="card-body when-where-body">
		<h3 class="card-title">
			<i class="bi bi-geo-alt-fill text-danger me-2"></i>When and Where
		</h3>
		<div class="when-where-top">
			<div class="when-where-datetime">
				<p class="mb-1"><strong>Date:</strong> May 16th, 2026</p>
				<p class="mb-1"><strong>Doors:</strong> 8am</p>
				<p class="mb-1"><strong>Talks:</strong> 9am&ndash;6PM</p>
				<p class="mb-0"><strong>After-Party:</strong> 6PM&ndash;8PM</p>
			</div>
			<div class="when-where-address">
				<p class="mb-1">Irish American Heritage Center</p>
				<p class="mb-1">4626 N Knox Ave, Chicago, IL</p>
				<p class="mb-0"><small>TONS of parking!</small></p>
			</div>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8!2d-87.7425!3d41.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc7f9c0f0f0f%3A0x0!2s4626%20N%20Knox%20Ave%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
			width="100%"
			height="200"
			class="map-iframe"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Irish American Heritage Center Location"
		></iframe>
		<div class="when-where-btns">
			<a
				href="https://maps.app.goo.gl/RuApEvazVQGJAXHi7"
				target="_blank"
				rel="noopener"
				class="btn-primary"
			>
				<i class="bi bi-box-arrow-up-right"></i>Open in Google Maps
			</a>
			<button
				class="btn-primary"
				on:click={downloadCalendar}
				type="button"
				aria-label="Add BSides312 to calendar"
			>
				<i class="bi bi-calendar-plus"></i>Add to Calendar
			</button>
			<a href="{base}/about#faq" class="btn-primary">
				<i class="bi bi-question-circle-fill"></i>FAQs
			</a>
		</div>
	</div>
</div>
