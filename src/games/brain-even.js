import random from '../utils.js';

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const round = () => {
    const question = random(0, 100);
    const trueAnswer = (question % 2 === 0) ? 'yes' : 'no';
    return [question, trueAnswer];
  };
  return [rules, round];
};

export default brainEven;
