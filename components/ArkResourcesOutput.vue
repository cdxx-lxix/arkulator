<template>
    <template v-if="variant === 'total'">
        <div class="flex flex-row flex-wrap w-full justify-between text-lg font-bold">
            <p class="flex flex-row gap-2 items-center justify-center">
                <OrundumIcon class="w-6 h-6" /> {{ orundum }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                <PermitIcon class="w-6 h-6" /> {{ permits }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">{{ $t("calculations.total",
                { pulls: totalPulls }) }}</p>
        </div>
    </template>
    <template v-if="variant === 'subtotal'">
        <div class="flex flex-row flex-wrap w-full justify-end gap-5 text-md font-semibold mb-2">
            <p class="flex flex-row gap-2 items-center justify-center">
                <OrundumIcon class="w-4 h-4" /> {{ orundum }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                <PermitIcon class="w-4 h-4" /> {{ permits }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">{{ $t("calculations.subtotal",
                { pulls: totalPulls }) }}</p>
        </div>
    </template>
    <!-- <template v-if="variant === 'budget'">
        <div class="flex flex-row flex-wrap gap-3 w-full justify-start text-lg font-bold">
            <p class="flex flex-row gap-2 items-center justify-center">
                <OrundumIcon class="w-6 h-6" /> {{ orundum }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                +
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                <PermitIcon class="w-6 h-6" /> {{ permits }}
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                =
            </p>
            <p class="flex flex-row gap-2 items-center justify-center">
                <img :src="recruit_bag" alt="recruitment bag" class="w-6 h-6"> {{ totalPulls }}
            </p>
        </div>
    </template> -->
</template>

<script setup>
// import recruit_bag from '../assets/images/recruit_bag.png';
const props = defineProps([
    'orundum',
    'permits',
    'variant'
])

const totalPulls = computed(() => {
    if ((Math.floor(props.orundum / 600) + props.permits) < 0) {
        return 0
    } else {
        return Math.floor(props.orundum / 600) + props.permits
    }
})
</script>