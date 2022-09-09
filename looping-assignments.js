// FIRST ASSIGNMENT

const range = function(start, end, step) {
  let array = [];
  if (step <= 0) {
    return array;
  } else if (start === null || end === null || step === null) {
    return array
  } else if (start > end) {
    return array;
  } else {
    for (start; start <= end; start += step) {
      array.push(start);
    } return array;
  }
}
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// SECOND ASSIGNMENT
console.log('------------------------\n Second Assignment')
const lastIndexOf = function(array, val) {
  let lastIndex;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === val) {
      lastIndex = i;
    } 
  } if (lastIndex === undefined) {
    return -1;
  } else {
    return lastIndex
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);