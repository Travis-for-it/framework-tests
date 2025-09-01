<template>
    <div>
        <a href="/">TOP</a>
        <br />
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
            {{ locale.name }}
        </NuxtLink>
        <h1>{{ $t('title.text') }}</h1>
    </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})


</script>

<style scoped>

</style>