<template>
    <div v-if="condition"
        class="flex flex-row items-center justify-between border-b border-gray-700 border-dashed mb-1">
        <div>
            <p v-if="text">{{ $t(text) }}</p>
            <p v-else>{{ freetext }}</p>
            <ul class="text-sm font-light text-gray-400 ml-5 list-disc">
                <li v-for="detail in details" :key="detail.name" :class="detail.special ? 'text-flame-pea-500' : ''">{{ $t(detail.name) }} - {{ detail.amount }}</li>
            </ul>
        </div>
        <p class="flex flex-row items-center">{{ stat }}
            <OrundumIcon v-if="icon === 'orundum'" class="w-4 h-4 ml-1" />
            <PermitIcon v-if="icon === 'permit'" class="w-4 h-4 ml-1" />
            <OPIcon v-if="icon === 'op'" class="w-4 h-4 ml-1" />
            <img v-if="icon === 'bag'" :src="recruit_bag" alt="recruitment bag" class="w-4 h-4 ml-1">
        </p>
    </div>
</template>

<script setup>
import recruit_bag from '../assets/images/recruit_bag.png';
const props = defineProps([
    'condition',
    'text',
    'freetext',
    'stat',
    'icon',
    'details'
])
</script>