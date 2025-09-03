<script setup lang="ts">
import { NuxtPage } from '#components';
import Header from './components/Header.vue';

</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col items-center mx-24">
      <NuxtPage />
    </div>
  </div>
</template>
