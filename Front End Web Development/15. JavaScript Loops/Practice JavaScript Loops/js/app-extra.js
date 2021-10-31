const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let message;
let guess = prompt(`Guess a number between 1 and 10.`);

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

for (let i = 9; i >= 1; i--) {
    if (+guess > randomNumber) {
        guess = prompt(`Guess a lower number. You have ${i} more tries.`);
    } else if (+guess < randomNumber) {
        guess = prompt(`Guess a higher number. You have ${i} more tries.`);
    } else if (+guess === randomNumber) {
        message = `You guessed the number! It was ${randomNumber}.`;
        break;
    }
    message = `You did not guess the number. It was ${randomNumber}.`;
}

main.innerHTML = `<h1>${message}</h1>`;