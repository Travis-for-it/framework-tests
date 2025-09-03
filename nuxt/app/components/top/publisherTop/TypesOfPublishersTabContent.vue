<template>
    <div class="flex justify-between">
        <div>
            <h2>{{ TypeName }}</h2>
            <h3>{{ $t('publisher_top.types_of_publishers.perfect_for') }}:</h3>
            <p>{{ PerfectForOne }}</p>
        </div>
        <div>
            <NuxtImg
                :src="Image"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components';


interface Props {
    TypeName: string;
    Image: string;
    PerfectForOne: string;
}

const props = defineProps<Props>()

</script>

<style scoped>

</style>