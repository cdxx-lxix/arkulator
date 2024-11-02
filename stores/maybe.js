import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import { useCalendarStore } from "./calendar";
import { REWARDS_MAYBE, EVENT_TYPES, REWARDS_GUARANTEED } from "./commonactions";

export const useMaybeStore = defineStore("maybe", () => {
  const calendarStore = useCalendarStore();

  const user_data = reactive({
    potential_paradoxes: 0,
    potential_annihilations: 0,
    potential_shards_daily: 0,
    event_stack: [],
  });

  const getSequenceRewards = computed(() => {
    // Initialize accumulator object with default values
    const accumulator = {
      permits: 0,
      orundum: 0,
      statistics: [],
    };

    // Event handler mapping for each event type
    const eventHandlers = {
      10: (element, acc) => handleStandardEvent(element, acc),
      20: (element, acc) => handleAnniversaryEvent(element, acc),
      30: (element, acc) => handleCollaborationEvent(element, acc),
      40: (element, acc) => handleTrialsEvent(element, acc),
      50: (element, acc) => handleStoryEvent(element, acc),
    };

    // Process each event using the handler mapping
    user_data.event_stack.forEach((element) => {
      const handler = eventHandlers[element.event_type];
      if (handler) {
        handler(element, accumulator);
      }
    });

    return accumulator;
  });

    /** 
   * 
   * Helper functions for each event type 
   * 
   * */

  function handleStandardEvent(element, acc) {
    const orundumFromPrime = element.event_op * REWARDS_GUARANTEED.orundum_for_originium_prime;
    const eventPulls = REWARDS_MAYBE.event_purchasable_permits + Math.floor(orundumFromPrime / 600)

    acc.permits += REWARDS_MAYBE.event_purchasable_permits;
    acc.orundum += orundumFromPrime;
    acc.statistics.push({
      event: element.event_name,
      pulls: eventPulls,
      details: [
        { name: "maybe.calculations.detailed.permits", amount: REWARDS_MAYBE.event_purchasable_permits },
        { name: "maybe.calculations.detailed.prime", amount: orundumFromPrime },
      ],
    });
  }

  function handleAnniversaryEvent(element, acc) {
    const limitedPermits = element.is_free_pulls ? REWARDS_MAYBE.event_limited_permits : 0;
    const lotteryOrundum = element.is_lottery ? REWARDS_MAYBE.event_orundum_lottery : 0;
    const orundumFromPrime = element.event_op * REWARDS_GUARANTEED.orundum_for_originium_prime;
    const eventPulls = REWARDS_MAYBE.event_purchasable_permits + limitedPermits + Math.floor((orundumFromPrime + lotteryOrundum) / 600)

    acc.permits += REWARDS_MAYBE.event_purchasable_permits + limitedPermits;
    acc.orundum += lotteryOrundum + orundumFromPrime;
    acc.statistics.push({
      event: element.event_name,
      pulls: eventPulls,
      details: [
        { name: "maybe.calculations.detailed.permits", amount: REWARDS_MAYBE.event_purchasable_permits },
        { name: "maybe.calculations.detailed.limited", amount: limitedPermits, special: true },
        { name: "maybe.calculations.detailed.lottery", amount: lotteryOrundum },
        { name: "maybe.calculations.detailed.prime", amount: orundumFromPrime },
      ],
    });
  }

  function handleCollaborationEvent(element, acc) {
    const collabPermits = element.is_free_pulls ? REWARDS_MAYBE.event_collab_permits : 0;
    const orundumFromPrime = element.event_op * REWARDS_GUARANTEED.orundum_for_originium_prime;
    const eventPulls = REWARDS_MAYBE.event_purchasable_permits + collabPermits + Math.floor(orundumFromPrime / 600)

    acc.permits += REWARDS_MAYBE.event_purchasable_permits + collabPermits;
    acc.orundum += orundumFromPrime;
    acc.statistics.push({
      event: element.event_name,
      pulls: eventPulls,
      details: [
        { name: "maybe.calculations.detailed.permits", amount: REWARDS_MAYBE.event_purchasable_permits },
        { name: "maybe.calculations.detailed.limited", amount: collabPermits, special: true },
        { name: "maybe.calculations.detailed.prime", amount: orundumFromPrime },
      ],
    });
  }

  function handleTrialsEvent(element, acc) {
    acc.permits += REWARDS_MAYBE.event_trials_permits;
    acc.statistics.push({
      event: element.event_name,
      pulls: REWARDS_MAYBE.event_trials_permits,
      details: [{ name: "maybe.calculations.detailed.permits", amount: REWARDS_MAYBE.event_trials_permits }],
    });
  }

  function handleStoryEvent(element, acc) {
    const orundumFromPrime = element.event_op * REWARDS_GUARANTEED.orundum_for_originium_prime;
    const eventPulls = Math.floor(orundumFromPrime / 600)

    acc.orundum += orundumFromPrime;
    acc.statistics.push({
      event: element.event_name,
      pulls: eventPulls,
      details: [{ name: "maybe.calculations.detailed.prime", amount: orundumFromPrime }],
    });
  }

  /** 
   * 
   * END OF HELPER FUNCTIONS 
   * 
   * */

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
