<template>
    <div class="flex justify-between">
        <div>
            <h2>{{ typeName }}</h2>
            <h3>{{ perfectFor }}:</h3>
            <p>{{ perfectForOne }}</p>
        </div>
        <div>
            <img
                :src="typeImg"
            />
        </div>
    </div>
</template>

<script setup lang="ts">

interface Props {
    typeName: string;
    typeImg: string;
    perfectFor: string
    perfectForOne: string;
}

const props = defineProps<Props>()

</script>

<style scoped>

</style>