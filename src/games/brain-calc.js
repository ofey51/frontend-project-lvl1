import random from '../utils.js';

const applyOperation = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const brainCulc = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const operators = ['+', '-', '*'];
    const num1 = random(0, 15);
    const num2 = random(0, 15);
    const operator = operators[random(0, 2)];
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(applyOperation(num1, num2, operator));

    return [question, answer];
  };

  return [rules, round];
};

export default brainCulc;
