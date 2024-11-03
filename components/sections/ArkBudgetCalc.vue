<template>
    <ArkFrame legend="budget.header">
        <!-- <ArkFrameHelp description="budget.subtext" :isbutton="false" modalid="budget-help" /> -->
        <div class="flex flex-col gap-2 w-full px-2 sm:px-6 justify-start font-light text-gray-100 text-md">
            <div class="flex flex-row flex-wrap gap-3 w-full justify-start text-lg font-bold">
                <p class="flex flex-row gap-2 items-center justify-center"
                    :class="totalPulls > 0 ? 'text-blue-ribbon-700' : totalPulls === 0 ? 'text-amber-300' : 'text-red-600'">
                    <img :src="recruit_bag" alt="recruitment bag" class="w-6 h-6"> {{ totalPulls }}
                </p>
            </div>
            <hr>
            <div v-for="entry, index in budget_entries" :key="index" v-show="entry.operator"
                class="grid grid-cols-3 w-full justify-between border-b border-gray-700 border-dashed mb-1">
                <p class="text-ellipsis overflow-hidden ...">{{ entry.operator }}</p>
                <p class="text-center">{{ entry.banner }}</p>
                <p class="text-right">{{ entry.pulls }}</p>
            </div>
            <hr>
            <div v-for="entry, index in budget_entries" :key="index" class="w-full grid grid-cols-4 sm:grid-cols-10 gap-3 mb-2 border-b border-white/30 pb-2">
                <div class="col-span-4 sm:col-span-3">
                    <label class="block mb-2 text-sm font-medium text-white">{{ $t('budget.operator_field') }} #{{ index+1 }}</label>
                    <input type="text" v-model="entry.operator" maxlength="50"
                        class="rounded-lg block flex-1 min-w-0 w-full text-sm p-2.5 bg-gray-700 border-gray-600 text-white outline-none">
                </div>
                <ArkDropdown class="col-span-4 sm:col-span-3" label="budget.banner_type" :options="banner_types"
                    v-model:selectvalue="entry.banner" />
                <ArkInput class="w-full col-span-3" id="expected_pulls" min="0"
                    v-model:inputvalue="entry.pulls" label="budget.pulls_expected">
                </ArkInput>
                <button class="col-span-1 flex justify-center flex-col items-center h-full cursor-default" id="remove-operator-from-list" aria-label="Remove Operator From List">
                    <p class="block mb-2 text-sm font-medium text-transparent">none</p>
                    <RemoveButtonIcon @click="removeEntry(index)"
                        class="w-6 h-6 fill-blue-ribbon-700 hover:fill-red-600 ark-smooth-animation cursor-pointer" />
                </button>
            </div>
            <button
                class="flex justify-center items-center py-2 rounded-lg ark-smooth-animation hover:bg-blue-ribbon-700 fill-blue-ribbon-700 hover:fill-white"
                @click="addNewEntry" id="add-new-operator" aria-label="Add New Operator">
                <AddButtonIcon class="w-6 h-6 " />
            </button>
        </div>
    </ArkFrame>
</template>

<script setup>
import recruit_bag from '../assets/images/recruit_bag.png';
import { REWARDS_GUARANTEED } from '../stores/commonactions'
const props = defineProps([
    'orundum',
    'permits'
])

const budget_entries = ref([])

const banner_types = [
    { name: "budget.banner_standard", value: "∞" },
    { name: "budget.banner_collab", value: "100% on 120" },
    { name: "budget.banner_anniversary", value: "100% on 300" },
    { name: "budget.banner_joint", value: "25% in ~75" },
    { name: "budget.banner_debut", value: "100% on 225" },
    { name: "budget.banner_special", value: "???" },
];

const addNewEntry = () => {
    return budget_entries.value.push({ pulls: 0, operator: '', banner: 0 })
}

const removeEntry = (index) => {
    if (budget_entries.value.length >= 0) {
        return budget_entries.value.splice(index, 1)

    } else {
        return
    }
}


const totalPulls = computed(() => {
    let recruit_cost = 0
    budget_entries.value.forEach((entry) => {
        recruit_cost += entry.pulls
    })
    return Math.floor(props.orundum / REWARDS_GUARANTEED.orundum_per_pull) + (props.permits - recruit_cost)
})
</script>