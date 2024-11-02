<template>
    <template v-if="isbutton">
        <div class="mb-4 px-2 sm:px-6 w-full flex flex-row justify-between">
            <p class="text-white pr-4">{{ $t(description) }}</p>
            <button @click="showModal">
                <HelpButtonIcon class="w-6 h-6 ark-svg-button-fill ark-smooth-animation" />
            </button>
        </div>
        <ArkHelpModal :modalid v-model:showmodal="isModal" />
    </template>
    <template v-else>
        <p class="text-white mb-4 px-6 w-full">{{ $t(description) }}</p>
    </template>
</template>

<script setup>
const props = defineProps([
    'description',
    'isbutton',
    'modalid'
])
const isModal = ref(false)
const showModal = () => {
    isModal.value = !isModal.value
}
</script>