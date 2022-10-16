import readlineSync from 'readline-sync';

const userName = () => {
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hi ' + userName + '!');
}

export default userName;