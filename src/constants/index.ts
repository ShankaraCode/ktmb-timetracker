import data from "../data/train_schedule.json";
import { DayType, ITrainSchedule } from "../types";

// Create a Map to hold unique station names as enum keys and values
const stationMap = new Map<string, string>();
const typesMap = new Map<string, string>();
const weekdayScheduleMap = new Map<string, string>();

const weekdaySchedules: ITrainSchedule[] = [];
const weekendSchedules: ITrainSchedule[] = [];

const normalizeString = (str: string): string => {
  return str.trim().toUpperCase().replace(/\s+/g, '');
};


for (const element of data) {
  stationMap.set(normalizeString(element.from_station), element.from_station);
  stationMap.set(normalizeString(element.to_station), element.to_station);

  typesMap.set(normalizeString(element.type), element.type);

  if (element.type.trim().toUpperCase() === DayType.WEEKDAY) {
    // weekdayScheduleMap.set();
    weekdaySchedules.push(element);
  } else if (element.type.trim().toUpperCase() === DayType.WEEKEND) {
    weekendSchedules.push(element);
  }
}

export { stationMap, normalizeString, weekdaySchedules, weekendSchedules };