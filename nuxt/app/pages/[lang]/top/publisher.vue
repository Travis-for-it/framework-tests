<template>
  <div>
    <h1>Locale: {{ route.params.lang }}</h1>
    <p>{{ $t('publisher.text') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from '#app'; 

const route = useRoute();
</script>