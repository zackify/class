function c(l) {
  console.log(l)
}

let number1 = 1;
let number2 = '2';

c('lel');

let addNUms = (number1, number2) => number1 + number2;

c(addNUms(43, 13));

//learnin about objects
let car = {
  name: 'dodge',
  tires: 4,
  color: 'black',
  getMiles(miles) {
    c(miles);
    return miles;
  }
}

car.getMiles(341);

//your car is a name it has x tires, and x miles
c(`Your car is a ${car.name} it has ${car.tires} tires, and ${car.getMiles(344141)} miles`);
