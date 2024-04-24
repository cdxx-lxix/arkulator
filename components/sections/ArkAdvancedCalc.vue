<template>
    <ArkFrame legend="advanced.header">
        <ArkFrameHelp description="advanced.subtext" :isbutton="true" modalid="advanced-help" />
        <div class="grid grid-cols-4 px-6 gap-4">
            <ArkFancyCheckbox label="advanced.gcs" id="green-shop"
                v-model:boxvalue="advancedStore.user_data.is_included_gcs">
                <GreenCertIcon />
            </ArkFancyCheckbox>
            <div class="flex flex-col justify-between">
                <ArkInput class="w-full" id="currentgreencerts" min="0"
                    v-model:inputvalue="advancedStore.user_data.gcs_current_certs" label="advanced.greens">
                    <GreenCertIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currentrecruits" min="0"
                    v-model:inputvalue="advancedStore.user_data.gcs_recruitment" label="advanced.recruits">
                    <RecruitPermitIcon class="w-6 h-6" />
                </ArkInput>
            </div>
            <div class="flex flex-col justify-between">
                <ArkDropdown label="advanced.strategy" :options="advancedStore.user_recruitment_strategies" />
                <ArkDropdown label="advanced.phase" :options="advancedStore.user_gcs_phases" />
            </div>
            <ArkFancyCheckbox label="advanced.infinite" id="green-infinity"
                v-model:boxvalue="advancedStore.user_data.is_phase_three">
                <InfinityIcon class="fill-[#a9cf38]" />
            </ArkFancyCheckbox>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useAdvancedStore } from '~/stores/advanced';
const advancedStore = useAdvancedStore();
const props = defineProps([
    'days',
    'start'
])
</script>