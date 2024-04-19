<template>
    <div class="flex mb-4">
        <div class="flex items-center h-5">
            <input :id type="checkbox" v-model="boxValue" :disabled
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
        </div>
        <div class="ms-2 text-sm">
            <label :for="id" class="font-semibold text-gray-300">{{ $t(label) }}</label>
            <p v-if="help" :id="`${id}-help`" class="text-xs font-normal text-gray-500">{{ $t(help) }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'help',
    'id',
    'disabled'
])
const boxValue = defineModel('boxvalue', { required: true })
</script>