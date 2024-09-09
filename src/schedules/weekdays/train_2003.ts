import { DayType } from "../../constants/dayTypes";
import { Station } from "../../constants/stations";
import { TrainNumber } from "../../constants/trainNumber";
import { TripType } from "../../constants/tripType";

export const train_2003 = {
  trainId: TrainNumber.a2003,
  tripSchedule: [
    { station: Station.BatuCaves, departureTime: "06:02" },
    { station: Station.TamanWahyu, departureTime: "06:06" },
    { station: Station.KampungBatu, departureTime: "06:09" },
    { station: Station.BatuKentonmen, departureTime: "06:11" },
    { station: Station.Sentul, departureTime: "06:15" },
    { station: Station.Putra, departureTime: "06:21" },
    { station: Station.BankNegara, departureTime: "06:24" },
    { station: Station.KualaLumpur, departureTime: "06:28" },
    { station: Station.KLSentral, departureTime: "06:33" },
    { station: Station.Midvalley, departureTime: "06:40" },
    { station: Station.Seputeh, departureTime: "06:42" },
    { station: Station.SalakSelatan, departureTime: "06:48" },
    { station: Station.BandarTasekSelatan, departureTime: "06:55" },
    { station: Station.Serdang, departureTime: "07:03" },
    { station: Station.Kajang, departureTime: "07:15" },
    { station: Station.Kajang2, departureTime: "07:18" },
    { station: Station.UKM, departureTime: "07:21" },
    { station: Station.Bangi, departureTime: "07:35" },
    { station: Station.BatangBenar, departureTime: "07:47" },
    { station: Station.Nilai, departureTime: "08:01" },
    { station: Station.Labu, departureTime: "08:08" },
    { station: Station.Tiroi, departureTime: "08:14" },
    { station: Station.Seremban, departureTime: "08:22" },
    { station: Station.Senawang, departureTime: "08:27" },
    { station: Station.SungaiGadut, departureTime: "08:32" },
    { station: Station.Rembau, departureTime: "08:40" },
    { station: Station.PulauSebang, departureTime: "08:56" },
  ],
  dayType: DayType.Weekday, 
  tripType: TripType.BCPtoPS_Full
};