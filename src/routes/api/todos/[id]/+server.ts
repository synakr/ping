import type { RequestHandler } from '@sveltejs/kit';
import { prisma } from '$lib/prisma';
import { error, json } from '@sveltejs/kit';

export const DELETE: RequestHandler = async ({ params, locals }) => {
	if (!locals.user) {
		throw error(401, 'Unauthorized');
	}

	await prisma.todo.update({
		where: { id: params.id },
		data: { deletedAt: new Date() }
	});

	return json({ success: true });
};
