<template>
    <main class="grid grid-cols-1 xl:grid-cols-2 bg-mirage-950">
        <section id="calculationform">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="calendar">
                    <VDatePicker v-model.range="calendarStore.range" mode="date" is-dark="true" color="pink"
                        :first-day-of-week="2" show-iso-weeknumbers :min-date="calendarStore.today"
                        :max-date="new Date(2030, 1, 1)" :attributes="attributes" :columns="calendar_columns" />
                </ArkFrame>

                <ArkControls />

                <ArkGuarantCalc />

                <ArkAdvancedCalc />

                <ArkMaybeCalc />

            </div>
        </section>

        <section id="calculations">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="calculations.header">
                    <div
                        class="flex flex-row flex-wrap w-full px-2 sm:px-6 justify-between font-semibold text-gray-100 text-2xl">
                        <h2 class="w-1/3 text-sm sm:text-lg text-left">{{ $t("calculations.days", { days: calendarStore.getDays }) }}</h2>
                        <h2 class="w-1/3 text-sm sm:text-lg text-center">{{ $t("calculations.weeks", { weeks: calendarStore.getWeeks }) }}
                        </h2>
                        <h2 class="w-1/3 text-sm sm:text-lg text-right">{{ $t("calculations.months", { months: calendarStore.getMonths })
                            }}</h2>
                        <hr class="w-full my-2">
                    </div>
                    <div class="flex flex-col gap-2 w-full px-2 sm:px-6 justify-start font-light text-gray-100 text-md">
                        <div>
                            <ArkGuarantStats :days="calendarStore.getDays" :weeks="calendarStore.getWeeks" />
                            <ArkResourcesOutput :orundum="pullStore.getGuaranteedOrundums"
                                :permits="pullStore.getGuaranteedPermits" variant="subtotal" />
                            <hr>
                            <ArkAdvancedStats />
                            <ArkResourcesOutput :orundum="advancedStore.getAdvancedOrundum()"
                                :permits="advancedStore.getAdvancedPermits()" variant="subtotal" />
                            <hr>
                            <ArkMaybeStats />
                            <ArkResourcesOutput :orundum="maybeStore.getMaybeOrundum"
                                :permits="maybeStore.getMaybePermits" variant="subtotal" />
                            <hr>
                            <ArkControlInfo />
                        </div>
                        <hr>
                        <ArkResourcesOutput :orundum="total_orundum" :permits="total_permits" variant="total" />
                    </div>
                </ArkFrame>
                <ArkBudgetCalc :orundum="total_orundum" :permits="total_permits" />
                <ArkHopium />
            </div>
        </section>

    </main>
</template>

<script setup>
import events from '~/data/events';
import annihilations from '~/data/annihilations';
import login from '~/data/login';
import { usePullsStore } from '#imports';
import { useAdvancedStore } from '#imports';
import { useCalendarStore } from '~/stores/calendar';
import { useMaybeStore } from '~/stores/maybe';
defineOgImageComponent('NuxtSeo', {
    theme: '#ff0000',
    colorMode: 'dark'
})
const viewport = useViewport()

const pullStore = usePullsStore()
const advancedStore = useAdvancedStore()
const calendarStore = useCalendarStore()
const maybeStore = useMaybeStore();

const importantDates = ref([...events, ...annihilations, ...login])
const attributes = ref(importantDates)

const total_orundum = computed(() => {
    return pullStore.getGuaranteedOrundums + advancedStore.getAdvancedOrundum() + maybeStore.getMaybeOrundum
})

const total_permits = computed(() => {
    return pullStore.getGuaranteedPermits + advancedStore.getAdvancedPermits() + maybeStore.getMaybePermits
})

const calendar_columns = ref(2)

const choose_columns = (bp) => {
    if (bp === 'xs') {
        return calendar_columns.value = 1;
    } else if (bp === 'sm' || bp === 'xl') {
        return calendar_columns.value = 2;
    } else if (bp === 'lg') {
        return calendar_columns.value = 4;
    } else if (bp === 'md' || bp === '2xl') {
        return calendar_columns.value = 3;
    }
}

onMounted(() => {
    choose_columns(viewport.breakpoint.value);
    watch(viewport.breakpoint, (newBreakpoint) => {
        choose_columns(newBreakpoint);
    })
})

</script>

<style>
* {
    /* blue-ribbon-700, mirage-950 */
    scrollbar-color: #0066ff #0f172a;
    scrollbar-width: thin;
}
</style>