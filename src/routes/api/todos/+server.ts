import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';
import { json, error } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
	console.log('USER:', locals.user);

	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}

	const { title } = await request.json();

	if (!title || title.trim() === '') {
		throw error(400, 'Title is required');
	}

	const todo = await prisma.todo.create({
		data: {
			title,
			userId: locals.user.id
		}
	});

	return json(todo, { status: 201 });
};
