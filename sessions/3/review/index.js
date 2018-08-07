/*
  Make an object with 2 properties: firstName, lastName
*/

let person = {
  lastName: 'Huntress',
  firstName: 'Sam',
};

/*
  make a function called getGreeting 
  that takes a first name, and last name

  and returns the name joined together with a greeting message, ex:
  Hello, First, Last
*/

let getGreeting = (firstName, lastName, message) => {
  return `Hello ${firstName} ${lastName}: ${message}`;
};

let greeting = getGreeting(person.firstName, person.lastName);

let anotherGreeting = getGreeting('mckinley', 'gilmore');

//console.log(getGreeting(greeting, anotherGreeting));
/*

Refactor function to take a single argument with zach

*/

let greet = data => {
  return `Hello ${data.firstName} ${data.lastName}: ${data.message}`;
};

let options = {
  firstName: 'Sam',
  lastName: 'Huntress',
  message: 'yo you suck',
};

console.log(greet(options));
