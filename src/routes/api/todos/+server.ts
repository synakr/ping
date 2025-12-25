import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';
import { json, error } from '@sveltejs/kit';

// post request to upload all the tasks
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

// get request to fetch all the tasks
export const GET: RequestHandler = async ({ locals }) => {
	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}

	const todos = await prisma.todo.findMany({
		where: {
			userId: locals.user.id,
			deletedAt: null
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	return json(todos);
};
