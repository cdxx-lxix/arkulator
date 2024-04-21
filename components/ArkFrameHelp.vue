<template>
    <template v-if="isbutton">
        <div class="mb-4 px-6 w-full flex flex-row justify-between">
            <p class="text-white">{{ $t(description) }}</p>
            <button class="text-red-700">?</button>
        </div>
    </template>
    <template v-else>
        <p class="text-white mb-4 px-6 w-full">{{ $t(description) }}</p>
    </template>
</template>

<script setup>
const props = defineProps([
    'description',
    'isbutton'
])
</script>