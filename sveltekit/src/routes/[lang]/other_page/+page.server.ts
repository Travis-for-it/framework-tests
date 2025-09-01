import { locales } from '$lib/paraglide/runtime';

export const entries = () => {
    // This is the crucial part for static generation.
    // We tell SvelteKit to generate a page for each available language.
    return locales.map(lang => ({ lang }));
};

export const prerender = true;