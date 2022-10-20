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
    const answer = String(findGcd(num2, num1));
    return [question, answer];
  };
  return [rules, round];
};

export default brainGcd;
