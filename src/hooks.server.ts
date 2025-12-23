import type { Handle } from '@sveltejs/kit';
import { supabase } from '$lib/supabase.server';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('🔥 HOOK EXECUTED');

	const authHeader = event.request.headers.get('authorization');

	if (authHeader && authHeader.startsWith('Bearer ')) {
		const token = authHeader.replace('Bearer ', '');

		const { data, error } = await supabase.auth.getUser(token);

		if (error) {
			console.error('Auth error:', error.message);
			event.locals.user = null;
		} else {
			event.locals.user = data.user;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
