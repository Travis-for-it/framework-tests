<template>
    <div>
        Index page
         <NuxtLink to="/about">about</NuxtLink>
         <br />
         <NuxtLink :to="localePath('lang-top-publisher')">publisher</NuxtLink>
         <br />
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>

<style scoped>

</style>
