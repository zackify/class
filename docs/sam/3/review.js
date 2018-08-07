/*
  Make an object with 3 properties: firstName, lastName
*/
let person = {
  firstName: 'Sam',
  lastName: 'Huntress',
};

/*
  make a function called getGreeting 
  that takes a first name, and last name

  and returns the name joined together with a greeting message, ex:
  Hello, First, Last
*/

let getGreeting = (firstName, lastName, message) => {
  return `Hello, ${firstName} ${lastName} ${message}`;
};
let greeting = getGreeting(person.firstName, person.lastName);

let anotherGreeting = getGreeting('mckinley', 'gilmore');

// console.log(getGreeting(greeting, anotherGreeting))
/*

Refactor function to take a single argument with zach

*/
let greet = data => {
  return `Hello ${data.firstName} ${data.lastName}: ${data.message}`;
};

console.log(
  greet({
    firstName: 'Sam',
    lastName: 'Huntress',
    message: 'yo you awesome',
  }),
);
