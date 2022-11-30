import getRandomNumber from '../additionalContent/randomNumber.js';
import gameRounds from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error('Error!');
  }
};

const getRoundData = () => {
  const operators = ['*', '+', '-'];
  const num1 = getRandomNumber(1, 30);
  const num2 = getRandomNumber(1, 30);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(calculate(num1, operator, num2));
  return [question, rightAnswer];
};

const startGame = () => gameRounds(description, getRoundData);
export default startGame;
