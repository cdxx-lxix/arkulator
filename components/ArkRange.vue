<template>
    <div class="flex flex-col mb-4">
        <label :for="id" class="flex flex-row mb-3 text-sm font-medium text-white">{{ $t(label) }}:<span
                class="font-bold ml-1">{{ rangeValue }}</span></label>
        <input :id :min :max :step type="range" class="w-full h-2 rounded-lg appearance-none cursor-pointer bg-sky-900"
            v-model="rangeValue">
        <div class="flex flex-row justify-between mt-2">
            <span class="text-sm text-gray-400">Min: 1200</span>
            <span class="text-sm text-gray-400">Max: 1800</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps([
    'label',
    'id',
    'min',
    'max',
    'step'
])
const rangeValue = defineModel('rangevalue', { required: true })
</script>

<style scoped>
input {
    --c: rgb(0, 102, 255);
    /* active color */
    --g: 8px;
    /* the gap */
    --l: 5px;
    /* line thickness*/
    --s: 30px;
    /* thumb size*/

    width: 400px;
    height: var(--s);
    /* needed for Firefox*/
    --_c: color-mix(in srgb, var(--c), #000 var(--p, 0%));
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    cursor: pointer;
    overflow: hidden;
}

input:focus-visible,
input:hover {
    --p: 25%;
}

input:active,
input:focus-visible {
    --_b: var(--s)
}

/* chromium */
input[type="range" i]::-webkit-slider-thumb {
    height: var(--s);
    aspect-ratio: 1;
    border-radius: 50%;
    box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
    border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 0 1/calc(50% - var(--l)/2) 100vw/0 calc(100vw + var(--g));
    -webkit-appearance: none;
    appearance: none;
    transition: .3s;
}

/* Firefox */
input[type="range"]::-moz-range-thumb {
    height: var(--s);
    width: var(--s);
    background: none;
    border-radius: 50%;
    box-shadow: 0 0 0 var(--_b, var(--l)) inset var(--_c);
    border-image: linear-gradient(90deg, var(--_c) 50%, #ababab 0) 0 1/calc(50% - var(--l)/2) 100vw/0 calc(100vw + var(--g));
    -moz-appearance: none;
    appearance: none;
    transition: .3s;
}

@supports not (color: color-mix(in srgb, red, red)) {
    input {
        --_c: var(--c);
    }
}
</style>