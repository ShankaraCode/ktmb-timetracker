import data from "../data/train_schedule.json";

// Create a Map to hold unique station names as enum keys and values
const stationMap = new Map<string, string>();

const normalizeString = (str: string): string => {
  return str.trim().toUpperCase().replace(/\s+/g, '');
};


for (const element of data) {
  stationMap.set(normalizeString(element.from_station), element.from_station);
  stationMap.set(normalizeString(element.to_station), element.to_station);
}

export { stationMap, normalizeString };