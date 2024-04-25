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
