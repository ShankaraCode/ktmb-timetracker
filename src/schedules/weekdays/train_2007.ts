import { DayType } from "../../constants/dayTypes";
import { Station } from "../../constants/stations";
import { TrainNumber } from "../../constants/trainNumber";
import { TripType } from "../../constants/tripType";

export const train_2007 = {
  trainId: TrainNumber.a2007,
  tripSchedule: [
    { station: Station.BatuCaves, departureTime: "06:57" },
    { station: Station.TamanWahyu, departureTime: "07:01" },
    { station: Station.KampungBatu, departureTime: "07:04" },
    { station: Station.BatuKentonmen, departureTime: "07:06" },
    { station: Station.Sentul, departureTime: "07:10" },
    { station: Station.Putra, departureTime: "07:16" },
    { station: Station.BankNegara, departureTime: "07:19" },
    { station: Station.KualaLumpur, departureTime: "07:23" },
    { station: Station.KLSentral, departureTime: "07:28" },
    { station: Station.Midvalley, departureTime: "07:35" },
    { station: Station.Seputeh, departureTime: "07:37" },
    { station: Station.SalakSelatan, departureTime: "07:43" },
    { station: Station.BandarTasekSelatan, departureTime: "07:50" },
    { station: Station.Serdang, departureTime: "07:58" },
    { station: Station.Kajang, departureTime: "08:10" },
    { station: Station.Kajang2, departureTime: "08:13" },
    { station: Station.UKM, departureTime: "08:16" },
    { station: Station.Bangi, departureTime: "08:24" },
    { station: Station.BatangBenar, departureTime: "08:41" },
    { station: Station.Nilai, departureTime: "08:55" },
    { station: Station.Labu, departureTime: "09:02" },
    { station: Station.Tiroi, departureTime: "09:08" },
    { station: Station.Seremban, departureTime: "09:16" },
    { station: Station.Senawang, departureTime: "09:21" },
    { station: Station.SungaiGadut, departureTime: "09:26" },
    { station: Station.Rembau, departureTime: "09:40" },
    { station: Station.PulauSebang, departureTime: "09:56" },
  ],
  dayType: DayType.Weekday, 
  tripType: TripType.BCPtoPS_Full
};
