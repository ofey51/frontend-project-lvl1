import { greeting, answer } from '../src/index.js';

const brainCulc = () => {
  const userName = greeting();
  console.log('What is the result of the expression?');

  let correctAnswers = 0;
  const operators = ['+', '-', '*'];
  const numGenerator = () => Math.floor(Math.random() * 5);

  while (correctAnswers < 3) {
    const num1 = numGenerator();
    const num2 = numGenerator();
    const operator = operators[Math.floor(Math.random() * 3)];
    const question = `${num1} ${operator} ${num2}`;
    let trueAnswer = undefined;
    
    if (operator === '+') {
      trueAnswer = num1 + num2;
    } else if (operator === '-') {
      trueAnswer = num1 - num2;
    } else if (operator === '*') {
      trueAnswer = num1 * num2;
    }

    trueAnswer = trueAnswer.toString();
    
    if (answer(question, trueAnswer, userName)) {
      correctAnswers += 1;
    } else break;
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainCulc;