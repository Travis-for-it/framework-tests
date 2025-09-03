<template>
  <div class="bg-gray-100 mt-20">
    <div class="mb-40 mx-8 py-12">
      <Accordion class="mb-4" :question="$t('publisher_top.faq.signup.question')" :content="$t('publisher_top.faq.signup.content')"/>
    </div>
  </div>
</template>

<script setup>
import Accordion from '~/components/Accordion.vue';
</script>