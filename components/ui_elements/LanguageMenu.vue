<template>
    <button
        v-for="lang in availableLocales"
        :key="lang.code"
        @mouseenter="handleMouseEnter(lang.code)"
        @mouseleave="handleMouseLeave"
        class="h-12 w-full uppercase border-b border-black/40 relative px-8 transition-colors duration-300 overflow-hidden group text-left"
        :class="locale === lang.code ? 'pointer-events-none' : ''"
        :disabled="locale === lang.code"
        @click="changeLanguage(lang.code)"
    >
        <!-- Original language name -->
        <span 
            :class="[
                'absolute inset-0 flex items-center justify-center text-white transition-all',
                isHovered && hoveredLang === lang.code ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-100',
                locale === lang.code ? 'text-[#e4572e]' : ''
            ]"
            :style="{
                'transition-duration': `${timing}ms`,
                'transition-timing-function': timingFunction
            }"
        >
            {{ lang.name }}
        </span>

        <!-- Hover state with "Switch?" in target language -->
        <span 
            :class="[
                'absolute inset-0 flex items-center justify-center transition-all gap-2',
                isHovered && hoveredLang === lang.code ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            ]"
            :style="{
                'transition-duration': `${timing}ms`,
                'transition-timing-function': timingFunction
            }"
        >
            <!-- "Switch?" text in the target language -->
            <span :lang="lang.code" v-if="hoveredLang !== locale" class="text-blue-ribbon-700">
                {{ Object.getOwnPropertyDescriptor(switchWords, lang.code).value }}
            </span>
        </span>
    </button>
</template>

<script setup>
const timing = 500
const timingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)'

const { locale, locales, setLocale, t } = useI18n()
const router = useRouter()
const isHovered = ref(false)
const hoveredLang = ref('')

const switchWords = {
    en: "switch?",
    ja: "スイッチ？",
    ko: "스위치?",
    zh: "转变？"
}

const availableLocales = computed(() => {
    return locales.value
})

const handleMouseEnter = (langCode) => {
    isHovered.value = true
    hoveredLang.value = langCode
}

const handleMouseLeave = () => {
    isHovered.value = false
    hoveredLang.value = ''
}

const changeLanguage = async (choice) => {
    try {
        // Set the cookie first
        const cookie = useCookie('i18n_redirected')
        cookie.value = choice
        
        // Change the locale
        await setLocale(choice)
        
        // Refresh the current route without full page reload
        const currentRoute = router.currentRoute.value
        if (currentRoute.name) {
            await router.replace({
                ...currentRoute,
                force: true
            })
        }
    } catch (error) {
        console.error('Error during language switching:', error)
    }
}

// Wait for translations to load
const isTranslationsLoaded = ref(false)

// Ensure translations are loaded
onMounted(async () => {
    await nextTick()
    isTranslationsLoaded.value = true
})
</script>

<style scoped>
button {
    @apply mb-2 last:mb-0;
}
button:first-child {
    @apply border-t;
}
</style>