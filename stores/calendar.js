import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useCalendarStore = defineStore("calendar", () => {
  const range = ref({
    start: new Date(),
    end: new Date(),
  });
  const today = new Date()
  const calendar_data = reactive({
    is_excluded_today: false,
    is_excluded_week: false,
    is_excluded_annihilation: false,
    is_excluded_month: false,
  })
  // milliseconds / 1000 to get secodns / 60 to get minutes / 60 to get hours / 24 to get days
  const getDays = computed(() => {
    // +1 makes it return 1 even when one day is selected. By default calendar ignores starting day.
    return Math.floor(
      (range.value.end.getTime() - range.value.start.getTime()) /
        1000 /
        60 /
        60 /
        24 +
        1
    );
  });
  function getWeekNumber(date) {
    // Copy date so don't modify original
    const d = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }

  const getWeeks = computed(() => {
    let startWeek = getWeekNumber(range.value.start);
    let endWeek = getWeekNumber(range.value.end);
    let weeks = [];
    for (let year = startWeek[0]; year <= endWeek[0]; year++) {
      let startWeekOfYear = year === startWeek[0] ? startWeek[1] : 1;
      let endWeekOfYear =
        year === endWeek[0] ? endWeek[1] : 52 + (year % 4 === 0 ? 1 : 0); // 52 or 53 weeks in a year
      for (let week = startWeekOfYear; week <= endWeekOfYear; week++) {
        weeks.push([year, week]);
      }
    }
    return weeks.length;
  });

  const getMonths = computed(() => {
    const day = 86400000; // milliseconds in a day
    let temp = [];
    let loop_time = new Date(
      range.value.start.getTime() +
        (calendar_data.is_excluded_today ? day : 0)
    );
    // do-while is used because if the start & end are the same day the other loops won't trigger
    do {
      temp.push(loop_time.getMonth());
      loop_time.setTime(loop_time.getTime() + day);
    } while (loop_time <= range.value.end);
    // spread+Set to remove duplicates
    return [...new Set(temp)].length;
  });
  return {
    range,
    calendar_data,
    today,
    getDays,
    getWeeks,
    getMonths
  }
});
