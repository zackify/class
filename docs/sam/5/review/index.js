/*
  create an array of posts, posts need to have at least 3 fields on them
*/
let posts = [
  {
    title: 'car',
    tires: 'four',
    fuel: 'gasoline',
    color: 'blue',
  },
  {
    title: 'house',
    color: 'brown',
    windows: 'a ton',
    doors: '3',
  },
  {
    title: 'table',
    material: 'wood',
    chairs: 'six',
    color: 'brown',
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

let reducer = (acc, value) => {
  acc = acc + value;
  return acc;
};
let result = numbers.reduce(reducer, 0);
console.log(result);
