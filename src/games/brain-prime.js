import { numGenerator } from '../utils.js';

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const round = () => {
    const number = numGenerator(1, 100);
    let trueAnswer = true;
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0 || number === 1) {
        trueAnswer = false;
        break;
      }
    }
    trueAnswer = trueAnswer ? 'yes' : 'no';
    const question = number;
    return [question, trueAnswer];
  };
  return [rules, round()];
};

export default brainPrime;
