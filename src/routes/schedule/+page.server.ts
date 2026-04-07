import type { PageServerLoad } from './$types';
import { buildEventSchema } from '$lib/server/eventSchema';

export const load: PageServerLoad = async ({ fetch }) => {
	const eventSchema = await buildEventSchema(fetch);
	return { eventSchema };
};
