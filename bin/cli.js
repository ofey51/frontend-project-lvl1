import readlineSync from 'readline-sync';

const getUserName = () => readlineSync.question('May I have your name? ');

const getUserAnswer = (question) => readlineSync.question(`Question: ${question}\nYour Answer: `);

export { getUserName, getUserAnswer };
