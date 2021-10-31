const main = document.querySelector('main');
const randomNumber = getRandomNumber(10);
let guess;
let message;
// Keep track of the number of guess attempts
let attempt = 0;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

// TODO: Use a loop to create a number guessing game
//  1) Ask the user to enter a number and assign that value to the `guess` variable
//  2) End the loop when the user's guess matches the random number
//  3) Display a message letting the user know they guessed the number

do {
  guess = prompt("I am thinking of a number between 1 and 10. What is it?");
  attempt++;
  //Terminate loop if the user guesses the number
  if (parseInt(guess) === randomNumber) {
    message = `You took ${attempt} tries to guess the number ${randomNumber}.`;
    break;
  } else {
    message = `You did not guess the number. It was ${randomNumber}.`;
  }
} while (attempt < 10);

main.innerHTML = `<h1>${message}</h1>`;