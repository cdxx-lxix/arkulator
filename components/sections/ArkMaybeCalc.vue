<template>
    <ArkFrame legend="maybe.header">
        <ArkFrameHelp description="maybe.subtext" :isbutton="true" modalid="maybe-help" />
        <div class="w-full px-2 sm:px-6">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3 w-full max-h-64">
                <ArkInput class="w-full" id="paradoxes" min="0" label="maybe.paradox"
                    v-model:inputvalue="maybeStore.user_data.potential_paradoxes">
                    <ParadoxIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="newannihilations" min="0" label="maybe.newannih"
                    v-model:inputvalue="maybeStore.user_data.potential_annihilations">
                    <AnnihilationIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="shards daily" min="0" label="maybe.shards"
                    v-model:inputvalue="maybeStore.user_data.potential_shards_daily">
                    <OShardIcon class="w-6 h-6" />
                </ArkInput>
            </div>
            <hr class="mt-3">

            <div class="mt-3 text-lg">
                {{ $t('maybe.sequence') }}
            </div>

            <div class="mt-3">
                <div class="flex flex-row items-center justify-center gap-3"
                    v-for="entry, index in maybeStore.user_data.event_stack" :key="index">
                    <div class="w-full grid sm:grid-cols-6 gap-3 mb-2 border-b border-white/30 pb-2">
                        <div class="sm:col-span-2">
                            <label class="block mb-2 text-sm font-medium text-white">#{{ index + 1 }} {{
                                $t('maybe.event_name') }}</label>
                            <input type="text" v-model="entry.event_name" maxlength="50"
                                class="rounded-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 text-white outline-none">
                        </div>
                        <ArkDropdown class="sm:col-span-2" label="maybe.event_type" :options="maybeStore.EVENT_TYPES"
                            v-model:selectvalue="entry.event_type" />
                        <ArkInput class="w-full sm:col-span-2" min="0" v-model:inputvalue="entry.event_op"
                            label="maybe.use_op" :disabled="entry.event_type === 40">
                            <OPIcon class="w-6 h-6" />
                        </ArkInput>
                        <ArkCheckbox label="maybe.lottery" class="sm:col-span-3" v-model:boxvalue="entry.is_lottery"
                            :disabled="entry.event_type !== 20" />
                        <ArkCheckbox label="maybe.free_pulls" class="sm:col-span-3" v-model:boxvalue="entry.is_free_pulls"
                            :disabled="entry.event_type === 20 ? false : entry.event_type === 30 ? false : true" />
                    </div>
                    <div>
                        <button id="remove-from-sequence" aria-label="Remove Event From Sequence"
                            class="col-span-1 row-span-2 flex justify-center flex-col items-center h-full cursor-default">
                            <RemoveButtonIcon @click="removeEntry(index)"
                                class="w-6 h-6 mt-3 fill-blue-ribbon-700 hover:fill-red-600 ark-smooth-animation cursor-pointer" />
                        </button>
                    </div>
                </div>

                <button
                    class="flex justify-center items-center w-full py-2 rounded-lg ark-smooth-animation hover:bg-blue-ribbon-700 fill-blue-ribbon-700 hover:fill-white"
                    @click="addNewEntry" id="add-event-to-sequence" aria-label="Add New Event To Sequence">
                    <AddButtonIcon class="w-6 h-6 " />
                </button>
            </div>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useMaybeStore } from '~/stores/maybe';
const maybeStore = useMaybeStore();

const addNewEntry = () => {
    return maybeStore.user_data.event_stack.push({ event_name: `Event ${maybeStore.user_data.event_stack.length + 1}`, event_type: 0, is_free_pulls: false, is_lottery: false, event_op: 0 })
}

const removeEntry = (index) => {
    if (maybeStore.user_data.event_stack.length >= 0) {
        return maybeStore.user_data.event_stack.splice(index, 1)
    } else {
        return
    }
}
</script>