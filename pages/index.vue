<template>
    <main class="grid grid-cols-2 bg-mirage-950">
        <section id="calculationform">
            <div class="flex flex-col gap-2 p-2">
                <ArkFrame legend="Magic calendar">
                    <VDatePicker v-model.range="range" mode="date" is-dark="true" color="pink" :first-day-of-week="2"
                        show-iso-weeknumbers :min-date="new Date()" :max-date="new Date(2030, 1, 1)"
                        :attributes="attributes" :columns="3" />
                </ArkFrame>

                <ArkFrame legend="I currently have">
                    <div class="grid grid-cols-2 gap-2 mb-3">
                        <ArkInput id="currentorundum" min="0" v-model:inputvalue="usersResources.currentOrundums"
                            label="guaranteed.currentorundum">
                            <OrundumIcon class="w-6 h-6" />
                        </ArkInput>
                        <ArkInput id="currenpermits" min="0" v-model:inputvalue="usersResources.currentPermits"
                            label="guaranteed.currentpermits">
                            <PermitIcon class="w-6 h-6" />
                        </ArkInput>
                        <ArkInput id="opsacrifice" min="0" v-model:inputvalue="usersResources.sacrificeOPamount"
                            label="guaranteed.opsacrifice">
                            <OPIcon class="w-6 h-6" />
                        </ArkInput>
                        <ArkInput id="currentshards" min="0" v-model:inputvalue="usersResources.orundumFarmingStatic"
                            label="guaranteed.currentshards">
                            <OShardIcon class="w-6 h-6" />
                        </ArkInput>
                    </div>
                    <div class="grid grid-cols-2 gap-2 mb-3">
                        <ArkCheckbox id="monthlycard" label="guaranteed.monthlycard" help="guaranteed.monthlycardhelp"
                            v-model:boxvalue="usersResources.isMonthlyCard" />
                        <ArkCheckbox id="weeklyrewards" label="guaranteed.thisweektask"
                            help="guaranteed.thisweektaskhelp" v-model:boxvalue="usersResources.isThisWeekTasks" />
                        <ArkCheckbox id="annihilation" label="guaranteed.thisweekannihilation"
                            help="guaranteed.thisweekannihilationhelp"
                            v-model:boxvalue="usersResources.isThisWeekAnni" />
                        <ArkRange v-model:rangevalue="usersResources.currentAnnihilation" label="Annihilation"
                            min="1200" max="1800" step="50" />
                    </div>
                </ArkFrame>

                <fieldset class="border-2 border-gray-100 rounded-lg p-2">
                    <legend class="ml-4 px-2 text-white font-semibold uppercase">I'll probably have: </legend>
                    <p class="text-white mb-2 ml-4">This section consists of resources that can't be taken for granted
                        and most likely out of your control but it's still possible to calculate with some degree of
                        accuracy.</p>
                </fieldset>

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
                <ArkFrame legend="Calculations">
                    <div
                        class="flex flex-row flex-wrap w-full px-6 justify-between font-semibold text-gray-100 text-2xl">
                        <h2 class="w-1/3 text-left">Day(s): {{ getDays }}</h2>
                        <h2 class="w-1/3 text-center">Week(s): {{ getWeeks }}</h2>
                        <h2 class="w-1/3 text-right">Month(s): 0</h2>
                        <hr class="w-full my-2">
                    </div>
                    <div class="flex flex-col gap-2 w-full px-6 justify-start font-light text-gray-100 text-md">
                        <div>
                            <h2 class="font-semibold text-lg text-center">Guaranteed</h2>
                            <ArkStat text="Current orundum(s)" :stat="usersResources.currentOrundums"
                                :condition="usersResources.currentOrundums" icon="orundum" />
                            <ArkStat text="Current permit(s)" :stat="usersResources.currentPermits"
                                :condition="usersResources.currentPermits" icon="permit" />
                            <ArkStat text="From OP exchange"
                                :stat="usersResources.sacrificeOPamount * rewards.orundumsPerOP"
                                :condition="usersResources.sacrificeOPamount" icon="orundum" />
                            <ArkStat text="From originium shards"
                                :stat="((usersResources.orundumFarmingStatic - (usersResources.orundumFarmingStatic % 2)) * rewards.orundumPerShard) / 2"
                                :condition="usersResources.orundumFarmingStatic" icon="orundum" />
                            <ArkStat text="From daily missions" :stat="getDays * rewards.dailyTasks"
                                :condition="getDays > 0" icon="orundum" />
                            <ArkStat text="From weekly missions" :stat="getWeeks * rewards.weekilyTasks"
                                :condition="getWeeks > 0" icon="orundum" />
                            <ArkStat text="From monthly card" :stat="getDays * rewards.monthlyCard"
                                :condition="usersResources.isMonthlyCard" icon="orundum" />
                            <ArkStat text="From annihilation(s)" :stat="usersResources.currentAnnihilation * getWeeks"
                                :condition="usersResources.currentAnnihilation" icon="orundum" />
                            <ArkStat class="text-red-700" text="This week's annihilation excluded"
                                :condition="usersResources.isThisWeekAnni" />
                            <ArkStat class="text-red-700" text="This week's missions excluded"
                                :condition="usersResources.isThisWeekTasks" />
                            <hr>
                            <h2 class="font-semibold text-lg text-center">Advanced</h2>
                            <hr>
                            <h2 class="font-semibold text-lg text-center">Big maybe</h2>
                        </div>
                        <hr>
                        <div class="flex flex-row flex-wrap w-full justify-between text-lg font-bold">
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <OrundumIcon class="w-6 h-6" /> {{ guaranteedOrundums > 0 ? guaranteedOrundums : 0 }}
                            </p>
                            <p class="flex flex-row gap-2 items-center justify-center">
                                <PermitIcon class="w-6 h-6" /> {{ guaranteedPermits > 0 ? guaranteedPermits : 0 }}
                            </p>
                            <p class="flex flex-row gap-2 items-center justify-center">Total pulls: {{ guaranteedPermits
                                + Math.floor(guaranteedOrundums / 600) || 0 }}</p>
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

const importantDates = ref([...events, ...annihilations])
const range = ref({
    start: new Date(),
    end: new Date()
});

const attributes = ref(importantDates)

const rewards = {
    dailyTasks: 100,
    monthlyCard: 200,
    weekilyTasks: 500,
    greenShopOrundum: 600,
    greenShopPermits: 5,
    yellowShopPermits: 38,
    rerunShopOrundum: 2000, // Per rerun
    orundumsPerOP: 180, // For 1
    day17login: 1, // Permit
    orundumPerShard: 20 // For 2
}

const usersResources = reactive({
    currentOrundums: 0,
    currentPermits: 0,
    currentAnnihilation: 1800,
    isThisWeekTasks: false,
    isThisWeekAnni: false,
    isMonthlyCard: false,
    isGreenShop: false,
    isYellowShop: false,
    isRerunShop: false,
    isOrundumFarming: false,
    isSacrificingOP: false,
    orundumFarmingStatic: 0,
    sacrificeOPamount: 0,
})

// milliseconds / 1000 to get secodns / 60 to get minutes / 60 to get hours / 24 to get days
const getDays = computed(() => (range.value.end.getTime() - range.value.start.getTime()) / 1000 / 60 / 60 / 24) // TODO: Include today & option to exclude it
// days / 7 in ceil to get WHOLE weeks
const getWeeks = computed(() => Math.ceil(getDays.value / 7)) // TODO: More accurate based on days of the week
// TODO: Months (with accuracy) for other sections

const guaranteedOrundums = computed(() => {
    // Initial
    let temp = usersResources.currentOrundums
    // Daily tasks
    temp += getDays.value * rewards.dailyTasks
    // Originium shards farming (It looks like this because it crafts only 2 for 20, so I've made a formula like this for consistency)
    // Simplyfied is usersResources.orundumFarmingStatic - (usersResources.orundumFarmingStatic % 2) * 10 (need to change rewards.orundumPerShard to 10)
    temp += ((usersResources.orundumFarmingStatic - (usersResources.orundumFarmingStatic % 2)) * rewards.orundumPerShard) / 2
    // OP Sacrifice 
    temp += usersResources.sacrificeOPamount * rewards.orundumsPerOP
    // Monthly card
    if (usersResources.isMonthlyCard) {
        temp += getDays.value * rewards.monthlyCard
        if (usersResources.isTodayTasks) {
            temp -= rewards.monthlyCard
        }
    }
    // Weekly tasks
    temp += getWeeks.value * rewards.weekilyTasks
    if (usersResources.isThisWeekTasks) {
        temp -= rewards.weekilyTasks
    }

    // Annihilations
    temp += getWeeks.value * usersResources.currentAnnihilation
    if (usersResources.isThisWeekAnni) {
        temp -= usersResources.currentAnnihilation
    }
    return temp
})

const guaranteedPermits = computed(() => {
    let temp = usersResources.currentPermits
    // Loops through the range of dates and adds 1 permit for daily login reward of every 17th day of the month.
    // +86400000 <- this addition is needed to exclude the first day in the range and include the last one
    for (let loopTime = range.value.start.getTime() + 86400000; loopTime < range.value.end.getTime() + 86400000; loopTime += 86400000) {
        let loopDay = new Date(loopTime)
        if (loopDay.getDate() == 17) {
            temp += rewards.day17login;

        }
    }
    return temp
})

const totalPulls = computed(() => {

})

</script>