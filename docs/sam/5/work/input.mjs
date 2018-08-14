import { add, number2 } from './calc';

let number = process.argv[2];

let result = add(parseInt(number), number2);

console.log(result);
