<template>
    <main class="grid grid-cols-2">
        <ul class="flex flex-col gap-2">
            <VDatePicker v-model.range="range" mode="date" is-dark="true" color="pink" :first-day-of-week="2" show-iso-weeknumbers
                :min-date="new Date()" :max-date="new Date(2030, 1, 1)" :attributes="attributes" :columns="2" />
            <li>Current orundums:
                <input type="number" min="0" v-model="usersResources.currentOrundums" />
            </li>
            <li>Current permits
                <input type="number" min="0" v-model="usersResources.currentPermits" />
            </li>
            <li>Annihilation weekly reward
                <input type="number" min="1200" max="1800" step="50" v-model="usersResources.currentAnnihilation" />
            </li>
            <li>Monthly card (yes/no)
                <input type="checkbox" v-model="usersResources.isMonthlyCard"   :value="usersResources.isMonthlyCard" />
            </li>
            <li>This week's tasks (yes/no)
                <input type="checkbox" v-model="usersResources.isThisWeekTasks"   :value="usersResources.isThisWeekTasks" />
            </li>
            <li>This week's annihilations (yes/no)
                <input type="checkbox" v-model="usersResources.isThisWeekAnni" :value="usersResources.isThisWeekAnni" />
            </li>
            <li>Orundum farm (yes/no)
                <input type="checkbox" v-model="usersResources.isOrundumFarming"   :value="usersResources.isOrundumFarming" />
            </li>
            <li>Orundums farmed daily
                <label for="orundumfarmdaily">Daily farm
                    <input id="orundumfarmdaily" type="number" min="0" step="10" v-model="usersResources.orundumFarmingDayly" :disabled="!usersResources.isOrundumFarming || usersResources.orundumFarmingStatic" />
                </label>
                OR
                <label for="orundumfarmsum">Single sum
                    <input id="orundumfarmsum" type="number" min="0" step="10" v-model="usersResources.orundumFarmingStatic" :disabled="!usersResources.isOrundumFarming || usersResources.orundumFarmingDayly" />
                </label>
            </li>
            <li>Are you willing to sacrifice OP? (yes/no)
                <input type="checkbox" v-model="usersResources.isSacrificingOP"   :value="usersResources.isSacrificingOP" />
            </li>
            <li>OP Sacrifice amount
                <input type="number" min="0" v-model="usersResources.sacrificeOPamount" :disabled="!usersResources.isSacrificingOP" />
            </li>
            <hr>
            <li>Green shop (yes/no)
                <input type="checkbox" v-model="usersResources.isGreenShop" :value="usersResources.isGreenShop" />
            </li>
            <li>Yellow shop (yes/no)
                <input type="checkbox" v-model="usersResources.isYellowShop"   :value="usersResources.isYellowShop" />
            </li>
            <li>Rerun shop (yes/no)
                <input type="checkbox" v-model="usersResources.isRerunShop"   :value="usersResources.isRerunShop" />
            </li>
            <!-- Additionals: new paradoxes, annihilations first times, hypergryph mails, Event shops, Event type -->
        </ul>
        <div>
            <button type="button" @click="check">Check range</button>
            <div>
                <p>Days: {{ getDays }}</p>
                <p>Weeks: {{ getWeeks }}</p>
                <p>Guaranteed orundums: {{ guaranteedOrundums > 0 ? guaranteedOrundums : 0 }}</p>
                <p>Guaranteed permits: {{ guaranteedPermits > 0 ? guaranteedPermits : 0 }}</p>
                <p>Guaranteed pulls: {{ guaranteedPermits + Math.floor(guaranteedOrundums / 600) || 0 }}</p>
            </div>
        </div>
    </main>
</template>

<script setup>
import events from '~/data/events';
import annihilations from '~/data/annihilations';

const importantDates = ref([...events, ...annihilations])

const today = new Date()
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
    yellowShopPermits: 37,
    rerunShopOrundum: 2000, // Per rerun
    orundumsPerOP: 180,
    day17login: 1, //Permit

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
    orundumFarmingDayly: 0,
    orundumFarmingStatic: 0,
    sacrificeOPamount: 0,
})

const getDays = computed(() => (range.value.end.getTime() - range.value.start.getTime()) / 1000 / 60 / 60 / 24)
const getWeeks = computed(() => Math.ceil(getDays.value / 7))

const guaranteedOrundums = computed(() => {
    // Initial
    let temp = usersResources.currentOrundums

    // Daily tasks
    temp += getDays.value * rewards.dailyTasks

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

    // Orundum farming
    if (usersResources.isOrundumFarming) {
        if (usersResources.orundumFarmingDayly) {
            temp += getDays.value * usersResources.orundumFarmingDayly
        } else {
            temp += usersResources.orundumFarmingStatic
        }
    }

    // OP Sacrifice
    if (usersResources.isSacrificingOP) {
        temp += usersResources.sacrificeOPamount * rewards.orundumsPerOP
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
            temp += rewards.day17login
        }
    }
    return temp
})

const totalPulls = computed(() => {

})

const check = () => {
    console.log(usersResources)
    console.log(range.value.start.getDate())
}

</script>