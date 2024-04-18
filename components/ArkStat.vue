<template>
    <div v-if="condition" class="flex flex-row items-center justify-between border-b border-gray-700 border-dashed mb-1">
        <p>{{ text }}</p>
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
    'icon'
])
</script>