<template>
    <div class="mx-auto flex flex-col h-full justify-end">
        <label :for="id" class="block mb-2 text-sm font-medium text-white">{{ $t(label) }}</label>
        <div class="flex">
            <span v-if="$slots.default"
                class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                <slot />
            </span>
            <input type="text" :id :min :max :step
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
    'max',
    'step',
    'disabled'
])
const inputValue = defineModel('inputvalue', { required: true })

watch(inputValue, (newValue, oldValue) => {
    // These 2 lines ensures that values become numbers & remove leading zeros
    oldValue = Number(oldValue)
    newValue = Number(newValue)
    if (newValue === '' && oldValue.toString().length === 1) {
        // This one replaces the last removed character with zero
        inputValue.value = 0
    } else if (typeof newValue == 'string') {
        // This one detects anything unrelated to numbers and reverts to the previous value
        inputValue.value = oldValue;
    } else if (newValue % 1 !== 0) {
        // This one forbids floating point numbers 
        inputValue.value = oldValue;
    } else {
        inputValue.value = newValue
    }
})
</script>

<style scoped>
input:disabled {
    @apply bg-gray-400 text-transparent pointer-events-none;
}
</style>