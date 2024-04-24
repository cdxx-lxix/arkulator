<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("calculations.advanced.header") }}</h2>
    <ArkStat text="calculations.advanced.infinite"
                                :stat="advancedStore.getUserOrundumInfiniteBuyout()"
                                :condition="advancedStore.user_data.is_phase_three" icon="orundum" />
    <!-- <ArkStat text="calculations.advanced.greenshop"
                                :stat="advancedStore.getUserPullsFromGreenShopStrategy(getMonths, getWeeks, getDays, range.start, range.end)"
                                :condition="!advancedStore.user_data.is_included_gcs" icon="orundum" /> -->
</template>

<script setup>
import { useAdvancedStore } from '~/stores/advanced';
const advancedStore = useAdvancedStore();
const props = defineProps([
    'days',
    'start'
])
</script>