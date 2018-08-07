/* Make an object with 4 keys
  title, description, date
*/

let post = {
  title: 'Test post',
  description: 'Mckinley loves to make objects about ponies',
  date: `August 27th, 2018`,
};

/*

make a while loop that puts the title 5 times in the console
*/

let start = 0;

while (start < 5) {
  start++;
  console.log(post.title);
}
