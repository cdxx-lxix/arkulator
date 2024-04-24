<template>
    <div>
        <input type="checkbox" :id v-model="boxValue" class="hidden peer" :disabled>
        <label :for="id"
            class="inline-flex items-center justify-center w-full h-full p-2 border-2 rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:border-blue-ribbon-700 peer-checked:bg-blue-ribbon-700/30 peer-checked:text-gray-300 text-gray-200 hover:bg-gray-700"
            :class="disabled ? 'bg-gray-400 pointer-events-none' : 'bg-gray-800'">
            <div class="block">
                <slot />
                <div class="w-full text-lg font-semibold">{{ $t(label) }}</div>
            </div>
        </label>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'id',
    'disabled'
])
const boxValue = defineModel('boxvalue', { required: true })

</script>

