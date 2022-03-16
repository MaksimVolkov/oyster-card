'use strict';

const TRANSPORT_TYPE = { Tube : "Tube", Bus: "Bus" };

const STATIONS = {
  Holborn : "Holborn",
  Earlscourt: "Earlscourt",
  Wimbledon: "Wimbledon",
  Hammersmith: "Hammersmith",
  Chelsea: "Chelsea"
};


const TUBE_STATIONS = [
  {station: STATIONS.Holborn, zone: [1]},
  {station: STATIONS.Earlscourt, zone: [1, 2]},
  {station: STATIONS.Wimbledon, zone: [3]},
  {station: STATIONS.Hammersmith, zone: [2]}
];

const BUS_STATIONS = [
  {station: STATIONS.Earlscourt, zone: [1, 2, 3]},
  {station: STATIONS.Chelsea, zone: [1, 2, 3]}
];


const ANYWHERE_IN_ZONE_1 = 2.50,
      ANY_ONE_ZONE_OUTSIDE_ZONE_1 = 2.00,
      ANY_TWO_ZONES_INCLUDING_ZONE_1 = 3.00,
      ANY_TWO_ZONES_EXCLUDING_ZONE_1 = 2.25,
      ANY_THREE_ZONES = 3.20,
      ANY_BUS_JOURNEY = 1.80,
      MAX_COST = 3.20;


export {
  STATIONS,
  TUBE_STATIONS,
  BUS_STATIONS,
  TRANSPORT_TYPE,
  ANYWHERE_IN_ZONE_1,
  ANY_ONE_ZONE_OUTSIDE_ZONE_1,
  ANY_TWO_ZONES_INCLUDING_ZONE_1,
  ANY_TWO_ZONES_EXCLUDING_ZONE_1,
  ANY_THREE_ZONES,
  ANY_BUS_JOURNEY,
  MAX_COST
};