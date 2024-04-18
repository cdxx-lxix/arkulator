<template>
    <div class="flex flex-col mb-4">
        <label :for="id" class="flex flex-row mb-3 text-sm font-medium text-white">{{ $t(label) }}:<span class="font-bold ml-1">{{ rangeValue }}</span></label>
        <input :id :min :max :step type="range"
            class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
            v-model="rangeValue">
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'id',
    'min',
    'max',
    'step'
])
const rangeValue = defineModel('rangevalue', { required: true })
</script>