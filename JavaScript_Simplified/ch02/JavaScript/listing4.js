"use strict";

//hash table
var station = {
"midas_west_wits_44": {
  "carletonville_munic": {
    "cnc": "carletonville cnc",
    "customer": "Carletonville-Town",
    "customer_id": "KL-C79002-8739682797",
    "data": "Jan 2018 - July 2018",
    "incomers": {
      "Carletonville Munic-West Wits 44_1": {
        "conductor": "Panther50",
        "iRated [A]": 441,
        "length [km]": 5.29,
        "unom [kV]": 44
      },
      "Carletonville Munic-West Wits 44_2": {
        "conductor": "Panther50",
        "iRated [A]": 441,
        "length [km]": 5.33,
        "unom [kV]": 44
      }
    },
    "meters": {
      "MP1": "8739682015F1",
      "MP2": "8739682015F2"
    },
    "ring": {
    },
    "sector": "randfontein",
    "status": "has data",
    "transformers": {
    },
    "zone": "vaal",
    "ring_stations": {
      "stations": []
    }
  }
 }
};
//Dot notation access
var meters = station.midas_west_wits_44.carletonville_munic.meters;
console.log(meters)
