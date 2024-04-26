<template>
    <template v-if="variant === 'sqr'">
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
    <template v-if="variant === 'rect'">
        <div class="h-full">
            <input type="checkbox" :id v-model="boxValue" class="hidden peer" :disabled>
            <label :for="id"
                class="inline-flex items-center justify-center w-full h-full px-2 border-2 rounded-lg cursor-pointer hover:text-gray-300 border-gray-700 peer-checked:border-blue-ribbon-700 peer-checked:bg-blue-ribbon-700/30 peer-checked:text-gray-300 text-gray-200 hover:bg-gray-700"
                :class="disabled ? 'bg-gray-400 pointer-events-none' : 'bg-gray-800'">
                <div class="flex flex-row gap-2 w-full items-center justify-center">
                    <slot />
                    <div class="text-md font-semibold">{{ $t(label) }}</div>
                </div>
            </label>
        </div>
    </template>
</template>

<script setup>
const props = defineProps([
    'label',
    'id',
    'disabled',
    'variant'
])
const boxValue = defineModel('boxvalue', { required: true })

</script>
