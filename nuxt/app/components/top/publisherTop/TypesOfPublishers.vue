<template>
    <div class="mx-24">
        <div class="text-center">
            <h1 class="text-3xl">{{ $t('publisher_top.types_of_publishers.heading') }}</h1>
            <h2>{{ $t('publisher_top.types_of_publishers.sub_heading') }}</h2>
        </div>
        <div class="flex justify-around mt-16">
            <button @click="setIsActive('affiliate')" :class="{'active': isActive === 'affiliate'}">{{ $t('publisher_top.types_of_publishers.affiliate.name') }}</button>
            <button @click="setIsActive('influencer')" :class="{'active': isActive === 'influencer'}">{{ $t('publisher_top.types_of_publishers.influencer.name') }}</button>
        </div>
        <div>
            <TypesOfPublishersTabContent v-show="isActive === 'affiliate'" 
                :-type-name="$t('publisher_top.types_of_publishers.affiliate.name')"
                :-image="AffiliateImg"
                :-perfect-for-one="$t('publisher_top.types_of_publishers.affiliate.perfect_for_one')"
            />
            <TypesOfPublishersTabContent v-show="isActive === 'influencer'" 
                :-type-name="$t('publisher_top.types_of_publishers.influencer.name')"
                :-image="InfluencerImg"
                :-perfect-for-one="$t('publisher_top.types_of_publishers.influencer.perfect_for_one')"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import TypesOfPublishersTabContent from './TypesOfPublishersTabContent.vue'
import InfluencerImg from '/images/influencers.svg'
import AffiliateImg from '/images/affiliate.svg'

const isActive = ref<string>('influencer')

const setIsActive = (val: string) => {
    isActive.value = val
}

</script>

<style scoped>
    .active {
        color: green;
    }
</style>