<template>
    <main class="grid grid-cols-2 bg-mirage-950">
        <section id="calculationform">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="calendar">
                    <VDatePicker v-model.range="calendarStore.range" mode="date" is-dark="true" color="pink"
                        :first-day-of-week="2" show-iso-weeknumbers :min-date="new Date()"
                        :max-date="new Date(2030, 1, 1)" :attributes="attributes" :columns="3" />
                </ArkFrame>

                <ArkGuarantCalc />

                <ArkAdvancedCalc />

                <ArkMaybeCalc />

                <ArkHopium />

            </div>
        </section>

        <section id="calculations">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="calculations.header">
                    <div
                        class="flex flex-row flex-wrap w-full px-6 justify-between font-semibold text-gray-100 text-2xl">
                        <h2 class="w-1/3 text-left">{{ $t("calculations.days", { days: calendarStore.getDays }) }}</h2>
                        <h2 class="w-1/3 text-center">{{ $t("calculations.weeks", { weeks: calendarStore.getWeeks }) }}
                        </h2>
                        <h2 class="w-1/3 text-right">{{ $t("calculations.months", { months: calendarStore.getMonths })
                            }}</h2>
                        <hr class="w-full my-2">
                    </div>
                    <div class="flex flex-col gap-2 w-full px-6 justify-start font-light text-gray-100 text-md">
                        <div>
                            <ArkGuarantStats :days="calendarStore.getDays" :weeks="calendarStore.getWeeks" />
                            <ArkResourcesOutput :orundum="pullStore.getGuaranteedOrundums" :permits="pullStore.getGuaranteedPermits" variant="subtotal" />
                            <hr>
                            <ArkAdvancedStats />
                            <hr>
                            <ArkMaybeStats />
                        </div>
                        <hr>
                        <ArkResourcesOutput :orundum="pullStore.getGuaranteedOrundums" :permits="pullStore.getGuaranteedPermits" variant="total" />
                    </div>
                </ArkFrame>
            </div>
        </section>

    </main>
</template>

<script setup>
import events from '~/data/events';
import annihilations from '~/data/annihilations';
import login from '~/data/login';
import { usePullsStore } from '#imports';
import { useCalendarStore } from '~/stores/calendar';

const pullStore = usePullsStore()
const calendarStore = useCalendarStore()

const importantDates = ref([...events, ...annihilations, ...login])
const attributes = ref(importantDates)

</script>