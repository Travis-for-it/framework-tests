<template>
    <div class="h-screen">
        <div class="whitespace-pre-line text-center">
            <h1 class="text-4xl">{{ $t('publisher_top.first_view.heading') }}</h1>
            <h2 class="text-2xl">{{ $t('publisher_top.first_view.sub_heading') }}</h2>
        </div>
        <div class="w-full">
            <NuxtImg
                :src="DashboardHeaderMoney"
                loading="eager"
                fetch-priority="high"
                class="mx-auto"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';
import DashboardHeaderMoney from '/images/dashboard-header-money.svg'
</script>

<style scoped>

</style>