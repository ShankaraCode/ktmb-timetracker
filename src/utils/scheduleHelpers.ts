import { DayType, IGetNextTrainProps, IOrganizeTrainScheduleProps, ITrainSchedule } from '../types';
import { normalizeString, stationMap, weekdaySchedules, weekendSchedules } from '../constants';

export function organizeTrainSchedule({ schedules, date }: IOrganizeTrainScheduleProps): ITrainSchedule[] {
  // Determine if the specified date is a weekday or weekend only if schedules are not passed
  if (!schedules) {
    const now = date ? new Date(date) : new Date();
    const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
    schedules = isWeekend ? weekendSchedules : weekdaySchedules;
  }
  return schedules;
}

/**
 * Get the next available train between two stations at a given time (optional).
 * Accepts plain string inputs for `from` and `to` and handles the conversion internally.
 */
export function getNextTrain({ from, to, schedules, date }: IGetNextTrainProps): ITrainSchedule | null {
  // Normalize inputs and map string inputs to the Station enum
  const fromStation = stationMap.get(normalizeString(from));
  const toStation = stationMap.get(normalizeString(to));

  if (!fromStation || !toStation) {
    throw new Error(`Invalid station(s) provided: from "${from}", to "${to}"`);
  }

  const now = date ? new Date(date) : new Date();
  const scheduleList = organizeTrainSchedule({ from, to, schedules, date });

  // Filter the schedule list to match only those that go from the "from" station to the "to" station
  const matchingSchedules = scheduleList.filter(schedule => 
    normalizeString(schedule.from_station) === normalizeString(from) &&
    normalizeString(schedule.to_station) === normalizeString(to)
  );

  for (const schedule of matchingSchedules) {
    // Parse the scheduled train time as a Date object
    const [hours, minutes, seconds] = schedule.time.split(':').map(Number);
    const scheduledTrainTime = new Date(now);
    scheduledTrainTime.setHours(hours, minutes, seconds, 0);

    // If the scheduled train time is later than the current time, return the schedule
    if (scheduledTrainTime > now) {
      return {
        ...schedule,
        from_station: schedule.from_station.trim(),
        to_station: schedule.to_station.trim(),
        time: schedule.time.trim(),
      };
    }
  }

  // Return null if no train is found
  return null;
}
