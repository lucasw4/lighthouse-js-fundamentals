// ASSIGNMENT 1: Trash to Treasure

const smartGarbage = function (trash, bins) {
  let x = trash;
  bins[x] += 1;
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))

// ASSIGNMENT 2: Driving Mayor Daisy
const carPassing = function(cars, speed) {
  cars.push({time: Date.now(), speed: speed})
  return cars
}

const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));

// ASSIGNMENT 3: We're Rooting for you!
const judgeVegetable = function(veg, metric) {
  let bestSoFar = 0, pos = 0, i = 0;
  for(i = 0; i < veg.length; i++) {
    if (veg[i][metric] > bestSoFar) {
      bestSoFar = veg[i][metric];
      pos = i;
    }
  }
  return veg[pos]["submitter"];
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

=judgeVegetable(vegetables, metric)