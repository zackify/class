// let nameTest = name => {

//   let line = `Hello there ${name}.`;
//   console.log(line);
// };

nameTest();

//Why doesn't this run ^
//cause you gotta call the nameTest function that contains the console.log()

const person = {
//Why doesn't this run ^
//console.log(line);

let person = {
  name: 'Zach',
  about: 'Codes for dayz bruh',
};

// whats wrong ^

//Log out: "Name: {X}, like to {about}"
console.log(`Name: ${person.name}, likes to ${person.about}`);
//Log out: "Name is Zach, he Codes for dayz bruh"

let test = () => {
  let blah = true;
  return blah;
};

console.log(`Name is ${person.name} he ${person.about}`);
