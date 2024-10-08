import { defineStore } from "pinia";
import { reactive, computed, watch } from "vue";
import { useCalendarStore } from "./calendar";

export const useMaybeStore = defineStore("maybe", () => {
  const REWARDS_MAYBE = {
    // mini events that last a week have nothing of value
    event_purchasable_permits: 3, // Normal, reruns and limited give you an option to buy 3 permits
    event_limited_permits: 24, // 1 HH on login and 1 everyday for 2 weeks
    event_collab_permits: 20, // Collabs like MH and R6 gave us 10 permits on login and 10 on 8th day
    event_orundum_lottery: 7000, // 14 * 500. 500 is an arithmetic mean of 200 ... 800 * 14 days of lottery. Pity isn't accounted for.
    orundum_per_paradox_completed: 200, // They often add some paradoxes with events which may give you an additional pull
    orundum_per_annihilations_firsttime: 1500, // Except for the first 2 anni's every new one gives you a 1.5k orundums for a first time full clear 400\400
    orundum_for_originium_shards: 10, // You have to craft 2 to get 20
  };
  const calendarStore = useCalendarStore();

  const user_data = reactive({
    is_limited: false,
    is_lottery: false,
    is_anniversary: false,
    is_collab: false,
    potential_paradoxes: 0,
    potential_annihilations: 0,
    potential_events: 0,
    potential_shards_daily: 0,
  });

  watch(
    // Unchecks everything to update calculations
    () => user_data.is_limited,
    (limited) => {
      if (!limited) {
        user_data.is_anniversary = false;
        user_data.is_collab = false;
        user_data.is_lottery = false;
      }
    }
  );

  watch(
    // Unchecks collab
    () => user_data.is_anniversary,
    (anni) => {
      if (anni) {
        user_data.is_collab = false;
      }
    }
  );

  watch(
    // Unchecks collab
    () => user_data.is_collab,
    (collab) => {
      if (collab) {
        user_data.is_anniversary = false;
        user_data.is_lottery = false;
      }
    }
  );

  const getParadoxReward = computed(() => {
    return REWARDS_MAYBE.orundum_per_paradox_completed * user_data.potential_paradoxes;
  });

  const getAnnihilationFirstTimeRewards = computed(() => {
    return REWARDS_MAYBE.orundum_per_annihilations_firsttime * user_data.potential_annihilations;
  });

  const getNewEventRewards = computed(() => {
    return REWARDS_MAYBE.event_purchasable_permits * user_data.potential_events;
  });

  const getShardsForFarm = computed(() => {
    let shards_total = user_data.potential_shards_daily * calendarStore.getDays
    let shards_even = shards_total - (shards_total % 2)
    return REWARDS_MAYBE.orundum_for_originium_shards * shards_even
  });

  const getLimitedRewards = computed(() => {
    if (user_data.is_anniversary) return REWARDS_MAYBE.event_limited_permits;
    else if (user_data.is_collab) return REWARDS_MAYBE.event_collab_permits;
    else return 0;
  });

  const getMaybeOrundum = computed(() => {
    return getParadoxReward.value + getAnnihilationFirstTimeRewards.value + getShardsForFarm.value + getLotteryReward()
  });

  const getMaybePermits = computed(() => {
    return getNewEventRewards.value + getLimitedRewards.value
  });

  const getLotteryReward = () => {
    if (user_data.is_lottery) return REWARDS_MAYBE.event_orundum_lottery;
    else return 0;
  }
  return {
    user_data,
    getParadoxReward,
    getAnnihilationFirstTimeRewards,
    getNewEventRewards,
    getShardsForFarm,
    getLimitedRewards,
    getLotteryReward,
    getMaybeOrundum,
    getMaybePermits,
  };
});
