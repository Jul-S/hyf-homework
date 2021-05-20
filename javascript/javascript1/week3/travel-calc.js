const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 4 hours and 42 minutes

function getTravelTime(trip) {
  const decimalTime = trip.destinationDistance / trip.speed;
  // converting decimal time to hours and minutes
  const hours = Math.floor(decimalTime);
  const min = Math.round((decimalTime - hours) * 60);
  return `${hours} hours and ${min} minutes`;
}