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
    description: 'Alex loves to make objects about ponies n bronies',
    date: `August 27th, 2018`,
  },
];

let newPosts = posts.filter(post => {
  if (post.title === 'Test three') return false;

  return true;
});

console.log(newPosts);
