import type { Handle } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const handle: Handle = async ({ event, resolve }) => {
	// cookie-based auth
	// creating a server-side Supabase client (request-scoped)
	const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) =>
				event.cookies.set(key, value, {
					path: '/',
					...options
				}),
			remove: (key, options) =>
				event.cookies.delete(key, {
					path: '/',
					...options
				})
		}
	});
	console.log('HOOK EXECUTED');
	const { data } = await supabase.auth.getUser();
	event.locals.user = data.user ?? null;

	return resolve(event);
};
