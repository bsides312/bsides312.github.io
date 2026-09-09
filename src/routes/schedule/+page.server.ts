import type { PageServerLoad } from './$types';
import { buildEventSchema } from '$lib/server/eventSchema';

export const load: PageServerLoad = async () => {
	const eventSchema = await buildEventSchema();
	return { eventSchema };
};
