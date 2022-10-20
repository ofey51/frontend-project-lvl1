import random from '../utils.js';

const brainCulc = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const operators = ['+', '-', '*'];
    const num1 = random(0, 15);
    const num2 = random(0, 15);
    const operator = operators[random(0, 1)];
    const question = `${num1} ${operator} ${num2}`;
    let trueAnswer;
    switch (operator) {
      case '+':
        trueAnswer = String(num1 + num2);
        break;
      case '-':
        trueAnswer = String(num1 - num2);
        break;
      case '*':
        trueAnswer = String(num1 * num2);
        break;
      default:
        trueAnswer = null;
        break;
    }
    return [question, trueAnswer];
  };
  return [rules, round];
};

export default brainCulc;
