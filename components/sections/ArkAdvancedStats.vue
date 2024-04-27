<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("calculations.advanced.header") }}</h2>
    <ArkStat text="calculations.advanced.infinite" :stat="advancedStore.getUserOrundumInfiniteBuyout()"
        :condition="advancedStore.user_data.is_phase_three" icon="orundum" />
    <ArkStat text="calculations.advanced.greenshoporundum" :stat="advancedStore.getPermitsAndOrundumByPage().orundum"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three"
        icon="orundum" />
    <ArkStatDetailed text="calculations.advanced.greenshoppermits"
        :stat="advancedStore.getPermitsAndOrundumByPage().permits"
        :condition="advancedStore.user_data.is_included_gcs && !advancedStore.user_data.is_phase_three" icon="permit"
        :details="greenShopDetails" />
    <ArkStatDetailed text="calculations.advanced.yellowshoppermits" :stat="advancedStore.getPermitsByYellowShopPhase"
        :condition="advancedStore.user_data.is_included_ycs" icon="permit" :details="yellowShopDetails" />
    <ArkStat text="calculations.advanced.rerunshop" :stat="advancedStore.getOrundumForReruns"
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
        { name: "User's GCs", amount: advancedStore.user_data.gcs_current_certs },
        { name: "Recruitment GCs", amount: recs },
        { name: "Weekly rewards GCs", amount: weeklies },
        { name: "Login on 11th day", amount: logins },
    ]
})

const yellowShopDetails = computed(() => {
    let recs = advancedStore.getYellowCertsForRecruitment()
    let logins = advancedStore.getUserYellowCertsForLogin()
    return [
        { name: "User's YCs", amount: advancedStore.user_data.ycs_current_certs },
        { name: "Recruitment YCs", amount: recs },
        { name: "Login on 25th day", amount: logins },
    ]
})
</script>