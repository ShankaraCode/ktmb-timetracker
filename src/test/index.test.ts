import jest, { describe, expect, test } from '@jest/globals';
import { getNextTrain } from "../utils/scheduleHelpers";
import { IGetNextTrainProps, ITrainSchedule } from '../types';
import { DayType } from '../types';
import { normalizeString, stationMap, weekdaySchedules, weekendSchedules } from '../constants';

// Mocking
const now = new Date();
now.setMinutes(now.getMinutes() + 20);
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedTimeNow = `${hours}:${minutes}:${seconds}`;


const scheduleList = [
  {
    train_number: 2003,
    from_station: "SENTUL",
    to_station: "PUTRA",
    time: "05:14:00",
    trip: "BCPS",
    type: "weekday"
  },
  {
    train_number: 2003,
    from_station: "PUTRA",
    to_station: "BANK NEGARA",
    time: "05:20:00",
    trip: "BCPS",
    type: "weekday"
  },
  {
    train_number: 2003,
    from_station: "BANK NEGARA",
    to_station: "KUALA LUMPUR",
    time: formattedTimeNow,
    trip: "BCPS",
    type: "weekday"
  },];

  console.log({formattedTimeNow});
  
// Mock the necessary imports

describe('getNextTrain', () => {
  const testTrain: ITrainSchedule = scheduleList[2];

  test('should return the next available train on a weekday', () => {
    const result = getNextTrain({
      from: testTrain.from_station,
      to: testTrain.to_station,
      schedules: scheduleList
    });

    expect(result?.from_station).toEqual(testTrain.from_station);
    expect(result?.to_station).toEqual(testTrain.to_station);
  });

  // // test('should return the next available train on a weekend', () => { });

  test('should throw an error for invalid station names', () => {
    expect(() => getNextTrain({
      from: 'invalidStation',
      to: 'station2',
      schedules: scheduleList
    })).toThrow('Invalid station(s) provided: from "invalidStation", to "station2"');
  });

  test('should return null when no train is available after the current time', () => {
    const result = getNextTrain({
      from: testTrain.from_station,
      to: testTrain.to_station,
      schedules: scheduleList,
      date: '2024-09-12T21:00:00', // After the last train
    });

    expect(result).toBeNull();
  });

});
