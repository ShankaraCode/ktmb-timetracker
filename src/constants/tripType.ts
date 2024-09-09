export enum TripType {
    BCPtoPS_Full = "BatuCavesToPulauSebang_FullStop", // Full route, all stops
    PStoBCP_Full = "PulauSebangToBatuCaves_FullStop", // Full route, all stops
    BCPtoPS_Limited = "BatuCavesToPulauSebang_LimitedStop", // Limited stop route
    PStoBCP_Limited = "PulauSebangToBatuCaves_LimitedStop", // Limited stop route
    BCPtoSungaiGadut = "BatuCavesToSungaiGadut", // Terminates at Sungai Gadut
    PStoSungaiGadut = "PulauSebangToSungaiGadut", // Starts from Sungai Gadut
    BCPtoBangi = "BatuCavesToBangi", // Terminates at Bangi
    PStoBangi = "PulauSebangToBangi", // Starts from Bangi
    BCPtoKajang = "BatuCavesToKajang", // Terminates at Kajang
    PStoKajang = "PulauSebangToKajang", // Starts from Kajang
  }