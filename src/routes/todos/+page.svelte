<script lang="ts">
	let title = '';
	let errorMsg = '';
	let successMsg = '';
	let successTimer: ReturnType<typeof setTimeout> | null = null;
    import { onMount } from "svelte";
	import { fade } from "svelte/transition";

    // correspons to post request
	async function createTodo() {
		errorMsg = '';
		successMsg = '';

		const res = await fetch('/api/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ title }),
			credentials: 'include'
		});

		if (!res.ok) {
			errorMsg = await res.text();
			return;
		}

		const created = await res.json();
        todos = [created, ...todos];
		title = '';
		successMsg = 'Task created';

		if (successTimer) clearTimeout(successTimer);
        successTimer = setTimeout(() => (successMsg = ''), 2500);
	}

    // corresponding to the get request
    let todos: { id: string; title: string }[] = [];
	let loading = true;

	onMount(async () => {
		try {
			const res = await fetch('/api/todos', {
				credentials: 'include'
			});

			if (!res.ok) {
				errorMsg = await res.text();
				return;
			}

			todos = await res.json();
		} catch {
			errorMsg = 'Failed to load tasks';
		} finally {
			loading = false;
		}
	});

	// corresponding to the delete button/request
	async function deleteTodo(id:any) {
		await fetch(`/api/todos/${id}`, {
			method: 'DELETE',
			credentials: 'include'
		});

		todos = todos.filter(t => t.id !== id);
	}
</script>

<div class="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 px-4 py-12">
	<div class="mx-auto max-w-2xl">
		<div class="bg-white rounded-2xl shadow-sm border border-gray-200">
			<div class="p-8">
				<h1 class="text-3xl font-light text-gray-900 tracking-tight mb-6">Create Task</h1>

				<form on:submit|preventDefault={createTodo} class="flex items-start gap-3">
					<input
						type="text"
						bind:value={title}
						placeholder="Task title"
						required
						class="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-10 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
					/>
					<button
						type="submit"
						class="shrink-0 bg-gray-900 text-white px-5 py-3 rounded-lg font-medium hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
					>
						Add
					</button>
				</form>

				{#if errorMsg}
					<div class="mt-4 p-3 rounded-lg bg-red-50 border border-red-200">
						<p class="text-sm text-red-800">{errorMsg}</p>
					</div>
				{/if}

				{#if successMsg}
                    <div class="fixed top-4 right-4 z-20 pointer-events-none">
                        <div
                            transition:fade
                            class="pointer-events-auto flex items-center gap-2 rounded-xl bg-green-600 text-white shadow-lg px-4 py-3"
                        >
                            <p class="text-sm font-medium">{successMsg}</p>
                        </div>
                    </div>
                {/if}
			</div>

			<div class="px-8 pb-8">
				<h2 class="text-xl font-medium text-gray-900">My Tasks</h2>

				{#if loading}
					<p class="mt-6 text-gray-500">Loading...</p>
				{:else if errorMsg}
					<p class="mt-6 text-red-700">{errorMsg}</p>
				{:else if todos.length === 0}
					<p class="mt-6 text-gray-500">No tasks yet</p>
				{:else}
					<ul class="mt-6 divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden bg-white">
						{#each todos as todo}
							<li class="flex items-center justify-between gap-3 px-4 py-3 text-gray-900">
								<span>{todo.title}</span>
								<button
									on:click={() => deleteTodo(todo.id)}
									class="inline-flex items-center gap-1 rounded-full border border-gray-300 px-3 py-1 text-l text-red-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-1"
								>
									<span>Delete</span>
								</button>
							</li>
						{/each}
					</ul>
				{/if}
			</div>
		</div>
	</div>
</div>