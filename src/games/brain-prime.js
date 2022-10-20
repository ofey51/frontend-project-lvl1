import random from '../utils.js';

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const number = random(1, 100);
    let answer = number !== 1;
    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        answer = false;
        break;
      }
    }
    answer = answer ? 'yes' : 'no';
    const question = number;
    return [question, answer];
  };
  return [rules, round];
};

export default brainPrime;
