let number = 1;

//this doesnt run. hmmm ;)

while (number < 10) {
  number++;
  console.log(`first while loop ${number}`);
}

/* for (let i = 0; i < 10; i++) {
  console.log(i);
} */

let start = 1;
let end = 6;

while (start <= end) {
  if (start % 2 === 0) {
    console.log(`the number ${start} is divisible by 2`);
  }
  start++;
}
