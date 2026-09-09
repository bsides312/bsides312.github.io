// Builds the Schema.org Event JSON-LD object for BSides312.
// Runs server-side only — do not import from client code.
//
// BSides312's next event is confirmed for Spring 2027, but no exact date has
// been set yet. schema.org/Google Event rich results require a real ISO
// startDate, and Google excludes past-dated events from rich results anyway —
// so this returns null until an exact 2027 date is confirmed. See git history
// (commit prior to this one) for the full Event object shape, including the
// Sessionize-backed subEvent/session logic and ticket Offers, to restore once
// a date and ticket link exist.
export async function buildEventSchema(): Promise<object | null> {
	return null;
}
