<template>
    <div class="max-w-sm mx-auto">
        <label class="block mb-2 text-sm font-medium text-transparent outline-none select-none">Nope</label>
        <div class="flex">
            <span
                class="inline-flex items-center px-3 text-sm border border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                <input :id type="checkbox" v-model="boxValue" :disabled class="w-6 h-6">
            </span>
            <label :for="id"
                class="rounded-none rounded-e-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 text-white outline-none select-none">{{
                $t(label) }}</label>
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