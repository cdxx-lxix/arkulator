import { reactive, watch } from "vue";
import { defineStore } from "pinia";
import { preventNegative, getRewardsForSpecificDate } from "./commonactions";

export const useAdvancedStore = defineStore("advanced", () => {
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

  const user_data = reactive({
    // Advanced section
    is_excluded_month: false,
    is_included_gcs: false,
    is_phase_three: false,
    gcs_current_certs: 0,
    gcs_recruitment: 0,
    gcs_selected_strategy: 0,
    gcs_selected_plan: 0,
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

  watch(
    // This watcher unchecks infinite buyout if a user left it checked and unchecked green shop
    () => user_data.is_included_gcs,
    (gcs) => {
      if (!gcs) {
        user_data.is_phase_three = false;
      }
    }
  );
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
  const getUserOrundumInfiniteBuyout = () => {
    return preventNegative(
      Math.floor(
        user_data.gcs_current_certs /
          REWARDS_ADVANCED.gcs_phasethree_orundum_cost
      ) * REWARDS_ADVANCED.gcs_phasethree_orundum_gain
    );
  };

  return {
    user_data,
    user_recruitment_strategies,
    user_gcs_phases,
    getUserOrundumInfiniteBuyout,
  };
});
