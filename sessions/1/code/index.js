import prompt from 'shared/prompt';

const run = async () => {
  let answer = await prompt('Hello!');
  console.log('they sent us:', answer);
};

run();
