// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};
returnFirstTwoDrivers(drivers);
console.log(returnFirstTwoDrivers);
//second
const returnLastTwoDrivers = function (drivers) {
  return [drivers[2], drivers[3]];
};
console.log(returnLastTwoDrivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiplier) {
  const fareMultiplier = function (fare) {
    return fare * multiplier;
  };
  return fareMultiplier;
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}

// Example usage:
const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);
