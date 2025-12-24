<script lang="ts">
	let email = '';
	let password = '';
	let errorMsg = '';

	async function login() {
        errorMsg = '';

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include'
        });

        if (!res.ok) {
            errorMsg = `POST ${res.url} -> ${res.status} ${res.statusText}\n` + (await res.text());
            return;
        }

        window.location.href = '/api/todos';
    }
</script>

<div class="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
	<div class="w-full max-w-md">
		<div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
			<h1 class="text-3xl font-light text-gray-900 mb-8 text-center tracking-tight">
				Login
			</h1>

			<form on:submit|preventDefault={login} class="space-y-6">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700 mb-2">
						Email
					</label>
					<input
						id="email"
						type="email"
						bind:value={email}
						placeholder="your@email.com"
						required
						class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-10 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
					/>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-gray-700 mb-2">
						Password
					</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						placeholder="••••••••"
						required
						class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-10 outline-none transition-all duration-200 text-gray-900 placeholder-gray-400"
					/>
				</div>

				<button 
					type="submit"
					class="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
				>
					Login
				</button>
			</form>

			{#if errorMsg}
				<div class="mt-6 p-4 rounded-lg bg-red-50 border border-red-200">
					<p class="text-sm text-red-800 font-medium">Error occurred</p>
				</div>
			{/if}
		</div>
	</div>
</div>
