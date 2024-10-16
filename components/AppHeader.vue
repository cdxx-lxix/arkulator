<template>
    <header class="bg-mirage-950 w-full px-2 pt-2">
        <div class="flex flex-row items-center justify-between">
            <div class="font-bold text-white text-2xl">
                Arkulator
            </div>
            <div class="inline-flex">
                <button @click="isMenuVisible">
                    <BurgerMenu v-if="!show_menu"
                        class="w-6 h-6 stroke-white hover:stroke-blue-ribbon-700 ark-smooth-animation" />
                    <CloseButtonIcon v-if="show_menu"
                        class="w-6 h-6 stroke-white hover:stroke-blue-ribbon-700 ark-smooth-animation" />
                </button>
            </div>
        </div>
    </header>
    <div v-show="show_menu" class="bg-mirage-950 absolute right-0 min-w-64 max-w-96 min-h-screen border-l-2 z-10">
        <nav class="text-white flex flex-col justify-center items-center text-2xl">
            <NuxtLink class="ark-link-scoped" exactActiveClass="ark-active-link" to="/">{{ $t('menu.home') }}</NuxtLink>
            <NuxtLink class="ark-link-scoped" exactActiveClass="ark-active-link" to="/wiki">{{ $t('menu.wiki') }}</NuxtLink>
            <NuxtLink class="ark-link-scoped" exactActiveClass="ark-active-link" to="/contact">{{ $t('menu.contact') }}</NuxtLink>
            <NuxtLink class="ark-link-scoped" exactActiveClass="ark-active-link"
                to="https://github.com/cdxx-lxix/arkulator/blob/master/CHANGELOG.md" external target="_blank">{{ $t('menu.changelog') }}
            </NuxtLink>
        </nav>
        <div class="text-white mt-4 border-t flex flex-col">
            <span class="text-center text-xl py-2">{{ $t('menu.language') }}</span>
            <br>
            <NuxtLink class="ark-link-scoped cursor-pointer" :class="locale === lang.code ? 'text-[#E4572E] pointer-events-none' : ''"
                v-for="lang in availableLocales" :key="lang.code" @click="changeLanguage(lang.code)">
                {{ lang.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const show_menu = ref(false)
const isMenuVisible = () => {
    return show_menu.value = !show_menu.value
}

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return locales.value
})

const changeLanguage = (choice) => {
    setLocale(choice)
    reloadNuxtApp()
}
</script>

<style scoped>
.ark-link-scoped {
    @apply hover:ark-hover-link ark-smooth-animation uppercase p-2 flex justify-center items-center border-b border-black w-full;
}

.ark-active-link {
    @apply text-[#E4572E];
}

.ark-active-link::after {
    content: "";
    transform: translateY(0.25rem);
    @apply bg-white flex-grow ml-2 h-px;
}

.ark-active-link::before {
    content: "";
    transform: translateY(0.25rem);
    @apply bg-white flex-grow mr-2 h-px;
}
</style>