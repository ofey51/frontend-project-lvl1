import { greeting, answer } from '../index.js';

const brainPrime = () => {
  const userName = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let correctAnswers = 0;
  const numGenerator = () => Math.floor(Math.random() * 101);

  while (correctAnswers < 3) {
    const number = numGenerator();
    let trueAnswer = true;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        trueAnswer = false;
        break;
      }
    }
    trueAnswer = trueAnswer === true ? 'yes' : 'no';
    const question = number;
    if (answer(question, trueAnswer, userName)) {
      correctAnswers += 1;
    } else break;
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainPrime;
