<template>
    <fieldset class="border-2 border-gray-100 rounded-lg p-4 flex flex-col flex-wrap justify-center items-center">
        <legend class="ml-4 px-2 text-white font-semibold uppercase">{{ $t(legend) }}</legend>
        <slot />
    </fieldset>
</template>

<script setup>
const props = defineProps([
    'legend'
])
</script>