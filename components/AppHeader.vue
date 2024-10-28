<template>
    <header class="w-full px-2 pt-2 pb-2">
        <div class="flex flex-row items-center justify-between">
            <div class="font-bold text-white text-2xl">
                {{ $t('nuxtSiteConfig.name') }}
            </div>
            <div class="inline-flex">
                <button @click="isMenuVisible">
                    <BurgerMenu v-if="!show_menu" class="w-6 h-6 ark-svg-button-stroke ark-smooth-animation" />
                    <CloseButtonIcon v-if="show_menu" class="w-6 h-6 ark-svg-button-stroke ark-smooth-animation" />
                </button>
            </div>
        </div>
    </header>

    <div v-show="show_menu" class="fixed inset-0 bg-gray-950/50 backdrop-filter backdrop-blur-sm z-30 transition-opacity" @click="isMenuVisible"></div>

    <div :class="show_menu ? 'translate-x-0' : '-translate-x-full'"
        class="fixed top-0 left-0 z-40 h-screen px-4 overflow-y-auto transition-transform bg-mirage-950 w-80">
        <div class="w-full flex flex-row justify-center my-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-blue-ribbon-700/30" viewBox="0 0 512 512" xml:space="preserve">
                <path
                    d="M507.344 154.765c-7.713-10.283-22.301-12.367-32.582-4.655L256.005 314.182 37.238 150.111c-10.283-7.713-24.869-5.626-32.582 4.655s-5.627 24.871 4.655 32.582l232.732 174.544a23.24 23.24 0 0 0 13.964 4.655c4.912 0 9.826-1.552 13.964-4.655l232.72-174.544c10.28-7.712 12.365-22.3 4.653-32.583" />
            </svg>
        </div>
        <nav class="text-white flex flex-col justify-start items-start text-2xl ark-nav-menu">
            <TransitionLink class="ark-menu-link border-y" text="menu.home" link="/">
                <template #icon>
                    <CalculatorIcon class="ark-menu-icon p-3" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.wiki" link="/wiki">
                <template #icon>
                    <BookIcon class="ark-menu-icon p-2" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.contact" link="/contact">
                <template #icon>
                    <ContactIcon class="ark-menu-icon p-3" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.changelog"
                link="https://github.com/cdxx-lxix/arkulator/blob/master/CHANGELOG.md" :external="true">
                <template #icon>
                    <ChangelogIcon class="ark-menu-icon p-2" />
                </template>
            </TransitionLink>
        </nav>
        <div class="w-full flex flex-row justify-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 fill-blue-ribbon-700/30" viewBox="0 0 512 512" xml:space="preserve">
                <path
                    d="M507.344 154.765c-7.713-10.283-22.301-12.367-32.582-4.655L256.005 314.182 37.238 150.111c-10.283-7.713-24.869-5.626-32.582 4.655s-5.627 24.871 4.655 32.582l232.732 174.544a23.24 23.24 0 0 0 13.964 4.655c4.912 0 9.826-1.552 13.964-4.655l232.72-174.544c10.28-7.712 12.365-22.3 4.653-32.583" />
            </svg>
        </div>
        <div class="text-white flex flex-col ark-lang-menu">
            <!-- <span class="text-center text-xl py-2">{{ $t('menu.language') }}</span> -->
            <br>
            <NuxtLink v-for="lang in availableLocales" :key="lang.code" class="ark-link-scoped cursor-pointer"
                :class="locale === lang.code ? 'ark-active-link pointer-events-none' : ''"
                @click="changeLanguage(lang.code)">
                {{ lang.name }}
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import lang_icon from '../assets/images/languages.svg';
import menu_icon from '../assets/images/menu.svg';
const lang_bg = `url(${lang_icon})`
const menu_bg = `url(${menu_icon})`
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
.ark-menu-link {
    @apply h-12 w-full uppercase border-black shadow-md;
}

.ark-menu-icon {
    @apply w-full h-full fill-blue-ribbon-700;
}

.ark-link-scoped {
    @apply hover:ark-hover-link ark-smooth-animation uppercase p-2 flex justify-center items-center border-b border-black w-full;
}

.ark-active-link::after {
    content: "";
    transform: translateY(0.15rem);
    @apply bg-white flex-grow ml-2 h-px;
}

.ark-active-link::before {
    content: "";
    transform: translateY(0.15rem);
    @apply bg-white flex-grow mr-2 h-px;
}

.ark-active-link {
    @apply text-flame-pea-500;
}

.ark-lang-menu {
    /* background-image: v-bind(lang_bg); */
    background: transparent v-bind(lang_bg) no-repeat fixed center; 
}
.ark-nav-menu {
    background: transparent v-bind(menu_bg) no-repeat fixed center; 
}
</style>