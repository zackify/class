//how you get data from other sources, an array
let items = ['zach', 'alex', 'mckinley', 'sam'];

//where did .forEach come from?
// What does it do?
items.forEach(item => console.log(item));

//objects store a bunch of stuff
let car = {
  name: 'Mazda 3',
  hasSubs: true,
  subDiameter: 15,
};

//how would we access the name on it?
//hmm, maybe it works like .forEach if everything is an object?
console.log(car);

//Lets say we need another car, same configuration, but it's a sonata

let sonata = { ...car, name: 'Sonata' };

//If we log this what do we see?
