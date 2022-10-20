import readlineSync from 'readline-sync';
import getUserName from '../bin/cli.js';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  return userName;
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

export { greeting, answer };
