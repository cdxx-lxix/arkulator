<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("advanced.calculations.header") }}</h2>
    <ArkStat text="advanced.calculations.infinite" :stat="advancedStore.getUserOrundumInfiniteBuyout()"
        :condition="advancedStore.user_data.is_phase_three" icon="orundum" />
    <ArkStat text="advanced.calculations.greenshoporundum" :stat="advancedStore.getPermitsAndOrundumByPage().orundum"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three"
        icon="orundum" />
    <ArkStatDetailed text="advanced.calculations.greenshoppermits"
        :stat="advancedStore.getPermitsAndOrundumByPage().permits"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three" icon="permit"
        :details="greenShopDetails" />
    <ArkStatDetailed text="advanced.calculations.yellowshoppermits" :stat="advancedStore.getPermitsByYellowShopPhase"
        :condition="advancedStore.user_data.is_included_ycs" icon="permit" :details="yellowShopDetails" />
    <ArkStat text="advanced.calculations.rerunshop" :stat="advancedStore.getOrundumForReruns"
        :condition="advancedStore.user_data.is_included_rerun"
        icon="orundum" />
</template>

<script setup>
import { useAdvancedStore } from '~/stores/advanced';
const advancedStore = useAdvancedStore();

const greenShopDetails = computed(() => {
    let recs = advancedStore.getGreenCertsForRecruitment()
    let weeklies = advancedStore.getUserGreenCertsWeekly()
    let logins = advancedStore.getUserGreenCertsForLogin()
    return [
        { name: "advanced.calculations.detailed.user_gc", amount: advancedStore.user_data.gcs_current_certs },
        { name: "advanced.calculations.detailed.recruit_gc", amount: recs },
        { name: "advanced.calculations.detailed.weekly_gc", amount: weeklies },
        { name: "advanced.calculations.detailed.login_gc", amount: logins },
    ]
})

const yellowShopDetails = computed(() => {
    let recs = advancedStore.getYellowCertsForRecruitment()
    let logins = advancedStore.getUserYellowCertsForLogin()
    return [
        { name: "advanced.calculations.detailed.user_gc", amount: advancedStore.user_data.ycs_current_certs },
        { name: "advanced.calculations.detailed.recruit_gc", amount: recs },
        { name: "advanced.calculations.detailed.login_gc", amount: logins },
    ]
})
</script>