<template>
    <div class="flex justify-between">
        <a href="/">
            <NuxtImg
                src="/images/logo_webridge_afb.svg"
                loading="eager"
                fetch-priority="high"
                width="200"
            />
        </a>
        <br />
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
           to: {{ locale.name }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'


const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})


</script>

<style scoped>

</style>