// This file contains constant rewards for consecutive login
// All of this shit just because of a known bug >:C
const generateRecurringDates = (startDate, monthsAhead = 12) => {
  const dates = [];
  const currentDate = new Date();
  
  // clean date object
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
  
  // Calculate end date (current date + monthsAhead)
  const endDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + monthsAhead,
    currentDate.getDate()
  );
  
  // Generate dates from start until endDate
  let currentMonth = new Date(start);
  while (currentMonth <= endDate) {
    dates.push(new Date(currentMonth));
    currentMonth.setMonth(currentMonth.getMonth() + 1);
  }
  
  return dates;
};

const login = [
  {
    key: "yellowcerts",
    dot: "yellow",
    dates: generateRecurringDates(new Date(2024, 1, 25), 24), // 12 months ahead
    popover: {
      label: "Login Reward | 5 Yellow Certificates",
    },
  },
  {
    key: "greencerts",
    dot: "green",
    dates: generateRecurringDates(new Date(2024, 1, 11), 24),
    popover: {
      label: "Login Reward | 10 Green Certificates",
    },
  },
  {
    key: "hhpermit",
    dot: "orange",
    dates: generateRecurringDates(new Date(2024, 1, 17), 24),
    popover: {
      label: "Login Reward | 1 Headhunting permit",
    },
  },
];
export default login;
