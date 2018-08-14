import { add, number2 } from './calc';

let number = process.argv[2];

let result = add(parseInt(number), number2);

console.log(result);

//destructuring
let posts = [
  {
    title: 'test',
    description: 'hi',
  },
  {
    title: 'another',
    description: 'hi',
  },
];

posts.map(({ title }) => console.log(title));
