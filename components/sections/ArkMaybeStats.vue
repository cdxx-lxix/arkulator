<template>
    <h2 class="font-semibold text-lg text-center uppercase">{{ $t("maybe.calculations.header") }}</h2>
    <ArkStat text="maybe.calculations.paradox" :stat="maybeStore.getParadoxReward"
        :condition="maybeStore.user_data.potential_paradoxes" icon="orundum" />
    <ArkStat text="maybe.calculations.newannih" :stat="maybeStore.getAnnihilationFirstTimeRewards"
        :condition="maybeStore.user_data.potential_annihilations" icon="orundum" />
    <ArkStat text="maybe.calculations.shards" :stat="maybeStore.getShardsForFarm"
        :condition="maybeStore.user_data.potential_shards_daily" icon="orundum" />
    <ArkStatDetailed v-for="stat in maybeStore.getSequenceRewards.statistics" :text="stat.event"
        :stat="stat.pulls"
        :condition="true" icon="bag"
        :details="stat.details" />
</template>

<script setup>
import { useMaybeStore } from '~/stores/maybe';
const maybeStore = useMaybeStore();
</script>