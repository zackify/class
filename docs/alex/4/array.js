//shortcut for console
function c(l) {
  console.log(l);
}

let post1 = {
  title: 'Test one',
  description: 'Mickinley loves to make objects about ponies',
  date: `August 27th, 2018`,
};

let post2 = {
  title: 'Test two',
  description: 'Alex loves to make objects about bronies n ponies',
  date: `August 27th, 2018`,
};

let post3 = {
  title: 'Test three',
  description: 'Alex loves to make objects about bronies n ponies',
  date: `August 27th, 2018`,
};

let postsObject = {
  post1: post1,
  post2: post2,
};

let posts = [post1, post2, post3];

c(posts.length);

console.log(posts);

for (let i = 0; i < posts.length; i++) {
  c(i + ' hello');
}
