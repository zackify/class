let car = {
  name: 'Mazda 3',
  tires: 4,
  color: 'black',
  getMiles: () => {
    let value = '10000';

    return '56,000';
  },
};
console.log(
  `your car is a ${car.name} it has ${car.tires} and ${car.getMiles()}`,
);

const sum = (x, y) => {
  return x + y;
};

let result = sum(sum(2, 2), 5);
