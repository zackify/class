const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export default question =>
  new Promise(resolve => {
    rl.question(`${question}: `, answer => resolve(answer));
  });
