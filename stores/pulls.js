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
    // gcs- green certificate shop
    gcs_phaseone_orundums: 600, // 240 GC (40*6)
    gcs_phaseone_permits: 2, // 480 GC (240*2)
    gcs_phaseone_budget_cost: 720, // Orundums and permits only
    gcs_phaseone_total_cost: 1490, // Total amount to unlock P2
    gcs_phasetwo_permits: 2, // P2 contains only 2 permits
    gcs_phasetwo_permits_cost: 900, // 2 permits for 450 each on P2
    gcs_phasetwo_total_cost: 8000, // In addition to 1490 for P1 you need this much to unlock P3
    gcs_phasethree_orundum_cost: 50,
    gcs_phasethree_orundum_gain: 30, // 30 orundums for 50 GC in unlimited store on P3
    gcs_monthly_login_11th: 10, // Obtain 10 GC for 11 days login streak
    gcs_weekly_mission_rewards: 20, // Obtain 20 GC from weekly missions
    gcs_threestar_recruitment: 5, // GC per 3*
    gcs_fourstar_recruitment: 30, // GC per 4*
    // ycs - yellow certificate shop
    ycs_lvlone_permits: 1,
    ycs_lvlone_price: 10,
    ycs_lvltwo_permits: 2,
    ycs_lvltwo_price: 18,
    ycs_lvlthree_permits: 5,
    ycs_lvlthree_price: 40,
    ycs_lvlfour_permits: 10,
    ycs_lvlfour_price: 70,
    ycs_lvlfive_permits: 20,
    ycs_lvlfive_price: 120,
    ycs_full_permits: 38,
    ycs_full_price: 258,
    ycs_monthly_login_25th: 5, // Obtain 10 YC for 25 days login streak
    ycs_fourstar_recruitment: 1, // YC per 4*
    // rcs - rerun certificate shop
    rcs_price_per_orundum: 20, // 20 RC per 20 orundums
    rcs_orundums_gain_per_purchase: 100, // 100 orundums per 20 RC
    rcs_stock_update_per_rerun: 20, // They add +20 (2000 orundums) every rerun event
    rcs_minimal_event_currency_gain: 1700, // They amount of Intellegence Certificates given per rerun isn't stable. So this is the minimum instead.
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
  const getRewardsForSpecificDate = (start, end, specific_date, reward) => {
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
      if (loopDay.getDate() == specific_date) {
        temp += reward;
      }
    }
    return preventNegative(temp);
  };
  const getUserPermitsForLogin = (start, end) => {
    return getRewardsForSpecificDate(
      start,
      end,
      17,
      REWARDS_GUARANTEED.login_on_day_17
    );
  };
  const getUserGreenCertsForLogin = (start, end) => {
    return getRewardsForSpecificDate(
      start,
      end,
      11,
      REWARDS_ADVANCED.gcs_monthly_login_11th
    );
  };
  const getUserYellowCertsForLogin = (start, end) => {
    return getRewardsForSpecificDate(
      start,
      end,
      25,
      REWARDS_ADVANCED.ycs_monthly_login_25th
    );
  };
  const getUserGreenCertsWeekly = (weeks) => {
    return preventNegative(
      (weeks - Number(user_data.is_excluded_week)) *
        REWARDS_ADVANCED.gcs_weekly_mission_rewards
    );
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
