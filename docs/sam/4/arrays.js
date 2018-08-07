let post1 = {
  title: 'Macbook',
  description: 'nothere',
  date: 'today',
};

let post2 = {
  title: 'Test two',
  description: 'Alex loves to make objects about ponies n bronies',
  date: 'tomorrow',
};

let post3 = {
  title: 'test three',
  description: 'nothere',
  date: 'today',
};

let posts = [post1, post2, post3];

// for (let i = 0; i < posts.length; i++) {
//   console.log('hello');
// }

let start = 0;

// while (start < posts.length) {
//   console.log(posts[start].title);
//   start++;
// }

let each = post => {
  console.log(post);
};

posts.forEach(each);

posts.forEach(post => console.log(post));
