<script lang="ts">
	let email = '';
	let password = '';
	let errorMsg = '';
	let successMsg = '';

	async function signup() {
		errorMsg = '';
		successMsg = '';

		const res = await fetch('/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ email, password }),
			credentials: 'include'
		});

		if (!res.ok) {
			errorMsg = await res.text();
			return;
		}

		successMsg = 'Signup successful. Check your email if verification is enabled.';
	}
</script>

<h1>Signup</h1>

<form on:submit|preventDefault={signup}>
	<input type="email" bind:value={email} required />
	<input type="password" bind:value={password} required />
	<button type="submit">Signup</button>
</form>

{#if errorMsg}
	<p>{errorMsg}</p>
{/if}

{#if successMsg}
	<p>{successMsg}</p>
{/if}
