const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function(array) {
  let coordinate = [];

  let x = 0;
  let y = 0;
  for (let i of array) {
    if (i === 'north') {
      y = y + 1
    } else if (i === 'south') {
      y = y - 1
    } else if (i === 'east') {
      x = x + 1
    } else if (i === 'west') {
      x = x - 1;
    }
  }

  coordinate.push(x, y)
  return coordinate;
}

console.log(finalPosition(moves));