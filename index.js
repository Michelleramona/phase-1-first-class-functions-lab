// Code your solution in this file!
const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return [arrayOfDrivers[0],arrayOfDrivers[1]]
  };

  const returnLastTwoDrivers = function(arrayOfDrivers) {
    return [arrayOfDrivers[2],arrayOfDrivers[3]]
  };

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(n1){
        return function multiply(n2) {
            return n1*n2
        }
  }

  const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

//createFareMultiplier(2);

function selectDifferentDrivers(arrayOfDrivers, cb){
    return cb(arrayOfDrivers)
}

//selectDifferentDrivers(2,3, createFareMultiplier)
  
