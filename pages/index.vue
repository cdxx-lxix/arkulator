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

                <fieldset class="border-2 border-gray-100 rounded-lg p-2">
                    <legend class="ml-4 px-2 text-white font-semibold uppercase">This might happen: </legend>
                    <p class="text-white mb-2 ml-4">This section consists of something personal, rare, unpredictable,
                        etc. Inaccurate and speculative, just something that you want to throw into the pool for some
                        reason.</p>
                </fieldset>

                <fieldset class="border-2 border-gray-100 rounded-lg p-2">
                    <legend class="ml-4 px-2 text-white font-semibold uppercase">Additional hope: </legend>
                    <p class="text-white mb-2 ml-4">This section consists of random stuff that may occur and give you
                        some extra pulls. Just info because it's impossible to predict the amount and occurance.</p>
                    <ul class="text-white list-disc ml-8">
                        <li>Maintanance compensation</li>
                        <li>Mail delivery (For some achievements or events)</li>
                        <li>Codes (They have a system but no one uses it. At least for now.)</li>
                        <li>Web events</li>
                        <li>Discord events and competitions rewards (if you participate of course)</li>
                        <li>Your donates (Thank you for your service mr. Whale)</li>
                    </ul>
                </fieldset>

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
                            <hr>
                            <ArkAdvancedStats />
                            <hr>
                            <h2 class="font-semibold text-lg text-center uppercase">{{ $t("calculations.maybe.header")
                                }}</h2>
                        </div>
                        <hr>
                        <div class="flex flex-row flex-wrap w-full justify-between text-lg font-bold">
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <OrundumIcon class="w-6 h-6" /> {{ pullStore.getGuaranteedOrundums }}
                            </p>
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <PermitIcon class="w-6 h-6" /> {{ pullStore.getGuaranteedPermits }}
                            </p>
                            <p class="flex flex-row gap-2 items-center justify-center">{{ $t("calculations.total",
                                { pulls: totalPulls }) }}</p>
                        </div>
                    </div>
                </ArkFrame>
            </div>
        </section>

    </main>
</template>

<script setup>
import events from '~/data/events';
import annihilations from '~/data/annihilations';
import { usePullsStore } from '#imports';
import { useCalendarStore } from '~/stores/calendar';

const pullStore = usePullsStore()
const calendarStore = useCalendarStore()

const importantDates = ref([...events, ...annihilations])
const attributes = ref(importantDates)

const totalPulls = computed(() => {
    if ((Math.floor(pullStore.getGuaranteedOrundums / 600) + pullStore.getGuaranteedPermits) < 0) {
        return 0
    } else {
        return Math.floor(pullStore.getGuaranteedOrundums / 600) + pullStore.getGuaranteedPermits
    }
})

</script>