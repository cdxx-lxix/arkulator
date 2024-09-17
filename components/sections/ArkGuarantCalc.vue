<template>
    <ArkFrame legend="guaranteed.header">
        <ArkFrameHelp description="guaranteed.subtext" :isbutton="true" modalid="guaranteed-help" />
        <div class="grid grid-cols-1 sm:grid-cols-4 px-2 sm:px-6 gap-4 mb-3 flex-grow-1">
            <div class="col-span-1">
                <ArkFancyCheckbox label="guaranteed.monthlycard" id="monthlycard"
                    v-model:boxvalue="pullStore.user_data.is_monthly_card_active" variant="sqr">
                    <MonthlyCardIcon class="sm:w-full" />
                </ArkFancyCheckbox>
            </div>
            <div class="grid grid-cols-2 gap-2 mb-3 sm:col-span-3">
                <ArkInput class="w-full" id="currentorundum" min="0"
                    v-model:inputvalue="pullStore.user_data.current_orundums" label="guaranteed.currentorundum">
                    <OrundumIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currenpermits" min="0"
                    v-model:inputvalue="pullStore.user_data.current_permits" label="guaranteed.currentpermits">
                    <PermitIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="opsacrifice" min="0" v-model:inputvalue="pullStore.user_data.current_prime"
                    label="guaranteed.currentprime">
                    <OPIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currentshards" min="0"
                    v-model:inputvalue="pullStore.user_data.current_shards" label="guaranteed.currentshards">
                    <OShardIcon class="w-6 h-6" />
                </ArkInput>
                <ArkRange class="col-span-2" v-model:rangevalue="pullStore.user_data.current_annihilation_reward"
                    label="guaranteed.annihilation" min="1200" max="1800" step="50" />
            </div>
        </div>
    </ArkFrame>
</template>

<script setup>
import { usePullsStore } from '#imports';
const pullStore = usePullsStore()
</script>