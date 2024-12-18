import { reactive } from "vue";
import { defineStore } from "pinia";
import { preventNegative, getRewardsForSpecificDate, REWARDS_GUARANTEED } from "./commonactions";
import { useCalendarStore } from "./calendar";

export const usePullsStore = defineStore("pulls", () => {
  const calendarStore = useCalendarStore();
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

  const getUserDailyRewards = () => {
    // Yes, I've used casting to convert bool into number
    return preventNegative((calendarStore.getDays - Number(calendarStore.calendar_data.is_excluded_today)) * REWARDS_GUARANTEED.daily_missions_orundum);
  };
  const getUserWeeklyRewards = () => {
    return preventNegative((calendarStore.getWeeks - Number(calendarStore.calendar_data.is_excluded_week)) * REWARDS_GUARANTEED.weekily_missions_orundum);
  };
  const getUserMonthlyCardRewards = () => {
    return preventNegative((calendarStore.getDays - Number(calendarStore.calendar_data.is_excluded_today)) * REWARDS_GUARANTEED.monthly_card_orundum);
  };
  const getUserAnnihilationRewards = () => {
    return preventNegative((calendarStore.getWeeks - Number(calendarStore.calendar_data.is_excluded_annihilation)) * user_data.current_annihilation_reward);
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
    temp += getUserDailyRewards();
    if (user_data.is_monthly_card_active) {
      temp += getUserMonthlyCardRewards();
    }
    temp += getUserWeeklyRewards();
    temp += getUserAnnihilationRewards();
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
