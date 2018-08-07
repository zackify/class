let post1 = {
  title: `my little pony`,
  description: `a story of a pink pony going through puberty`,
  date: `August 14th 2065`,
};

let post2 = {
  title: `my little pony`,
  description: `a story of a pink pony going through puberty`,
  date: `August 14th 2065`,
};

let post3 = {
  title: `my little pony`,
  description: `a story of a pink pony going through puberty`,
  date: `August 14th 2065`,
};

let posts = [
  {
    title: 'Test post',
    description: 'Mckinley loves to make objects about ponies',
    date: `August 27th, 2018`,
  },
  {
    title: 'Test two',
    description: 'Alex loves to make objects about ponies n bronies',
    date: `August 27th, 2018`,
  },
  {
    title: 'Test three',
    description: 'Sam loves it',
    date: `August 27th, 2018`,
  },
];
let newPosts = posts.filter(post => {
  if (post.title === `Test three`) return false;
  return true;
});

console.log(newPosts);
