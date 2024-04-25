import { reactive } from "vue";
import { defineStore } from "pinia";
import { preventNegative, getRewardsForSpecificDate } from "./commonactions";
import { useCalendarStore } from "./calendar";

export const usePullsStore = defineStore("pulls", () => {
  const calendarStore = useCalendarStore();
  const REWARDS_GUARANTEED = {
    daily_missions_orundum: 100, // Orundum
    monthly_card_orundum: 200, // Orundum
    weekily_missions_orundum: 500, // Orundum
    orundum_for_originium_prime: 180, // For 1 OP
    orundum_for_originium_shards: 10, // You have to craft 2 to get 20
    login_on_day_17: 1, // Permit
  };
  const REWARDS_MAYBE = {
    // mini events that last a week have nothing of value
    event_purchasable_permits: 3, // Normal, reruns and limited give you an option to buy 3 permits
    event_limited_permits: 24, // 1 HH on login and 1 everyday for 2 weeks
    event_collab_permits: 10, // Collabs like MH and R6 gave us 10 permits on login
    event_orundum_lottery: 5600, // 14 * 400 because you can get from 200 to 800 with pity on 200 & 300 to cover for that so at least 5600 is guaranteed
    orundum_per_paradox_completed: 200, // They often add some paradoxes with events which may give you an additional pull
    orundum_per_annihilations_firsttime: 1500, // Except for the first 2 anni's every new one gives you a 1.5k orundums for a first time full clear 400\400
  };

  const user_data = reactive({
    current_orundums: 0,
    current_permits: 0,
    current_annihilation_reward: 1800, // 1200 - 1800 with step 50, 1800 default
    current_shards: 0,
    current_prime: 0,
    is_excluded_today: false,
    is_excluded_week: false,
    is_excluded_annihilation: false,
    is_monthly_card_active: false,
    login_permits_in_range: 0,
  });

  const getUserDailyRewards = (days) => {
    // Yes, I've used casting to convert bool into number
    return preventNegative((days - Number(calendarStore.calendar_data.is_excluded_today)) * REWARDS_GUARANTEED.daily_missions_orundum);
  };
  const getUserWeeklyRewards = (weeks) => {
    return preventNegative((weeks - Number(calendarStore.calendar_data.is_excluded_week)) * REWARDS_GUARANTEED.weekily_missions_orundum);
  };
  const getUserMonthlyCardRewards = (days) => {
    return preventNegative((days - Number(calendarStore.calendar_data.is_excluded_today)) * REWARDS_GUARANTEED.monthly_card_orundum);
  };
  const getUserAnnihilationRewards = (weeks) => {
    return preventNegative((weeks - Number(calendarStore.calendar_data.is_excluded_annihilation)) * user_data.current_annihilation_reward);
  };
  const getUserShardsToOrundum = () => {
    let temp = user_data.current_shards - (user_data.current_shards % 2); // Removes oddity because shards crafting is 2 for 20
    temp = temp * REWARDS_GUARANTEED.orundum_for_originium_shards;
    return preventNegative(temp);
  };
  const getUserPrimeToOrundum = () => {
    let temp = user_data.current_prime * REWARDS_GUARANTEED.orundum_for_originium_prime;
    return preventNegative(temp);
  };

  const getUserPermitsForLogin = (start, end) => {
    return getRewardsForSpecificDate(start, end, 17, REWARDS_GUARANTEED.login_on_day_17, calendarStore.calendar_data.is_excluded_today);
  };

  const getGuaranteedOrundums = computed(() => {
    let temp = user_data.current_orundums;
    temp += getUserDailyRewards(calendarStore.getDays);
    if (user_data.is_monthly_card_active) {
      temp += getUserMonthlyCardRewards(calendarStore.getDays);
    }
    temp += getUserWeeklyRewards(calendarStore.getDays);
    temp += getUserAnnihilationRewards(calendarStore.getWeeks);
    temp += getUserPrimeToOrundum();
    temp += getUserShardsToOrundum();
    return preventNegative(temp);
  });

  const getGuaranteedPermits = computed(() => {
    let temp = user_data.current_permits;
    user_data.login_permits_in_range = getUserPermitsForLogin(calendarStore.range.start.getTime(), calendarStore.range.end.getTime());
    temp += user_data.login_permits_in_range;
    return preventNegative(temp);
  });

  return {
    user_data,
    getUserDailyRewards,
    getUserMonthlyCardRewards,
    getUserWeeklyRewards,
    getUserAnnihilationRewards,
    getUserShardsToOrundum,
    getUserPrimeToOrundum,
    getUserPermitsForLogin,
    getGuaranteedOrundums,
    getGuaranteedPermits,
  };
});
