import random from '../utils.js';

const brainCulc = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const operators = ['+', '-', '*'];
    const num1 = random(0, 15);
    const num2 = random(0, 15);
    const operator = operators[random(0, 1)];
    const question = `${num1} ${operator} ${num2}`;
    let answer;
    switch (operator) {
      case '+':
        answer = String(num1 + num2);
        break;
      case '-':
        answer = String(num1 - num2);
        break;
      case '*':
        answer = String(num1 * num2);
        break;
      default:
        answer = null;
        break;
    }
    return [question, answer];
  };
  return [rules, round];
};

export default brainCulc;
