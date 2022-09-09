const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStation = function(array) {
  let goodStations = []

  for (let i of array) {
    const cap = i[1];
    const type = i[2]

    if (cap >= 20 && type === 'school') {
      goodStations.push(i[0]);
    } else if(cap >=20 && type === 'community centre') {
      goodStations.push(i[0]);
    }
  }
  
  return goodStations;
}

console.log(chooseStation(stations));