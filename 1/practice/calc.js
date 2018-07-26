let number1 = '2';

let number2 = 5;

console.log(number1 * number2);

let doStuff = x => {
  if (typeof x === 'string') return `It's a string`;

  return x * 2;
};

console.log(doStuff('hi'));
console.log(doStuff(2));
