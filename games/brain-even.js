import { greeting, answer } from '../src/index.js';

const brainEven = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const question = Math.floor(Math.random() * 101);
    const condition = (question % 2 === 0);
    const trueAnswer = condition ? 'yes' : 'no';
    if (answer(question, trueAnswer, userName)) {
      correctAnswers += 1;
    } else break;
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainEven;
