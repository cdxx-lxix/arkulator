<template>
    <div class="mx-auto flex flex-col h-full justify-end">
        <label v-if="label" :for="id" class="block mb-2 text-sm font-medium text-white">{{ $t(label) }}</label>
        <div class="flex">
            <span v-if="$slots.default"
                class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                <slot />
            </span>
            <input type="text" :id :min :step
                class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 text-white outline-none"
                v-model="inputValue" :disabled @input="filterInput" :class="!$slots.default ? 'rounded-s-lg' : ''">
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'help',
    'id',
    'min',
    'step',
    'disabled'
])
const inputValue = defineModel('inputvalue', { required: true })

watch(inputValue, (newValue, oldValue) => {
    // Convert values to numbers once
    const newNum = Number(newValue)
    const oldNum = Number(oldValue)
    
    // Early return if new value exceeds maximum
    if (newNum > 100000000) {
        inputValue.value = oldNum
        return
    }

    // Handle empty input and prevent negative
    if (newValue === '' && oldNum.toString().length === 1) {
        inputValue.value = 0
        return
    }

    // Validate input - check if it's not a valid whole number or is NaN
    if (!Number.isInteger(newNum) || isNaN(newNum)) {
        inputValue.value = oldNum
        return
    }

    inputValue.value = newNum
})
</script>

<style scoped>
input:disabled {
    @apply bg-gray-400 text-transparent pointer-events-none;
}
</style>