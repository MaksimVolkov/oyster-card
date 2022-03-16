'use strict';
import {
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
} from "./constant.js";

export default class Card {

  constructor() {
    this.balance = null;
    this.startStation = null;
    this.typeOfTransport = null;
  }

  loadCard( sum ) {
    if ( typeof( sum ) === "number" && sum > 0 ){
      this.balance = sum
    } else {
      console.log('Incorrect crediting of funds, make sure that the credited funds are correct and try again!');
      return this.balance
    }
    return this.balance
  }

  startJourney( typeOfTransport, startStation ) {

    if (typeOfTransport !== TRANSPORT_TYPE.Tube && typeOfTransport !== TRANSPORT_TYPE.Bus) {
      this.errorProcessExit('Type of transport is not found!');
    }
    if (typeOfTransport === TRANSPORT_TYPE.Tube && !TUBE_STATIONS.find(item => item.station === startStation)) {
      this.errorProcessExit('Tube station is not found!');
    }
    if (typeOfTransport === TRANSPORT_TYPE.Bus && !BUS_STATIONS.find(item => item.station === startStation)) {
      this.errorProcessExit('Bus station is not found!');
    }

    if (this.balance >= MAX_COST ) {
      this.startStation = startStation;
      this.typeOfTransport = typeOfTransport;
      this.balance -= MAX_COST
    } else {
      this.errorProcessExit('Not enough credit!')
    }
  }

  endJourney(endStation) {
    if (this.typeOfTransport === TRANSPORT_TYPE.Tube && !TUBE_STATIONS.find(item => item.station === endStation)) {
      this.errorProcessExit('Tube station is not found! The maximum fare is charged.')
    }
    if (this.typeOfTransport === TRANSPORT_TYPE.Bus && !BUS_STATIONS.find(item => item.station === endStation)) {
      this.errorProcessExit('Bus station is not found! The maximum fare is charged')
    }

    this.balance += MAX_COST;

    const fare = this.calculateCost(this.typeOfTransport, this.startStation, endStation);
    console.log('Total fare fot the trip is ' + fare);

    this.balance -= fare;
  }

  calculateCost(typeOfTransport, startStation, endStation) {
    if (typeOfTransport === TRANSPORT_TYPE.Bus) {
      return ANY_BUS_JOURNEY;
    }

    const startZone = TUBE_STATIONS.find(item => item.station === startStation).zone;
    const endZone = TUBE_STATIONS.find(item => item.station === endStation).zone;

    const crossedZones = this.countZonesCrossed(startZone, endZone);

    if ( crossedZones === 3 ) {
      return ANY_THREE_ZONES;
    }
    else if (
      crossedZones === 2
      && (startZone.includes(1) || endZone.includes(1) )
      && !(startZone.length === 2 || endZone.length === 2 )
    ) {
      return ANY_TWO_ZONES_INCLUDING_ZONE_1;
    }
    else if (
      crossedZones === 2
      && ((startZone.length === 2 || endZone.length === 2) || (startZone.includes(2||3) || endZone.includes(2||3)))
    ) {
      return ANY_TWO_ZONES_EXCLUDING_ZONE_1;
    }
    else if ( crossedZones === 1 && (startZone.includes(1) && endZone.includes(1) )) {
      return ANYWHERE_IN_ZONE_1;
    } else  {
      return ANY_ONE_ZONE_OUTSIDE_ZONE_1;
    }
  }

  countZonesCrossed(startZone, endZone) {
    let minZonesVisited = 3;
    startZone.forEach((fromZone) => {
      endZone.forEach((toZone) => {
        const zonesVisited = Math.abs(fromZone - toZone) + 1;
        if(zonesVisited < minZonesVisited) {
          minZonesVisited = zonesVisited;
        }
      });
    });
    return minZonesVisited;
  }

  errorProcessExit(message) {
    console.log(message);
    process.exit();
  }

  checkBalance() {
    return this.balance
  }

}