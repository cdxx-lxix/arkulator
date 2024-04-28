<template>
    <ArkFrame legend="advanced.header">
        <ArkFrameHelp description="advanced.subtext" :isbutton="true" modalid="advanced-help" />
        <div class="grid grid-cols-4 px-6 gap-4 mb-4">
            <ArkFancyCheckbox label="advanced.gcs" id="green-shop"
                v-model:boxvalue="advancedStore.user_data.is_included_gcs" variant="sqr">
                <GreenCertIcon />
            </ArkFancyCheckbox>
            <div class="flex flex-col justify-between">
                <ArkInput class="w-full" id="currentgreencerts" min="0"
                    v-model:inputvalue="advancedStore.user_data.gcs_current_certs" label="advanced.greens"
                    :disabled="!advancedStore.user_data.is_included_gcs">
                    <GreenCertIcon class="w-6 h-6" />
                </ArkInput>
                <ArkInput class="w-full" id="currentrecruits" min="0"
                    v-model:inputvalue="advancedStore.user_data.gcs_recruitment" label="advanced.recruits"
                    :disabled="!advancedStore.user_data.is_included_gcs || advancedStore.user_data.is_phase_three">
                    <RecruitPermitIcon class="w-6 h-6" />
                </ArkInput>
            </div>
            <div class="flex flex-col justify-between">
                <ArkDropdown label="advanced.strategy"
                    v-model:selectvalue="advancedStore.user_data.gcs_selected_strategy"
                    :options="advancedStore.user_recruitment_strategies"
                    :disabled="!advancedStore.user_data.is_included_gcs || advancedStore.user_data.is_phase_three" />
                <ArkDropdown label="advanced.phase" v-model:selectvalue="advancedStore.user_data.gcs_selected_plan"
                    :options="advancedStore.user_gcs_phases"
                    :disabled="!advancedStore.user_data.is_included_gcs || advancedStore.user_data.is_phase_three" />
            </div>
            <ArkFancyCheckbox label="advanced.infinite" id="green-infinity"
                :disabled="!advancedStore.user_data.is_included_gcs"
                v-model:boxvalue="advancedStore.user_data.is_phase_three" variant="sqr" >
                <InfinityIcon class="fill-[#a9cf38]" />
            </ArkFancyCheckbox>
        </div>
        <div class="grid grid-cols-4 px-6 gap-4 items-center mb-4">
            <ArkFancyCheckbox label="advanced.ycs" id="yellow-shop"
                v-model:boxvalue="advancedStore.user_data.is_included_ycs" variant="rect">
                <YellowCertIcon class="w-8 h-8" />
            </ArkFancyCheckbox>
            <ArkInput class="w-full" id="currentyellowcerts" min="0"
                v-model:inputvalue="advancedStore.user_data.ycs_current_certs" label="advanced.yellows"
                :disabled="!advancedStore.user_data.is_included_ycs">
                <YellowCertIcon class="w-6 h-6" />
            </ArkInput>
            <ArkCheckbox label="advanced.ycsrecs" id="yellow-recruitment"
                :disabled="!advancedStore.user_data.is_included_ycs || !advancedStore.user_data.gcs_selected_strategy"
                v-model:boxvalue="advancedStore.user_data.is_included_ycs_recruitment" />
            <ArkDropdown label="advanced.ycsbuys" v-model:selectvalue="advancedStore.user_data.ycs_phase"
                :options="advancedStore.user_ycs_phases" :disabled="!advancedStore.user_data.is_included_ycs" />
        </div>
        <div class="grid grid-cols-4 px-6 gap-4 items-center mb-3">
            <ArkFancyCheckbox label="advanced.rerun" id="rerun-shop"
                v-model:boxvalue="advancedStore.user_data.is_included_rerun" variant="rect">
                <RerunCertIcon class="w-8 h-8" />
            </ArkFancyCheckbox>
            <ArkInput class="w-full" id="currentreruncerts" min="0"
                v-model:inputvalue="advancedStore.user_data.rerun_current_certs" label="advanced.reruncerts"
                :disabled="!advancedStore.user_data.is_included_rerun">
                <RerunCertIcon class="w-6 h-6" />
            </ArkInput>
            <ArkInput class="w-full" id="currentstock" min="0"
                v-model:inputvalue="advancedStore.user_data.rerun_orundum_stock" label="advanced.rerunstock"
                :disabled="!advancedStore.user_data.is_included_rerun">
                <OrundumIcon class="w-6 h-6" />
            </ArkInput>
            <ArkInput class="w-full" id="rerunsexpected" min="0"
                v-model:inputvalue="advancedStore.user_data.rerun_encounters" label="advanced.rerunencounters"
                :disabled="!advancedStore.user_data.is_included_rerun">
                <RerunIcon class="w-6 h-6" />
            </ArkInput>
        </div>
    </ArkFrame>
</template>

<script setup>
import { useAdvancedStore } from '~/stores/advanced';
const advancedStore = useAdvancedStore();

</script>