import { DayType, IGetNextTrainProps, IOrganizeTrainScheduleProps, ITrainSchedule } from '../types';
import { normalizeString, stationMap, weekdaySchedules, weekendSchedules } from '../constants';

export function organizeTrainSchedule({ schedules, date, }: IOrganizeTrainScheduleProps): ITrainSchedule[] {


  // Determine if the specified date is a weekday or weekend
  /*
  const now = date ? new Date(date) : new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const dayType = dayOfWeek === 0 || dayOfWeek === 6 ? DayType.WEEKEND : DayType.WEEKDAY;
  const schedules = dayType === DayType.WEEKEND ? weekendSchedules : weekdaySchedules;
  */

  if (!schedules) {
    schedules = [...weekendSchedules, ...weekdaySchedules];
  }
  return schedules;
}

/**
 * Get the next available train between two stations at a given time (optional).
 * Accepts plain string inputs for `from` and `to` and handles the conversion internally.
 */
export function getNextTrain({ from, to, schedules, date, }: IGetNextTrainProps): ITrainSchedule | null {
  // Map string inputs to the Station enum
  const fromStation = stationMap.get(normalizeString(from));
  const toStation = stationMap.get(normalizeString(to));

  // If either station is invalid, return an error or handle it gracefully
  if (!fromStation || !toStation) {
    throw new Error(`Invalid station(s) provided: from "${from}", to "${to}"`);
  }
  try {


    const now = date ? new Date(date) : new Date();
    const scheduleList = organizeTrainSchedule({ from, to, schedules, date, });

    // Loop through all train schedules and find trains that pass through both the "from" and "to" stations
    for (const schedule of scheduleList) {
      if (
        normalizeString(schedule.from_station) === normalizeString(from) &&
        normalizeString(schedule.to_station) === normalizeString(to)
      ) {
        // Get the scheduled train time as a date object (using today's date)
        const [hours, minutes, seconds] = schedule.time.split(':').map(Number);
        const scheduledTrainTime = new Date(now);
        scheduledTrainTime.setHours(hours, minutes, seconds, 0); // Set hours, minutes, and seconds from schedule

        // Compare scheduled train time with the current time
        if (scheduledTrainTime > now) {
          for (const [objK, objV] of Object.entries(schedule)) {
            if(typeof objV === "string"){
              schedule[objK] = objV.trim();
            }
          }
          return schedule; // Return the first available train that is later than the current time
        }
      }
    }

    // Return null if no train is found
  } catch (error) {
    console.log(error);

  }
  return null;
}
