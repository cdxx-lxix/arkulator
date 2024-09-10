<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("guaranteed.calculations.header") }}</h2>
    <ArkStat text="guaranteed.calculations.currentorundum" :stat="pullStore.user_data.current_orundums"
        :condition="pullStore.user_data.current_orundums" icon="orundum" />
    <ArkStat text="guaranteed.calculations.currentpermits" :stat="pullStore.user_data.current_permits"
        :condition="pullStore.user_data.current_permits" icon="permit" />
    <ArkStat text="guaranteed.calculations.currentprime" :stat="pullStore.getUserPrimeToOrundum()"
        :condition="pullStore.user_data.current_prime" icon="orundum" />
    <ArkStat text="guaranteed.calculations.currentshards" :stat="pullStore.getUserShardsToOrundum()"
        :condition="pullStore.user_data.current_shards" icon="orundum" />
    <ArkStat text="guaranteed.calculations.daily" :stat="pullStore.getUserDailyRewards(days)"
        :condition="days > 0" icon="orundum" />
    <ArkStat text="guaranteed.calculations.weekly" :stat="pullStore.getUserWeeklyRewards(weeks)"
        :condition="weeks > 0" icon="orundum" />
    <ArkStat text="guaranteed.calculations.monthlycard" :stat="pullStore.getUserMonthlyCardRewards(days)"
        :condition="pullStore.user_data.is_monthly_card_active" icon="orundum" />
    <ArkStat text="guaranteed.calculations.annihilation" :stat="pullStore.getUserAnnihilationRewards(weeks)"
        :condition="weeks > 0" icon="orundum" />
    <ArkStat text="guaranteed.calculations.loginpermit" :stat="pullStore.user_data.login_permits_in_range"
        :condition="pullStore.user_data.login_permits_in_range" icon="permit" />
</template>

<script setup>
import { usePullsStore } from '#imports';

const pullStore = usePullsStore()
const props = defineProps([
    'days',
    'weeks'
])
</script>