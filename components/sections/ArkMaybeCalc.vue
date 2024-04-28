<template>
    <ArkFrame legend="maybe.header">
        <ArkFrameHelp description="maybe.subtext" :isbutton="true" modalid="maybe-help" />
        <div class="grid grid-cols-4 px-6 gap-4 mb-3">
            <ArkCheckbox label="maybe.limitedevent" id="limited-event"
                v-model:boxvalue="maybeStore.user_data.is_limited" />
            <ArkCheckbox label="maybe.lottery" id="orundum-lottery" v-model:boxvalue="maybeStore.user_data.is_lottery"
                :disabled="!maybeStore.user_data.is_limited" />
            <ArkCheckbox label="maybe.anniversary" id="is-anniversary"
                v-model:boxvalue="maybeStore.user_data.is_anniversary" :disabled="!maybeStore.user_data.is_limited" />
            <ArkCheckbox label="maybe.collab" id="is-collab" v-model:boxvalue="maybeStore.user_data.is_collab"
                :disabled="!maybeStore.user_data.is_limited" />

            <ArkInput class="w-full" id="paradoxes" min="0" label="maybe.paradox"
                v-model:inputvalue="maybeStore.user_data.potential_paradoxes">
                <ParadoxIcon class="w-6 h-6" />
            </ArkInput>
            <ArkInput class="w-full" id="newannihilations" min="0" label="maybe.newannih"
                v-model:inputvalue="maybeStore.user_data.potential_annihilations">
                <AnnihilationIcon class="w-6 h-6" />
            </ArkInput>
            <ArkInput class="w-full" id="normal events" min="0" label="maybe.normalevents"
                v-model:inputvalue="maybeStore.user_data.potential_events">
                <EventIcon class="w-6 h-6" />
            </ArkInput>
            <ArkInput class="w-full" id="shards daily" min="0" label="maybe.shards"
                v-model:inputvalue="maybeStore.user_data.potential_shards_daily">
                <OShardIcon class="w-6 h-6" />
            </ArkInput>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useMaybeStore } from '~/stores/maybe';
const maybeStore = useMaybeStore();
</script>