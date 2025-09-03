<script setup lang="ts">
import { NuxtPage } from '#components';
import Header from './components/Header.vue';

</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col items-center">
      <NuxtPage />
    </div>
  </div>
</template>
