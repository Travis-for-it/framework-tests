<template>
    <div>
        <h1 class="3xl">THIS IS THE HOME PAGE</h1>
         <br />
         <NuxtLink :to="localePath('lang-top-publisher')">publisher page</NuxtLink>
         <br />
    </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

</script>

<style scoped>

</style>
