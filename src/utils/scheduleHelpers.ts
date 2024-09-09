// src/utils/scheduleHelpers.ts

import { WeekdaySchedules } from '../schedules/weekdays';
import { WeekendSchedules } from '../schedules/weekends';
import { DayType } from '../constants/dayTypes';
import { train_2003 } from '../schedules/weekends/train_2003';
import { Station } from '../constants/stations';
import { TripType } from '../constants/tripType';

/**
 * Maps a string to the corresponding Station enum value.
 * If the string doesn't match any Station, return null.
 */
export function mapToStation(stationName: string): Station | null {
  const station = Station[stationName as keyof typeof Station];
  return station || null;
}

/**
 * Get the next available train between two stations at a given time (optional).
 * Accepts plain string inputs for `from` and `to` and handles the conversion internally.
 */
export function getNextTrain({
  from,
  to,
  date,
}: {
  from: string;  // Now accepting string instead of Station enum
  to: string;    // Now accepting string instead of Station enum
  date?: string;
}) {
  // Map string inputs to the Station enum
  const fromStation = mapToStation(from);
  const toStation = mapToStation(to);

  // If either station is invalid, return an error or handle it gracefully
  if (!fromStation || !toStation) {
    throw new Error(`Invalid station(s) provided: from "${from}", to "${to}"`);
  }

  // Parse the date string if provided, otherwise default to the current date
  const now = date ? new Date(date) : new Date();
  const currentTime = now.toTimeString().slice(0, 5); // "HH:MM" format

  // Determine if the specified date is a weekday or weekend
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const dayType = dayOfWeek === 0 || dayOfWeek === 6 ? DayType.Weekend : DayType.Weekday;

  const schedules = dayType === DayType.Weekend ? WeekendSchedules : WeekdaySchedules;

  // Loop through all train schedules and find trains that pass through both the "from" and "to" stations
  for (const train of schedules) {
    const fromStopIndex = train.tripSchedule.findIndex(stop => stop.station === fromStation);
    const toStopIndex = train.tripSchedule.findIndex(stop => stop.station === toStation);

    // Ensure the train stops at both the "from" and "to" stations and "from" comes before "to"
    if (fromStopIndex !== -1 && toStopIndex !== -1 && fromStopIndex < toStopIndex) {
      const fromStop = train.tripSchedule[fromStopIndex];

      // Check if the departure time from the "from" station is after the specified time
      if (fromStop.departureTime > currentTime) {
        return { trainId: train.trainId, fromStop, toStop: train.tripSchedule[toStopIndex] };
      }
    }
  }

  // Return null or an empty object if no train is found
  return null;
}