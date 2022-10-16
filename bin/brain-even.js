#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from './cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
let correctAnswers = 0;

while(correctAnswers < 3) {
    const number = Math.floor(Math.random() * 101);
    const trueAnswer = number % 2 === 0 ? "yes" : "no";
    const userAnswer = readlineSync.question(`Question: ${number}\nYour Answer: `);

    if (trueAnswer === userAnswer) {
        correctAnswers += 1;
        console.log("Correct!");
    } else {
        console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${trueAnswer}.\nLet's try again, ${userName}!`);
        break;
    }
}

if (correctAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
}
