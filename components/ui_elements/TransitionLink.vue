<template>
    <NuxtLink @mouseenter="isHovered = true" @mouseleave="isHovered = false"
        class="relative px-8 transition-colors duration-300 overflow-hidden group" :to="link" :external
        :class="route.path === link ? 'ark-active-link pointer-events-none' : ''">

        <span :class="[
            'absolute inset-0 flex items-center justify-center text-white transition-all',
            isHovered ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100',
            route.path === link ? 'ark-active-link' : ''
        ]" :style="{
            'transition-duration': `${timing}ms`,
            'transition-timing-function': timingFunction
        }">
            {{ $t(`${text}`) }}
        </span>

        <span :class="[
            'absolute inset-0 flex items-center justify-center transition-all',
            isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        ]" :style="{
            'transition-duration': `${timing}ms`,
            'transition-timing-function': timingFunction
        }">
            <slot name="icon">
                <svg viewBox="0 0 15 15" class="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5.5 10V8.5m0 0v-5a1 1 0 0 1 2 0v4h3.353c.91 0 1.647.737 1.647 1.647V10A4.5 4.5 0 0 1 8 14.5h-.5a4 4 0 0 1-4-4 2 2 0 0 1 2-2Zm3.5-3h2a2.5 2.5 0 0 0 0-5H4a2.5 2.5 0 0 0 0 5"
                        stroke="#000" />
                </svg>
            </slot>
        </span>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        default: 'Click me'
    },
    timing: {
        type: Number,
        default: 500
    },
    timingFunction: {
        type: String,
        default: 'cubic-bezier(0.4, 0, 0.2, 1)' // equivalent to Tailwind's 'ease-in-out'
    },
    link: {
        type: String,
        default: '/'
    },
    external: {
        type: Boolean,
        default: false
    }
})
const route = useRoute()

const isHovered = ref(false)
</script>

<style scoped>
.ark-active-link {
    @apply text-flame-pea-500;
}
</style>
