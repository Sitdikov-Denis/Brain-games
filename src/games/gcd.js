import getRandomNumber from '../additionalContent/randomNumber.js';
import gameRounds from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return gcd(number2, number1 % number2);
};

const getRoundData = () => {
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const question = `${randomNumber1} ${randomNumber2}`;

  return [question, String(gcd(randomNumber1, randomNumber2))];
};

const startGame = () => gameRounds(description, getRoundData);
export default startGame;
