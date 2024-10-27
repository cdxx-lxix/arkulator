<template>
    <footer class="flex flex-col items-center md:items-stretch md:flex-row md:justify-between w-full p-2 mt-4 text-gray-300 text-md font-semibold">
        <div>
            Arkulator - {{ year }}
        </div>
        <div>
            {{ $t('footer.hard_truth') }}
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>