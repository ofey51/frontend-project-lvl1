import random from '../utils.js';

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const findGcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return findGcd(num2, num1 % num2);
  };

  const round = () => {
    const num1 = random(0, 50);
    const num2 = random(0, 50);
    const question = `${num1} ${num2}`;
    const trueAnswer = String(findGcd(num2, num1));
    return [question, trueAnswer];
  };
  return [rules, round];
};

export default brainGcd;
