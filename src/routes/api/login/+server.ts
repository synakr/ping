import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);

export const POST: RequestHandler = async ({ request }) => {
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

	return json(data.session);
};
