<script>
    import { m } from '$lib/paraglide/messages.js';
    import { getLocale } from '$lib/paraglide/runtime';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href="/demo">demo</a>
<p>{m.hello_world({name: "User"})}</p>
<a href={`/${getLocale()}/other_page`}>{m.other_page()}</a>
