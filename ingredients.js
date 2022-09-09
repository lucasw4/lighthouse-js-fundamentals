const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i])
  i++
}

for (let counter = 0; counter < ingredients.length; counter++) {
  console.log(ingredients[counter]);
}

let backwordsCounter = ingredients.length - 1
while (backwordsCounter >= 0) {
  console.log(ingredients[backwordsCounter]);
  backwordsCounter--;
}