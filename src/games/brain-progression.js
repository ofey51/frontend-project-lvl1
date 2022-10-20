import { numGenerator } from '../utils.js';

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const round = () => {
    const progressionLength = 10;
    const commonDifference = numGenerator(1, 5);
    const firstElement = numGenerator(0, 15);
    const progression = [firstElement];
    const hiddenElement = numGenerator(0, progressionLength - 1);

    for (let i = 1; i < progressionLength; i += 1) {
      progression.push(progression[i - 1] + commonDifference);
    }
    const trueAnswer = String(progression[hiddenElement]);
    progression[hiddenElement] = '..';
    const question = progression.join(' ');
    return [question, trueAnswer];
  };
  return [rules, round()];
};

export default brainProgression;
