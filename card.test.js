import Card from './card.js';
import {expect} from "@jest/globals";

let card =  new Card();

test('Anywhere in Zone 1 Holborn => Earlscourt: return £2.50', () => {
  expect(card.calculateCost("Tube", "Holborn", "Earlscourt")).toBe(2.50);
});
test('Anywhere in Zone 1 Earlscourt => Holborn: return £2.50', () => {
  expect(card.calculateCost("Tube", "Earlscourt", "Holborn")).toBe(2.50);
});


test('Any one zone outside zone 1 Earlscourt => Hammersmith: return £2.00', () => {
  expect(card.calculateCost("Tube", "Earlscourt", "Hammersmith")).toBe(2.00);
});
test('Any one zone outside zone 1 Hammersmith => Earlscourt: return £2.00', () => {
  expect(card.calculateCost("Tube", "Hammersmith", "Earlscourt")).toBe(2.00);
});


test('Any two zones including zone 1: Holborn => Hammersmith: return £3.00', () => {
  expect(card.calculateCost("Tube", "Holborn", "Hammersmith")).toBe(3.00);
});
test('Any two zones including zone 1: Hammersmith => Holborn: return £3.00', () => {
  expect(card.calculateCost("Tube", "Hammersmith", "Holborn")).toBe(3.00);
});


test('Any two zones excluding zone 1 Hammersmith => Wimbledon: return £2.25', () => {
  expect(card.calculateCost("Tube", "Hammersmith", "Wimbledon")).toBe(2.25);
});
test('Any two zones excluding zone 1 Wimbledon => Hammersmith: return £2.25', () => {
  expect(card.calculateCost("Tube", "Wimbledon", "Hammersmith")).toBe(2.25);
});
test('Any two zones excluding zone 1 Wimbledon => Earlscourt: return £2.25', () => {
  expect(card.calculateCost("Tube", "Wimbledon", "Earlscourt")).toBe(2.25);
});
test('Any two zones excluding zone 1 Earlscourt => Wimbledon: return £2.25', () => {
  expect(card.calculateCost("Tube", "Earlscourt", "Wimbledon")).toBe(2.25);
});


test('Any three zones Holborn => Wimbledon: return £3.20', () => {
  expect(card.calculateCost("Tube", "Holborn", "Wimbledon")).toBe(3.20);
});
test('Any three zones Wimbledon => Holborn: return £3.20', () => {
  expect(card.calculateCost("Tube", "Wimbledon", "Holborn")).toBe(3.20);
});


test('Any bus journey: return £1.80', () => {
  expect(card.calculateCost("Bus", "Earlscourt", "Chelsea")).toBe(1.80);
});


test('loadCard "": return null', () => {
  expect(card.loadCard('')).toBe(null);
});
test('loadCard "text": return null', () => {
  expect(card.loadCard('text')).toBe(null);
});
test('loadCard 0: return 0', () => {
  expect(card.loadCard(0)).toBe(null);
});
test('loadCard 1: return 1', () => {
  expect(card.loadCard(1)).toBe(1);
});
test('loadCard 28.5: return 28.5', () => {
  expect(card.loadCard(28.5)).toBe(28.5);
});
test('loadCard 30: return 30', () => {
  expect(card.loadCard(30)).toBe(30);
});

