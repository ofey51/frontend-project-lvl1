import { greeting, answer } from '../index.js';

const brainGcd = () => {
  const userName = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  const numGenerator = () => Math.floor(Math.random() * 101);
  const findGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return findGcd(num2, num1 % num2);
  };

  while (correctAnswers < 3) {
    const num1 = numGenerator();
    const num2 = numGenerator();
    const question = `${num1} ${num2}`;
    const trueAnswer = String(findGcd(num2, num1));
    if (answer(question, trueAnswer, userName)) {
      correctAnswers += 1;
    } else break;
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainGcd;
