<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{
        $t("calculations.guaranteed.header") }}</h2>
    <ArkStat text="calculations.guaranteed.orundums" :stat="pullStore.user_data.current_orundums"
        :condition="pullStore.user_data.current_orundums" icon="orundum" />
    <ArkStat text="calculations.guaranteed.permits" :stat="pullStore.user_data.current_permits"
        :condition="pullStore.user_data.current_permits" icon="permit" />
    <ArkStat text="calculations.guaranteed.prime" :stat="pullStore.getUserPrimeToOrundum()"
        :condition="pullStore.user_data.current_prime" icon="orundum" />
    <ArkStat text="calculations.guaranteed.shards" :stat="pullStore.getUserShardsToOrundum()"
        :condition="pullStore.user_data.current_shards" icon="orundum" />
    <ArkStat text="calculations.guaranteed.daily" :stat="pullStore.getUserDailyRewards(days)"
        :condition="days > 0" icon="orundum" />
    <ArkStat text="calculations.guaranteed.weekly" :stat="pullStore.getUserWeeklyRewards(weeks)"
        :condition="weeks > 0" icon="orundum" />
    <ArkStat text="calculations.guaranteed.subscription" :stat="pullStore.getUserMonthlyCardRewards(days)"
        :condition="pullStore.user_data.is_monthly_card_active" icon="orundum" />
    <ArkStat text="calculations.guaranteed.annihilation" :stat="pullStore.getUserAnnihilationRewards(weeks)"
        :condition="weeks > 0" icon="orundum" />
    <ArkStat text="calculations.guaranteed.loginpermit" :stat="pullStore.user_data.login_permits_in_range"
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