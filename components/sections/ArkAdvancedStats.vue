<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("calculations.advanced.header") }}</h2>
    <ArkStat text="calculations.advanced.infinite" :stat="advancedStore.getUserOrundumInfiniteBuyout()"
        :condition="advancedStore.user_data.is_phase_three" icon="orundum" />
    <ArkStat text="calculations.advanced.greenshoporundum" :stat="advancedStore.getPermitsAndOrundumByPage().orundum"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three"
        icon="orundum" />
    <ArkStat text="calculations.advanced.greenshoppermits" :stat="advancedStore.getPermitsAndOrundumByPage().permits"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three" icon="permit" />
    <ArkStat text="calculations.advanced.yellowshoppermits" :stat="advancedStore.getPermitsByYellowShopPhase()"
        :condition="advancedStore.user_data.is_included_ycs" icon="permit" />
</template>

<script setup>
import { useAdvancedStore } from '~/stores/advanced';
const advancedStore = useAdvancedStore();

</script>