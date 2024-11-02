export const preventNegative = (target) => {
  return target < 0 ? 0 : target;
};

export const getRewardsForSpecificDate = (start, end, specific_date, reward, is_excluded) => {
  const day = 86400000; // milliseconds
  // Loops through the range of dates and adds 1 for every match
  // +86400000 <- this addition is needed to exclude the first day in the range and include the last one
  let temp = 0;
  for (let loopTime = start + (is_excluded ? day : 0); loopTime < end + day; loopTime += day) {
    let loopDay = new Date(loopTime);
    if (loopDay.getDate() == specific_date) {
      temp += reward;
    }
  }
  return preventNegative(temp);
};

export const REWARDS_GUARANTEED = {
  daily_missions_orundum: 100, // Orundum
  monthly_card_orundum: 200, // Orundum
  weekily_missions_orundum: 500, // Orundum
  orundum_for_originium_prime: 180, // For 1 OP
  orundum_for_originium_shards: 10, // You have to craft 2 to get 20
  login_on_day_17: 1, // Permit
  orundum_per_pull: 600, // Current price to pull an operator
};

export const REWARDS_ADVANCED = {
  // gcs- green certificate shop / Commendation Certificates CCs
  gcs_phaseone_orundums: 600, // 240 CC (40*6)
  gcs_phaseone_permits: 2, // 480 CC (240*2)
  gcs_phaseone_budget_cost: 720, // Orundums and permits only
  gcs_phaseone_total_cost: 1490, // Total amount to unlock P2
  gcs_phasetwo_permits: 2, // P2 contains only 2 permits
  gcs_phasetwo_permits_cost: 900, // 2 permits for 450 each on P2
  gcs_phasetwo_total_cost: 8000, // In addition to 1490 for P1 you need this much to unlock P3
  gcs_phasethree_orundum_cost: 50,
  gcs_phasethree_orundum_gain: 30, // 30 orundums for 50 CC in unlimited store on P3
  gcs_monthly_login_11th: 10, // Obtain 10 CC for 11 days login streak
  gcs_weekly_mission_rewards: 20, // Obtain 20 CC from weekly missions
  gcs_threestar_recruitment: 5, // CC per 3*
  gcs_fourstar_recruitment: 30, // CC per 4*
  // ycs - yellow certificate shop / Distinction Certificates DCs
  ycs_lvl1_permits: 1,
  ycs_lvl1_price: 10,
  ycs_lvl2_permits: 2,
  ycs_lvl2_price: 18,
  ycs_lvl3_permits: 5,
  ycs_lvl3_price: 40,
  ycs_lvl4_permits: 10,
  ycs_lvl4_price: 70,
  ycs_lvl5_permits: 20,
  ycs_lvl5_price: 120,
  ycs_full_permits: 38,
  ycs_full_price: 258,
  ycs_monthly_login_25th: 5, // Obtain 10 DC for 25 days login streak
  ycs_fourstar_recruitment: 1, // DC per 4*
  // rcs - rerun certificate shop / Intelligence Certificates ICs
  rcs_price_per_orundum: 20, // 20 RC per 20 orundums
  rcs_orundums_gain_per_purchase: 100, // 100 orundums per 20 IC
  rcs_stock_update_per_rerun: 20, // They add +20 (2000 orundums) every rerun event
  rcs_minimal_event_currency_gain: 1700, // The amount of ICs given per rerun isn't stable. So this is the minimum instead.
};

export const REWARDS_MAYBE = {
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
export const EVENT_TYPES = [
  { name: "maybe.standard", value: 10 },
  { name: "maybe.anniversary", value: 20 },
  { name: "maybe.collab", value: 30 },
  { name: "maybe.trials", value: 40 },
  { name: "maybe.story", value: 50 },
];

export const PRIME_PACKS = [
  { primes: 1, price: 0.99 },
  { primes: 7, price: 4.99 },
  { primes: 24, price: 14.99 },
  { primes: 50, price: 29.99 },
  { primes: 90, price: 49.99 },
  { primes: 185, price: 99.99 },
]