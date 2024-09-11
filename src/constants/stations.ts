// Get all station data from tran_schedule.json
// export enum Station {
//     BatuCaves = "Batu Caves",
//     TamanWahyu = "Taman Wahyu",
//     KampungBatu = "Kampung Batu",
//     BatuKentonmen = "Batu Kentonmen",
//     Sentul = "Sentul",
//     Putra = "Putra",
//     BankNegara = "Bank Negara",
//     KualaLumpur = "Kuala Lumpur",
//     KLSentral = "KL Sentral",
//     Midvalley = "Midvalley",
//     Seputeh = "Seputeh",
//     SalakSelatan = "Salak Selatan",
//     BandarTasekSelatan = "Bandar Tasek Selatan",
//     Serdang = "Serdang",
//     Kajang = "Kajang",
//     Kajang2 = "Kajang 2",
//     UKM = "UKM",
//     Bangi = "Bangi",
//     BatangBenar = "Batang Benar",
//     Nilai = "Nilai",
//     Labu = "Labu",
//     Tiroi = "Tiroi",
//     Seremban = "Seremban",
//     Senawang = "Senawang",
//     SungaiGadut = "Sungai Gadut",
//     Rembau = "Rembau",
//     PulauSebang = "Pulau Sebang",
//   }
  


import data from "../data/train_schedule.json";

// Create a Map to hold unique station names as enum keys and values
const stationMap = new Map<string, string>();

for (const element of data) {
    stationMap.set(element.from_station.trim().toUpperCase(), element.from_station);
    stationMap.set(element.to_station.trim().toUpperCase(), element.to_station);
}

export default stationMap;