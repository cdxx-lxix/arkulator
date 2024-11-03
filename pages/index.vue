<template>
    <main class="ark-main-section">
        <section id="calculationform" class="ark-app-section">

            <LazyArkCalendar />

            <LazyArkControls />

            <LazyArkGuarantCalc />

            <LazyArkAdvancedCalc />

            <LazyArkMaybeCalc />

        </section>

        <section id="calculations" class="ark-app-section">

            <LazyArkFrame legend="calculations.header">
                <div
                    class="flex flex-row flex-wrap w-full px-2 sm:px-6 justify-between font-semibold text-gray-100 text-2xl">
                    <h2 class="w-1/3 text-sm sm:text-lg text-left">{{ $t("calculations.days", {
                        days:
                            calendarStore.getDays
                    }) }}</h2>
                    <h2 class="w-1/3 text-sm sm:text-lg text-center">{{ $t("calculations.weeks", {
                        weeks:
                            calendarStore.getWeeks
                    }) }}
                    </h2>
                    <h2 class="w-1/3 text-sm sm:text-lg text-right">{{ $t("calculations.months", {
                        months:
                            calendarStore.getMonths
                    })
                        }}</h2>
                    <hr class="w-full my-2">
                </div>
                <div
                    class="flex flex-col gap-2 w-full px-2 sm:px-6 justify-start font-light min-h-32 text-gray-100 text-md">
                    <div>
                        <LazyArkGuarantStats :days="calendarStore.getDays" :weeks="calendarStore.getWeeks" />
                        <LazyArkResourcesOutput :orundum="pullStore.getGuaranteedOrundums"
                            :permits="pullStore.getGuaranteedPermits" variant="subtotal" />
                        <hr>
                        <LazyArkAdvancedStats />
                        <LazyArkResourcesOutput :orundum="advancedStore.getAdvancedOrundum()"
                            :permits="advancedStore.getAdvancedPermits()" variant="subtotal" />
                        <hr>
                        <LazyArkMaybeStats />
                        <LazyArkResourcesOutput
                            :orundum="maybeStore.getMaybeOrundum + maybeStore.getSequenceRewards.orundum"
                            :permits="maybeStore.getSequenceRewards.permits" variant="subtotal" />
                        <hr>
                        <LazyArkControlInfo />
                    </div>
                    <hr>
                    <ArkResourcesOutput :orundum="total_orundum" :permits="total_permits" variant="total" />
                </div>
            </LazyArkFrame>
            <LazyArkBudgetCalc :orundum="total_orundum" :permits="total_permits" />
            <LazyArkHopium />

        </section>

    </main>
</template>

<script setup>
// import events from '~/data/events';
// import annihilations from '~/data/annihilations';
import { usePullsStore } from '#imports';
import { useAdvancedStore } from '#imports';
import { useCalendarStore } from '~/stores/calendar';
import { useMaybeStore } from '~/stores/maybe';
defineOgImageComponent('ArkulatorOg', {
    title: 'Arklulator'
})

const pullStore = usePullsStore()
const advancedStore = useAdvancedStore()
const calendarStore = useCalendarStore()
const maybeStore = useMaybeStore();

const total_orundum = computed(() => {
    return pullStore.getGuaranteedOrundums + advancedStore.getAdvancedOrundum() + maybeStore.getMaybeOrundum + maybeStore.getSequenceRewards.orundum
})

const total_permits = computed(() => {
    return pullStore.getGuaranteedPermits + advancedStore.getAdvancedPermits() + maybeStore.getSequenceRewards.permits
})

</script>