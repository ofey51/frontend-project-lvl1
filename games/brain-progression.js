import { greeting, answer } from '../src/index.js';

const brainProgression = () => {
  const userName = greeting();
  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  const numGenerator = (n) => Math.floor(Math.random() * n);
  const arrayLength = 10;

  while (correctAnswers < 3) {
    const firstElement = numGenerator(15);
    const array = [firstElement];
    const commonDifference = 1 + numGenerator(5);
    const hiddenElement = numGenerator(arrayLength - 1);

    for (let i = 1; i < arrayLength; i += 1) {
      array.push(array[i - 1] + commonDifference);
    }
    const trueAnswer = String(array[hiddenElement]);
    array[hiddenElement] = '..';
    const question = array.join(' ');
    if (answer(question, trueAnswer, userName)) {
      correctAnswers += 1;
    } else break;
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainProgression;
