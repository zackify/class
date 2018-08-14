/*
  create an array of posts, posts need to have at least 3 fields on them
*/

let posts = [
  {
    title: 'Sam',
    isSexy: true,
    isSexier: false,
    description: 'noob',
  },
  {
    title: 'Alex',
    isSexy: false,
    isSexier: true,
    description: 'sorta noob',
  },
  {
    title: 'Me',
    isSexy: true,
    isSexier: true,
    isSexierist: true,
    description: 'ultra noob',
  },
];

/*
 loop through the array, and console.log a field (key) on it each time
*/

//posts.forEach(post => console.log(post.title));

/*
 make an array of numbers and add them together using reduce
*/

let numbers = [1, 2, 3, 4];

let reducer = (accumulator, value) => {
  accumulator = accumulator + value;

  return accumulator;
};

let result = numbers.reduce(reducer, 0);

console.log(result);
