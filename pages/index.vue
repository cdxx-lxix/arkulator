<template>
    <main class="grid grid-cols-2 bg-mirage-950">
        <section id="calculationform">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="Magic calendar">
                    <VDatePicker v-model.range="range" mode="date" is-dark="true" color="pink" :first-day-of-week="2"
                        show-iso-weeknumbers :min-date="new Date()" :max-date="new Date(2030, 1, 1)"
                        :attributes="attributes" :columns="3" />
                </ArkFrame>

                <ArkGuarantCalc :days="getDays" :start="range.start" />

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
                        <h2 class="w-1/3 text-left">{{ $t("calculations.days", { days: getDays }) }}</h2>
                        <h2 class="w-1/3 text-center">{{ $t("calculations.weeks", { weeks: getWeeks }) }}</h2>
                        <h2 class="w-1/3 text-right">{{ $t("calculations.months", { months: getMonths }) }}</h2>
                        <hr class="w-full my-2">
                    </div>
                    <div class="flex flex-col gap-2 w-full px-6 justify-start font-light text-gray-100 text-md">
                        <div>
                            <ArkGuarantStats :days="getDays" :weeks="getWeeks" />
                            <hr>
                            <ArkAdvancedStats />
                            <hr>
                            <h2 class="font-semibold text-lg text-center uppercase">{{ $t("calculations.maybe.header")
                                }}</h2>
                        </div>
                        <hr>
                        <div class="flex flex-row flex-wrap w-full justify-between text-lg font-bold">
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <OrundumIcon class="w-6 h-6" /> {{ guaranteedOrundums > 0 ? guaranteedOrundums : 0 }}
                            </p>
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <PermitIcon class="w-6 h-6" /> {{ guaranteedPermits > 0 ? guaranteedPermits : 0 }}
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
import ArkAdvancedStats from '~/components/sections/ArkAdvancedStats.vue';

const pullStore = usePullsStore()

const importantDates = ref([...events, ...annihilations])
const today = new Date()
const range = ref({
    start: new Date(),
    end: new Date()
});

const attributes = ref(importantDates)

// milliseconds / 1000 to get secodns / 60 to get minutes / 60 to get hours / 24 to get days
const getDays = computed(() => {
    // +1 makes it return 1 even when one day is selected. By default calendar ignores starting day.
    return Math.floor(((range.value.end.getTime() - range.value.start.getTime()) / 1000 / 60 / 60 / 24) + 1)
})
function getWeekNumber(date) {
    // Copy date so don't modify original
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
}

const getWeeks = computed(() => {
    let startWeek = getWeekNumber(range.value.start);
    let endWeek = getWeekNumber(range.value.end);
    let weeks = [];
    for (let year = startWeek[0]; year <= endWeek[0]; year++) {
        let startWeekOfYear = year === startWeek[0] ? startWeek[1] : 1;
        let endWeekOfYear = year === endWeek[0] ? endWeek[1] : 52 + (year % 4 === 0 ? 1 : 0); // 52 or 53 weeks in a year
        for (let week = startWeekOfYear; week <= endWeekOfYear; week++) {
            weeks.push([year, week]);
        }
    }
    return weeks.length;
});

const getMonths = computed(() => {
    const day = 86400000; // milliseconds in a day
    let temp = [];
    let loop_time = new Date(range.value.start.getTime() + (pullStore.user_data.is_excluded_today ? day : 0));
    // do-while is used because if the start & end are the same day the other loops won't trigger
    do {
        temp.push(loop_time.getMonth());
        loop_time.setTime(loop_time.getTime() + day);
    } while (loop_time <= range.value.end);
    // spread+Set to remove duplicates
    return [...new Set(temp)].length;
});

const guaranteedOrundums = computed(() => {
    let temp = pullStore.user_data.current_orundums
    temp += pullStore.getUserDailyRewards(getDays.value)
    temp += pullStore.getUserMonthlyCardRewards(getDays.value)
    temp += pullStore.getUserWeeklyRewards(getWeeks.value)
    temp += pullStore.getUserAnnihilationRewards(getWeeks.value)
    temp += pullStore.getUserPrimeToOrundum()
    temp += pullStore.getUserShardsToOrundum()
    return temp
})

const guaranteedPermits = computed(() => {
    let temp = pullStore.user_data.current_permits
    pullStore.user_data.login_permits_in_range = pullStore.getUserPermitsForLogin(range.value.start.getTime(), range.value.end.getTime())
    temp += pullStore.user_data.login_permits_in_range
    return temp
})

const totalPulls = computed(() => {
    if ((Math.floor(guaranteedOrundums.value / 600) + guaranteedPermits.value) < 0) {
        return 0
    } else {
        return Math.floor(guaranteedOrundums.value / 600) + guaranteedPermits.value
    }
})

</script>