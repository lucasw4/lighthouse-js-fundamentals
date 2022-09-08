const raining = false;
const cold = false;
 if (cold) {
  console.log('Take a jacket!')
 } else {
  console.log('short sleeves are fine.')
 }

const temperature = 12;

if (temperature < 0) {
  console.log('make sure to bring a scarf')
} else if (temperature < 15) {
  console.log('short sleeves wont cut it')
} else {
  console.log('short sleeves are fine.')
}

/*console.log('now youre ready to go outside!')*/

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log('You are eligible to vote!')
}

if (temperature < -40 || temperature > 40) {
  console.log('maybe going outside isnt such a great idea..')
}

!raining ? console.log('no umbrella needed') : console.log('might need umbrella');