import { reactive, watch } from "vue";
import { defineStore } from "pinia";
import { preventNegative, getRewardsForSpecificDate, REWARDS_ADVANCED } from "./commonactions";
import { useCalendarStore } from "./calendar";

export const useAdvancedStore = defineStore("advanced", () => {
  const calendarStore = useCalendarStore();
  const user_data = reactive({
    // Green shop
    is_included_gcs: false,
    is_phase_three: false,
    gcs_current_certs: 0,
    gcs_recruitment: 0,
    gcs_selected_strategy: 0,
    gcs_selected_plan: 0,
    // Yellow shop
    is_included_ycs: false,
    is_included_ycs_recruitment: false,
    ycs_current_certs: 0,
    ycs_phase: 0,
    // Rerun shop
    is_included_rerun: false,
    rerun_current_certs: 0,
    rerun_orundum_stock: 0,
    rerun_encounters: 0,
  });

  const user_recruitment_strategies = [
    { name: "advanced.strategies.minimum", value: 10 },
    { name: "advanced.strategies.average", value: 20 },
    { name: "advanced.strategies.maximum", value: 30 },
  ];
  const user_gcs_phases = [
    { name: "advanced.gcs_phases.budget", value: 10 },
    { name: "advanced.gcs_phases.normal", value: 20 },
  ];
  const user_ycs_phases = [
    { name: "advanced.permitphases.one", value: 10 },
    { name: "advanced.permitphases.two", value: 20 },
    { name: "advanced.permitphases.twos", value: 25 },
    { name: "advanced.permitphases.three", value: 30 },
    { name: "advanced.permitphases.threes", value: 35 },
    { name: "advanced.permitphases.four", value: 40 },
    { name: "advanced.permitphases.fours", value: 45 },
    { name: "advanced.permitphases.five", value: 50 },
    { name: "advanced.permitphases.fives", value: 55 },
  ];

  watch(
    // This watcher unchecks infinite buyout if a user left it checked and unchecked green shop
    () => user_data.is_included_gcs,
    (gcs) => {
      if (!gcs) {
        user_data.is_phase_three = false;
      }
    }
  );
  const getUserGreenCertsForLogin = () => {
    return getRewardsForSpecificDate(
      calendarStore.range.start.getTime(),
      calendarStore.range.end.getTime(),
      11,
      REWARDS_ADVANCED.gcs_monthly_login_11th,
      calendarStore.calendar_data.is_excluded_today
    );
  };
  const getUserYellowCertsForLogin = () => {
    return getRewardsForSpecificDate(
      calendarStore.range.start.getTime(),
      calendarStore.range.end.getTime(),
      25,
      REWARDS_ADVANCED.ycs_monthly_login_25th,
      calendarStore.calendar_data.is_excluded_today
    );
  };
  const getUserGreenCertsWeekly = () => {
    return preventNegative((calendarStore.getWeeks - Number(calendarStore.calendar_data.is_excluded_week)) * REWARDS_ADVANCED.gcs_weekly_mission_rewards);
  };
  const getUserOrundumInfiniteBuyout = () => {
    return preventNegative(Math.floor(user_data.gcs_current_certs / REWARDS_ADVANCED.gcs_phasethree_orundum_cost) * REWARDS_ADVANCED.gcs_phasethree_orundum_gain);
  };

  const getGreenCertsForRecruitment = () => {
    switch (user_data.gcs_selected_strategy) {
      case 10:
        // Strategy - Absolute minimum. Counts every recruitment as 3*
        return preventNegative(user_data.gcs_recruitment * REWARDS_ADVANCED.gcs_threestar_recruitment * calendarStore.getDays);
      case 20:
        // Strategy - Predicted average. Counts 3\4 as 3* and 1\4 as 4*
        let fourstars = Math.floor((user_data.gcs_recruitment * calendarStore.getDays) / 4);
        let threestars = user_data.gcs_recruitment * calendarStore.getDays - fourstars;
        return preventNegative(threestars * REWARDS_ADVANCED.gcs_threestar_recruitment + fourstars * REWARDS_ADVANCED.gcs_fourstar_recruitment);
      case 30:
        // Strategy - Delusional maximum. Counts every recruitment as 4*
        return preventNegative(user_data.gcs_recruitment * REWARDS_ADVANCED.gcs_fourstar_recruitment * calendarStore.getDays);
      default:
        // Prevents errors and NaN
        return 0;
    }
  };

  const getPermitsAndOrundumByPage = () => {
    let total_gc_in_range = getUserGreenCertsForLogin() + getUserGreenCertsWeekly() + getGreenCertsForRecruitment() + user_data.gcs_current_certs;
    let times_can_buy = 0;
    let duration = calendarStore.getMonths - Number(calendarStore.calendar_data.is_excluded_month);
    switch (user_data.gcs_selected_plan) {
      case 10:
        // In this case user wants to buy only orundum and HHs on the first page
        do {
          if (total_gc_in_range - REWARDS_ADVANCED.gcs_phaseone_budget_cost > 0) {
            total_gc_in_range -= REWARDS_ADVANCED.gcs_phaseone_budget_cost;
            times_can_buy++;
          } else {
            break;
          }
        } while (times_can_buy != duration);
        return {
          orundum: REWARDS_ADVANCED.gcs_phaseone_orundums * times_can_buy,
          permits: REWARDS_ADVANCED.gcs_phaseone_permits * times_can_buy,
        };

      case 20:
        // In this case user wants to buy 1 page fully + HHs on the second
        let first_page = 0;
        let second_page = 0;
        do {
          /** It ensures purchase of the first page then goes to the second page and again. So in case when user is able to buy
           * 1 time both the first page and the HHs on the second but fails to purchase whole 1p+HHs it tries to calculate the purchase
           * of at least the first page on budget (orundum and HHs only) to make calculations more precise */
          if (total_gc_in_range - REWARDS_ADVANCED.gcs_phaseone_total_cost > 0) {
            total_gc_in_range -= REWARDS_ADVANCED.gcs_phaseone_total_cost;
            first_page++;
          } else if (total_gc_in_range - REWARDS_ADVANCED.gcs_phaseone_budget_cost > 0) {
            total_gc_in_range -= REWARDS_ADVANCED.gcs_phaseone_budget_cost;
            first_page++;
          } else {
            break;
          }

          if (total_gc_in_range - REWARDS_ADVANCED.gcs_phasetwo_permits_cost > 0) {
            total_gc_in_range -= REWARDS_ADVANCED.gcs_phasetwo_permits_cost;
            second_page++;
          } else {
            break;
          }

          times_can_buy++;
        } while (times_can_buy != duration);
        return {
          orundum: REWARDS_ADVANCED.gcs_phaseone_orundums * first_page,
          permits: REWARDS_ADVANCED.gcs_phaseone_permits * first_page + REWARDS_ADVANCED.gcs_phasetwo_permits * second_page,
        };
      default:
        // If plan selection is ignored it returns 0
        return {
          orundum: 0,
          permits: 0,
        };
    }
  };

  const getYellowCertsForRecruitment = () => {
    switch (user_data.gcs_selected_strategy) {
      // Strategy - Absolute minimum is ignored. It yields no yellow certs.
      case 20:
        // Strategy - Predicted average. Counts 3\4 as 3* and 1\4 as 4*
        let fourstars = Math.floor((user_data.gcs_recruitment * calendarStore.getDays) / 4);
        return preventNegative(fourstars * REWARDS_ADVANCED.ycs_fourstar_recruitment);
      case 30:
        // Strategy - Delusional maximum. Counts every recruitment as 4*
        return preventNegative(user_data.gcs_recruitment * REWARDS_ADVANCED.ycs_fourstar_recruitment * calendarStore.getDays);
      default:
        // Prevents errors and NaN
        return 0;
    }
  };

  const tryPurchasePermits = (max_phase, yc_amount, months, isGreedy) => {
    /** This function is simillar to getPermitsAndOrundumByPage() but deeper and more complex.
     * In isGreedy=true mode it will try to purchase as much permits as possible in a set amount of time and YC.
     * In isGreedy=false (Strict mode) it will try to purchase phase to its full extent and if it fails the whole purchase fails.
     * Examples:
     * GREEDY -> tryPurchasePermits(max_phase = 5, yc_amount = 544, months = 3, isGreedy = true) -> 79 Permits ->
     * 1 month - full set 258YC\38HHs, 2 month - full set 258YC(516YC)\76HHs, 3 month - phase 1 10YC(526YC)\77HHs + phase 2 18YC(544YC)\79HHs -> failed to buy more
     * STRICT -> tryPurchasePermits(max_phase = 5, yc_amount = 544, months = 3, isGreedy = true) -> 76 Permits ->
     * 1 month - full set 258YC\38HHs, 2 month - full set 258YC(516YC)\76HHs, 3 month - failed to buy more and accumulated permits for this iteration doesn't apply
     */
    let times_can_buy = 0;
    let permits_purchased = 0;
    do {
      let temp_permits = 0;
      let phase;
      for (phase = 1; phase <= max_phase; phase++) {
        const price = REWARDS_ADVANCED[`ycs_lvl${phase}_price`];
        const permits = REWARDS_ADVANCED[`ycs_lvl${phase}_permits`];
        if (yc_amount - price >= 0) {
          yc_amount -= price;
          temp_permits += permits;
        } else {
          break;
        }
      }
      if (!isGreedy && phase <= max_phase) {
        break;
      }
      permits_purchased += temp_permits;
      times_can_buy++;
    } while (times_can_buy < months);

    return permits_purchased;
  };

  const getPermitsByYellowShopPhase = computed(() => {
    let total_yc_in_range = user_data.ycs_current_certs + getUserYellowCertsForLogin();
    if (user_data.is_included_ycs_recruitment) {
      total_yc_in_range += getYellowCertsForRecruitment();
    }
    switch (user_data.ycs_phase) {
      case 10:
        return tryPurchasePermits(1, total_yc_in_range, calendarStore.getMonths, true);
      case 20:
        return tryPurchasePermits(2, total_yc_in_range, calendarStore.getMonths, true);
      case 25:
        return tryPurchasePermits(2, total_yc_in_range, calendarStore.getMonths, false); // Strict
      case 30:
        return tryPurchasePermits(3, total_yc_in_range, calendarStore.getMonths, true);
      case 35:
        return tryPurchasePermits(3, total_yc_in_range, calendarStore.getMonths, false); // Strict
      case 40:
        return tryPurchasePermits(4, total_yc_in_range, calendarStore.getMonths, true);
      case 45:
        return tryPurchasePermits(4, total_yc_in_range, calendarStore.getMonths, false); // Strict
      case 50:
        return tryPurchasePermits(5, total_yc_in_range, calendarStore.getMonths, true);
      case 55:
        return tryPurchasePermits(5, total_yc_in_range, calendarStore.getMonths, false); // Strict
      default:
        return 0;
    }
  });

  const getOrundumForReruns = computed(() => {
    let ic = user_data.rerun_current_certs + REWARDS_ADVANCED.rcs_minimal_event_currency_gain
    let stock = user_data.rerun_orundum_stock + (REWARDS_ADVANCED.rcs_stock_update_per_rerun * user_data.rerun_encounters)
    let purchase = ic / REWARDS_ADVANCED.rcs_price_per_orundum
    // If you can purchase less than stock returns maximum purchase and if you can buy more than in stock just return stock. Always maximun. Pretty logical, eh?
    return purchase < stock ? (purchase * REWARDS_ADVANCED.rcs_orundums_gain_per_purchase) : (stock * REWARDS_ADVANCED.rcs_orundums_gain_per_purchase)
  })

  const getAdvancedOrundum = () => {
    let green_shop = getPermitsAndOrundumByPage();
    let temp = green_shop.orundum;
    temp += getOrundumForReruns.value
    return preventNegative(temp);
  };

  const getAdvancedPermits = () => {
    let green_shop = getPermitsAndOrundumByPage();
    let temp = green_shop.permits;
    temp += getPermitsByYellowShopPhase.value;
    return preventNegative(temp);
  };

  return {
    user_data,
    user_recruitment_strategies,
    user_gcs_phases,
    user_ycs_phases,
    getUserOrundumInfiniteBuyout,
    getPermitsAndOrundumByPage,
    getGreenCertsForRecruitment,
    getUserGreenCertsForLogin,
    getUserGreenCertsWeekly,
    getPermitsByYellowShopPhase,
    getYellowCertsForRecruitment,
    getUserYellowCertsForLogin,
    getOrundumForReruns,
    getAdvancedOrundum,
    getAdvancedPermits,
  };
});
