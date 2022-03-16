"use strict";
import Card from "./card.js"
import { STATIONS, TRANSPORT_TYPE } from "./constant.js";

// Instantiate card
let card = new Card();

// £30 credited to the card
card.loadCard(30);

// Journey - Tube Holborn to Earl’s Court
card.startJourney(TRANSPORT_TYPE.Tube, STATIONS.Holborn);
card.endJourney(STATIONS.Earlscourt);

// Journey - 328 bus from Earl’s Court to Chelsea
card.startJourney(TRANSPORT_TYPE.Bus, STATIONS.Earlscourt);
card.endJourney(STATIONS.Chelsea);

// Journey - Tube Earl’s court to Hammersmith
card.startJourney(TRANSPORT_TYPE.Tube, STATIONS.Earlscourt);
card.endJourney(STATIONS.Hammersmith);

// Viewing the balance
let checkBalance = card.checkBalance();
console.log('Remaining Credit: £', checkBalance);
