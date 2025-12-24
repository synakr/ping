import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// creating supabase client
	const supabase = createServerClient(PUBLIC_SUPABASE_URL!, PUBLIC_SUPABASE_ANON_KEY!, {
		cookies: {
			get: (key) => cookies.get(key),
			set: (key, value, options) => cookies.set(key, value, { path: '/', ...options }),
			remove: (key, options) => cookies.delete(key, { path: '/', ...options })
		}
	});

	const { email, password } = await request.json();

	if (!email || !password) {
		throw error(400, 'Email and password required');
	}

	const { data, error: authError } = await supabase.auth.signInWithPassword({
		email,
		password
	});

	if (authError) {
		throw error(401, authError.message);
	}

	// return json(data.session);
	return new Response(null, { status: 201 });
};
