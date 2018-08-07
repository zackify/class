let start = 10;
let end = 5;

let greetings = {
  first: `Hello`,
  anytime: `What's up`,
  end: `goodbye`,
};

while (start * 2 > end) {
  start--;

  if (start === 10) {
    console.log(greetings.first);
  }
}
