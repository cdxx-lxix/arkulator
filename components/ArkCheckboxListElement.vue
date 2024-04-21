<template>
    <li class="w-full border-b rounded-t-lg border-gray-600">
        <div class="flex items-center ps-3">
            <input :id type="checkbox" v-model="boxValue" :disabled
                class="w-4 h-4 text-blue-600 rounded bg-gray-600 border-gray-500">
            <label :for="id" class="w-full py-3 ms-2 text-sm font-medium text-gray-300">{{ $t(label) }}</label>
        </div>
    </li>
</template>

<script setup>
const props = defineProps([
    'label',
    'id',
    'disabled'
])
const boxValue = defineModel('boxvalue', { required: true })
</script>