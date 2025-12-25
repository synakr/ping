import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const { email, password } = await request.json();

	if (!email || !password) {
		throw error(400, 'Email and password required');
	}

	const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => cookies.get(key),
			set: (key, value, options) => cookies.set(key, value, { path: '/', ...options }),
			remove: (key, options) => cookies.delete(key, { path: '/', ...options })
		}
	});

	const { error: authError } = await supabase.auth.signUp({
		email,
		password
	});

	if (authError) {
		throw error(400, authError.message);
	}

	// cookies may or may not be set depending on email confirmation
	return new Response(null, { status: 201 });
};
