<template>
    <fieldset class="border-2 border-gray-100 rounded-lg p-4 flex flex-col justify-center items-center">
        <legend class="ml-4 px-2 text-white font-semibold uppercase">{{ legend }}</legend>
        <p v-if="description">{{ description }}</p>
        <slot />
    </fieldset>
</template>

<script setup>
const props = defineProps([
    'legend',
    'description'
])
</script>