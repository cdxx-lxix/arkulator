<template>
    <div v-if="condition"
        class="flex flex-row items-center justify-between border-b border-gray-700 border-dashed mb-1">
        <div>
            <p>{{ $t(text) }}</p>
            <ul class="text-sm font-light text-gray-400 ml-5 list-disc">
                <li v-for="detail in details" :key="detail.name">{{ detail.name }} - {{ detail.amount }}</li>
            </ul>
        </div>
        <p class="flex flex-row items-center">{{ stat }}
            <OrundumIcon v-if="icon === 'orundum'" class="w-4 h-4 ml-1" />
            <PermitIcon v-if="icon === 'permit'" class="w-4 h-4 ml-1" />
            <OPIcon v-if="icon === 'op'" class="w-4 h-4 ml-1" />
        </p>
    </div>
</template>

<script setup>
const props = defineProps([
    'condition',
    'text',
    'stat',
    'icon',
    'details'
])
</script>