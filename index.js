// Code your solution in this file!
const returnFirstTwoDrivers = (array)=> array.slice(0,2);
const returnLastTwoDrivers = (array)=> array.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
function createFareMultiplier(i){
    return function(fare){
        return fare * i;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(a,f){
    return f(a);
}