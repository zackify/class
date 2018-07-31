/*
  Make an object with 2 properties: firstName, lastName, and getName
*/

/*
  make a function called getGreeting 
  that takes a first name, and last name

  and returns the name joined together with a greeting message, ex:
  Hello, First, Last
*/

/*

Refactor function to take a single argument with zach

*/

let person = {
  FirstName: `Forest`,
  LastName: `Brown`,
};

let getGreeting = (FirstName, LastName) => {
  return `Hello ${FirstName} ${LastName}`;
};
let greeting = getGreeting(person.FirstName, person.LastName);

let anotherGreeting = getGreeting(`mckinley`, `gilmore`);
console.log(getGreeting(greeting, anotherGreeting));

let greet = data => {
  return `Hello ${data.FirstName} ${data.LastName}; ${data.message}`;
};

let options = {
  FirstName: `Mckinley`,
  LastName: `Gilmore`,
  message: "you're awesome",
};
console.log(greet(options));
