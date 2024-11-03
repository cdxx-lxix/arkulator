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

    <div v-show="show_menu"
        class="fixed inset-0 bg-gray-950/50 backdrop-filter backdrop-blur-sm z-30 transition-opacity"
        @click="isMenuVisible"></div>

    <div :class="show_menu ? 'translate-x-0' : '-translate-x-full'"
        class="fixed top-0 left-0 z-40 h-screen px-4 overflow-y-auto transition-transform bg-mirage-950 w-80">
        <div class="w-full flex flex-row justify-center my-4">
            <ChevronIcon class="h-10 fill-blue-ribbon-700/30" />
        </div>
        <nav class="text-white flex flex-col justify-start items-start text-2xl ark-nav-menu">
            <TransitionLink class="ark-menu-link border-y" text="menu.home" link="/" @click="isMenuVisible">
                <template #icon>
                    <CalculatorIcon class="ark-menu-icon p-3" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.wiki" link="/wiki" @click="isMenuVisible">
                <template #icon>
                    <BookIcon class="ark-menu-icon p-2" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.contact" link="/contact" @click="isMenuVisible">
                <template #icon>
                    <ContactIcon class="ark-menu-icon p-3" />
                </template>
            </TransitionLink>
            <TransitionLink class="ark-menu-link border-b" text="menu.changelog"
                link="https://github.com/cdxx-lxix/arkulator/blob/master/CHANGELOG.md" :external :blank="true" @click="isMenuVisible">
                <template #icon>
                    <ChangelogIcon class="ark-menu-icon p-2" />
                </template>
            </TransitionLink>
        </nav>
        <div class="w-full flex flex-row justify-center my-4">
            <ChevronIcon class="h-10 fill-blue-ribbon-700/30" />
        </div>
        <div class="text-white flex flex-col ark-lang-menu">
            <LanguageMenu />
        </div>
    </div>
</template>

<script setup>
const { initialize, enableAnalytics } = useGtag()
const show_menu = ref(false)
const isMenuVisible = () => {
    return show_menu.value = !show_menu.value
}

onMounted(async() => {
    initialize()
    enableAnalytics()
}) 
</script>

<style scoped>
.ark-menu-link {
    @apply h-12 w-full uppercase border-black/40;
}

.ark-menu-icon {
    @apply w-full h-full fill-blue-ribbon-700;
}

.ark-lang-menu {
    background: transparent url('assets/images/languages.svg') no-repeat fixed center;
}

.ark-nav-menu {
    background: transparent url('assets/images/menu.svg') no-repeat fixed center;
}
</style>