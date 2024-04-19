import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const usePullsStore = defineStore("pulls", () => {
  const TODAY = new Date();
  const REWARDS_GUARANTEED = {
    daily_missions_orundum: 100, // Orundum
    monthly_card_orundum: 200, // Orundum
    weekily_missions_orundum: 500, // Orundum
    orundum_for_originium_prime: 180, // For 1 OP
    orundum_for_originium_shards: 10, // You have to craft 2 to get 20
    login_on_day_17: 1, // Permit
  };
  const REWARDS_ADVANCED = {
    greenShopOrundum: 600,
    greenShopPermits: 5,
    yellowShopPermits: 38,
    rerunShopOrundum: 2000, // Per rerun
  };
  const REWARDS_MAYBE = {};

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

  const preventNegative = (target) => {
    return target < 0 ? 0 : target;
  };

  const getUserDailyRewards = (days) => {
    // Yes, I've used casting to convert bool into number
    return preventNegative(
      (days - Number(user_data.is_excluded_today)) *
        REWARDS_GUARANTEED.daily_missions_orundum
    );
  };
  const getUserWeeklyRewards = (weeks) => {
    return preventNegative(
      (weeks - Number(user_data.is_excluded_week)) *
        REWARDS_GUARANTEED.weekily_missions_orundum
    );
  };
  const getUserMonthlyCardRewards = (days) => {
    return preventNegative(
      (days - Number(user_data.is_excluded_today)) *
        REWARDS_GUARANTEED.monthly_card_orundum
    );
  };
  const getUserAnnihilationRewards = (weeks) => {
    return preventNegative(
      (weeks - Number(user_data.is_excluded_annihilation)) *
        user_data.current_annihilation_reward
    );
  };
  const getUserShardsToOrundum = () => {
    let temp = user_data.current_shards - (user_data.current_shards % 2); // Removes oddity because shards crafting is 2 for 20
    temp = temp * REWARDS_GUARANTEED.orundum_for_originium_shards;
    return preventNegative(temp);
  };
  const getUserPrimeToOrundum = () => {
    let temp =
      user_data.current_prime * REWARDS_GUARANTEED.orundum_for_originium_prime;
    return preventNegative(temp);
  };
  const getUserPermitsForLogin = (start, end) => {
    const day = 86400000; // milliseconds
    // Loops through the range of dates and adds 1 permit for daily login reward of every 17th day of the month.
    // +86400000 <- this addition is needed to exclude the first day in the range and include the last one
    let temp = 0;
    for (
      let loopTime = start + (user_data.is_excluded_today ? day : 0);
      loopTime < end + day;
      loopTime += day
    ) {
      let loopDay = new Date(loopTime);
      if (loopDay.getDate() == 17) {
        temp += REWARDS_GUARANTEED.login_on_day_17;
      }
    }
    return preventNegative(temp);
  };

  return {
    user_data,
    getUserDailyRewards,
    getUserMonthlyCardRewards,
    getUserWeeklyRewards,
    getUserAnnihilationRewards,
    getUserShardsToOrundum,
    getUserPrimeToOrundum,
    getUserPermitsForLogin,
  };
});
