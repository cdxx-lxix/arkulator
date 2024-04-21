<template>
    <ul class="w-full text-sm font-medium rounded-lg bg-gray-700 border-gray-600 text-white">
        <slot />
    </ul>
</template>

<style scoped>
ul ::v-slotted(li:last-child) {
    border: none;
}
</style>