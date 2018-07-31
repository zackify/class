//continued from last class

let start = 10 * 2;

let end = 5;

let greetings = {
  first: 'Hello',
  anytime: `What's up`,
  end: 'Goodbye',
};

while (start * 2 > end) {
  start--;

  if (start === 10) {
    console.log(greetings.first);
  }
}
