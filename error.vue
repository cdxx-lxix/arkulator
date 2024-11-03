<template>
    <div class="flex flex-col justify-center items-center w-full p-6">
        <h1 class="text-[10rem] font-bold text-blue-ribbon-700 leading-none border-b border-white">{{ error.statusCode }}</h1>
        <div class="flex flex-row gap-3 mb-4">
            <NuxtLink to="/" class="uppercase text-gray-100 text-4xl hover:text-blue-ribbon-700 rounded-lg p-2">Home</NuxtLink>
            <button @click="$router.back()" class="uppercase text-gray-300 text-4xl hover:text-blue-ribbon-700 rounded-lg p-2">Back</button>
        </div>
        <img class="rounded-lg" :src="hellagur" alt="bruh">
        <p class="text-6xl text-gray-400">{{ error.message }}</p>
    </div>
</template>

<script setup>
import hellagur from './assets/images/hella_bruh.png';
defineProps(['error'])
</script>