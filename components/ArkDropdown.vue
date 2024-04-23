<template>
    <div>
        <label :for="id" class="block mb-2 text-sm font-medium text-white">{{ $t(label) }}</label>
        <select :id v-model="selectValue"
            class="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white">
            <option v-for="option in options" :key="option.value" :value="option.value">{{ $t(option.name) }}</option>
        </select>
    </div>
</template>

<script setup>
const props = defineProps([
    'id',
    'label',
    'options'
])
const selectValue = defineModel('selectvalue', { required: true })
</script>