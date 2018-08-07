let post1 = {
  title: 'Test post',
  description: 'Mckinley loves to make objects about ponies',
  date: `August 27th, 2018`,
};

let post2 = {
  title: 'Test two',
  description: 'Alex loves to make objects about ponies n bronies',
  date: `August 27th, 2018`,
};

let post3 = {
  title: 'Test three',
  description: 'Alex loves to make objects about ponies n bronies',
  date: `August 27th, 2018`,
};

let postsObject = {
  post1: post1,
  post2: post2,
};

let posts = [post1, post2, post3];

for (let index = 0; index < posts.length; index++) {
  console.log(posts[index].title);
}

let index = 1;
let index2 = 2;

console.log(posts[index].title);
console.log(posts[index2].title);
