import { intervalToDuration, parseISO } from "date-fns";
export default (startDate: string, endDate?: string) => {
  const durationObj = intervalToDuration({
    start: parseISO(startDate),
    end: endDate ? parseISO(endDate) : new Date(),
  });

  let durationStr = "";

  if (durationObj && durationObj.years) {
    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }
  }
  durationStr += `${durationObj.months} mos`;

  return durationStr;
};
