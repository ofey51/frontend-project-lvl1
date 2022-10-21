import { getUserName, getUserAnswer } from '../bin/cli.js';

const runGame = (game) => {
  let correctAnswers = 0;
  const rounds = 3;
  const [rules, round] = game();
  const player = getUserName();
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${player}!`);
  console.log(rules);

  while (correctAnswers < rounds) {
    const [question, answer] = round();
    const userAnswer = getUserAnswer(question);

    if (answer === userAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${player}!`);
      return;
    }
  }
  console.log(`Congratulations, ${player}!`);
};

export default runGame;
