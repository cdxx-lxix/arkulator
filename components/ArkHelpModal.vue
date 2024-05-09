<template>
    <div v-show="showmodal" :id="modalid"
        class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-2xl max-h-full">
            <div class="relative rounded-lg shadow bg-gray-700">

                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                    <h3 class="text-xl font-semibold text-white">
                        {{ $t("help.modaltitle") }}
                    </h3>
                    <button type="button" @click="showmodal = false"
                        class="text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                        data-modal-hide="default-modal">
                        <CloseButtonIcon class="w-3 h-3" />
                    </button>
                </div>

                <div class="p-4 md:p-5 space-y-4">
                    <ModalHelpGuarant v-if="modalid == 'guaranteed-help'" />
                </div>

                <div class="flex justify-center p-4 md:p-5 border-t rounded-b border-gray-600">
                    <button type="button" @click="showmodal = false"
                        class="text-white w-1/4 font-semibold rounded-lg text-sm px-5 py-2.5 text-center bg-blue-ribbon-700 hover:bg-blue-ribbon-950">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'modalid',
    'title',
    'description'
])
const showmodal = defineModel('showmodal', { required: true })
</script>