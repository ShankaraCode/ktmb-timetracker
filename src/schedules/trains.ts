import trainSchedules from '../data/train_schedule.json';

type TrainSchedule = {
  train_number: number;
  from_station: string;
  to_station: string;
  time: string;
  trip: string;
};

const schedules: TrainSchedule[] = trainSchedules;

schedules.forEach((schedule) => {
  console.log(`Train ${schedule.train_number} from ${schedule.from_station} to ${schedule.to_station} departs at ${schedule.time}`);
});
