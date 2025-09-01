<script lang="ts">
    import WebridgeLogo from '$lib/assets/logo_webridge_afb.svg'
    import { setLocale, locales, localizeHref } from '$lib/paraglide/runtime';
    import { page } from '$app/stores'

     const currentPathname = $page.url.pathname;

  // The `localizeHref` function takes the current path
  // and a target locale to generate a new, localized URL.
  function getLocalizedLink(locale) {
    return localizeHref(currentPathname, { locale });
  }
</script>

<nav class="flex justify-between mx-8">
    <a href="/">
        <img class="w-40" src={WebridgeLogo} alt="webridge">
    </a>
    {#each locales as lang}
        <a href={getLocalizedLink(lang)}>{lang}</a>
    {/each}
</nav>

