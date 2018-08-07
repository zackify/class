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

let newPosts = posts.filter(post => {
  if (post.title === 'test three') return false;
  else return true;
});
console.log(newPosts);
