import { numGenerator } from '../utils.js';

const brainCulc = () => {
  const rules = 'What is the result of the expression?';
  const round = () => {
    const operators = ['+', '-', '*'];
    const num1 = numGenerator(0, 5);
    const num2 = numGenerator(0, 5);
    const operator = operators[numGenerator(0, 2)];
    const question = `${num1} ${operator} ${num2}`;
    let trueAnswer;
    switch (operator) {
      case '+':
        trueAnswer = num1 + num2;
        break;
      case '-':
        trueAnswer = num1 - num2;
        break;
      case '*':
        trueAnswer = num1 * num2;
        break;
      default:
        trueAnswer = null;
        break;
    }
    trueAnswer = String(trueAnswer);
    return [question, trueAnswer];
  };

  return [rules, round()];
};

export default brainCulc;
