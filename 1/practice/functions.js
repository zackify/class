const Sum = (x, y) => {
  return x + y;
};

function anotherSum(x, y) {
  return x + y;
}

const inlineSum = (x, y) => x + y;

const addTwo = x => x * 2;

//Realistic example of a small function
//url slug

let post = 'How to be cool like Alex';

let toSlug = name => name.toLowerCase().replace(' ', '-');

let slug = toSlug(post);

console.log(slug); //does this work?

//Functions in functions

addTwo(inlineSum(2, 2));

//ok if we can do that... what about allowing custom functions?

/* 
  Pretend we have a function that formats names.
  and it lets us customize the name even more if we want
*/

const renderNames = callback => {
  //pretend this is loaded from a server
  let names = ['ZACHHHH', 'FUCK ALEX', 'FUCK MKG', 'Sam'];

  return names.map(name => {
    let modifiedName = name.toLowerCase();
    return callback(modifiedName);
  });
};

//why could we use names again?

let names = renderNames(name => {
  if (name.match(/fuck/)) return '****';
  return name;
});

console.log(names);
