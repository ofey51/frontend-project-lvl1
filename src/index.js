import readlineSync from 'readline-sync';
import getUserName from '../bin/cli.js';

const greet = () => {
  console.log('Welcome to the Brain Games!');
  return getUserName();
};

const answer = (question, trueAnswer, userName) => {
  const userAnswer = readlineSync.question(`Question: ${question}\nYour Answer: `);
  if (trueAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`);
  return false;
};

const game = (gameRules) => {
  let correctAnswers = 0;
  const rounds = 3;
  const player = greet();
  const [rules] = gameRules();
  console.log(rules);

  while (correctAnswers < rounds) {
    const [, [question, trueAnswer]] = gameRules();
    if (answer(question, trueAnswer, player)) {
      correctAnswers += 1;
    } else {
      break;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${player}!`);
  }
};

export { game };
