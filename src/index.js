import readlineSync from 'readline-sync';
import getUserName from '../bin/cli.js';

const guess = (question, answer, player) => {
  const userAnswer = readlineSync.question(`Question: ${question}\nYour Answer: `);
  if (answer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${player}!`);
  return false;
};

const game = (runGame) => {
  let correctAnswers = 0;
  const rounds = 3;
  console.log('Welcome to the Brain Games!');
  const player = getUserName();
  const [rules, round] = runGame();
  console.log(rules);

  while (correctAnswers < rounds) {
    const [question, answer] = round();
    if (guess(question, answer, player)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }
  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${player}!`);
  }
};

export default game;
