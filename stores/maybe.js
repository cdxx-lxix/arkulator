import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useCalendarStore } from "./calendar";

export const useMaybeStore = defineStore("maybe", () => {
  const REWARDS_MAYBE = {
    // mini events that last a week have nothing of value
    event_purchasable_permits: 3, // Normal, reruns and limited give you an option to buy 3 permits
    event_limited_permits: 24, // 10 HH on login and 1 everyday for 2 weeks
    event_collab_permits: 20, // Collabs like MH and R6 gave us 10 permits on login and 10 on 8th day
    event_orundum_lottery: 7000, // 14 * 500. 500 is an arithmetic mean of 200 ... 800 * 14 days of lottery. Pity isn't accounted for.
    event_trials_permits: 1, // You get 1 HH at some lvl
    orundum_per_paradox_completed: 200, // They often add some paradoxes with events which may give you an additional pull
    orundum_per_annihilations_firsttime: 1500, // Except for the first 3 annih's every new one gives you a 1.5k orundums for a first time full clear 400\400
    orundum_for_originium_shards: 10, // You have to craft 2 to get 20
  };
  const EVENT_TYPES = [
    { name: "maybe.standard", value: 10 },
    { name: "maybe.anniversary", value: 20 },
    { name: "maybe.collab", value: 30 },
    { name: "maybe.trials", value: 40 },
  ];
  const calendarStore = useCalendarStore();
  const pullsStore = usePullsStore();

  const user_data = reactive({
    potential_paradoxes: 0,
    potential_annihilations: 0,
    potential_shards_daily: 0,
    event_stack: [],
  });

  const getSequenceRewards = computed(() => {
    let permits = 0; // Total amount of permits including limited
    let orundums = 0; // Lotteries + OP to Orundum conversion
    let statistics = [] // Array to hold detailed statistic for Stats section
    user_data.event_stack.forEach((element) => {
      switch (element.event_type) {
        case 10: // Standard event or rerun
          return (permits += REWARDS_MAYBE.event_purchasable_permits), (orundums += element.event_op * pullsStore.REWARDS_GUARANTEED.orundum_for_originium_prime);
        case 20: // Anniversary even
          return (
            (permits += REWARDS_MAYBE.event_purchasable_permits),
            (permits += element.is_free_pulls ? REWARDS_MAYBE.event_limited_permits : 0),
            (permits_limited += element.is_free_pulls ? REWARDS_MAYBE.event_limited_permits : 0),
            (orundums += element.is_lottery ? REWARDS_MAYBE.event_orundum_lottery : 0),
            (orundums += element.event_op * pullsStore.REWARDS_GUARANTEED.orundum_for_originium_prime)
          );
        case 30: // Collaboration
          return (
            (permits += REWARDS_MAYBE.event_purchasable_permits),
            (permits += element.is_free_pulls ? REWARDS_MAYBE.event_collab_permits : 0),
            (permits_limited += element.is_free_pulls ? REWARDS_MAYBE.event_collab_permits : 0),
            (orundums += element.event_op * pullsStore.REWARDS_GUARANTEED.orundum_for_originium_prime)
          );
        case 40: // Trials for Navigator
          return (permits += REWARDS_MAYBE.event_trials_permits);
      }
    });
    return { permits: permits, orundum: orundums };
  });

  const getParadoxReward = computed(() => {
    return REWARDS_MAYBE.orundum_per_paradox_completed * user_data.potential_paradoxes;
  });

  const getAnnihilationFirstTimeRewards = computed(() => {
    return REWARDS_MAYBE.orundum_per_annihilations_firsttime * user_data.potential_annihilations;
  });

  const getShardsForFarm = computed(() => {
    let shards_total = user_data.potential_shards_daily * calendarStore.getDays;
    let shards_even = shards_total - (shards_total % 2);
    return REWARDS_MAYBE.orundum_for_originium_shards * shards_even;
  });

  const getMaybeOrundum = computed(() => {
    return getParadoxReward.value + getAnnihilationFirstTimeRewards.value + getShardsForFarm.value;
  });

  return {
    user_data,
    EVENT_TYPES,
    getParadoxReward,
    getAnnihilationFirstTimeRewards,
    getShardsForFarm,
    getMaybeOrundum,
    getSequenceRewards,
  };
});
