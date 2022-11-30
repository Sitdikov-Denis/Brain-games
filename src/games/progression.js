import getRandomNumber from '../additionalContent/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What number is missing in the progression?';

const generateProgression = (firstItem, step, length) => {
  const array = [];

  for (let i = 0; i < length; i += 1) {
    const element = firstItem + step * i;
    array.push(element);
  }
  return array;
};

const getRoundData = () => {
  const firstElem = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(10, 10);

  const progression = generateProgression(firstElem, step, length);
  const randomIndex = Math.round(Math.random() * progression.length);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const startGame = () => gameRounds(description, getRoundData);
export default startGame;
