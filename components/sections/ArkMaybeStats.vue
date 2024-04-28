<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{ $t("calculations.maybe.header") }}</h2>
    <ArkStat class="text-orange-500" text="calculations.maybe.limited" :stat="maybeStore.getLimitedRewards"
        :condition="maybeStore.user_data.is_limited" icon="permit" />
    <ArkStat text="calculations.maybe.lottery" :stat="maybeStore.getLotteryReward()"
        :condition="maybeStore.user_data.is_lottery" icon="orundum" />
    <ArkStat text="calculations.maybe.paradox" :stat="maybeStore.getParadoxReward"
        :condition="maybeStore.user_data.potential_paradoxes" icon="orundum" />
    <ArkStat text="calculations.maybe.events" :stat="maybeStore.getNewEventRewards"
        :condition="maybeStore.user_data.potential_events" icon="permit" />
    <ArkStat text="calculations.maybe.newannih" :stat="maybeStore.getAnnihilationFirstTimeRewards"
        :condition="maybeStore.user_data.potential_annihilations" icon="orundum" />
    <ArkStat text="calculations.maybe.shards" :stat="maybeStore.getShardsForFarm"
        :condition="maybeStore.user_data.potential_shards_daily" icon="orundum" />
</template>

<script setup>
import { useMaybeStore } from '~/stores/maybe';
const maybeStore = useMaybeStore();


</script>