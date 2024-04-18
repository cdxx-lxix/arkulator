<template>
    <div class="max-w-sm mx-auto">
        <label :for="id" class="block mb-2 text-sm font-medium text-white">{{ $t(label) }}</label>
        <div class="flex">
            <span
                class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                <slot />
            </span>
            <input type="number" :id :min :max :step
                class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
                v-model="inputValue" :disabled>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'help',
    'id',
    'min',
    'max',
    'step',
    'disabled'
])
const inputValue = defineModel('inputvalue', { required: true })
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type="number"] {
    -moz-appearance: textfield;
}

input:disabled {
    @apply bg-gray-400 text-transparent pointer-events-none;
}
</style>