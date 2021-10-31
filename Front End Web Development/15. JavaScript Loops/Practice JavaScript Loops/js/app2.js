const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;

function getRandomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

for (let i = 10; i >= 1; i--) {
    let guess = prompt(`You have ${i} tries to guess a number between 1 and 10.`);
    if (parseInt(guess) === randomNumber) {
        message = `It took you ${i} tries to guess the number ${randomNumber}.`;
        break;
    } else {
        message = `You did not guess the number. It was ${randomNumber}.`;
    }
}

main.innerHTML = `<h1>${message}</h1>`;