// Collect input from a user
const inputLow = prompt('Please provide a number.');
const inputHigh = prompt('Please provide another number.');

// Convert the input to a number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

if (lowNumber && highNumber) {
    // Use Math.random() and the user's number to generate a random number
    const randomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;

    // Create a message displaying the random number
    alert(`${randomNumber} is a number between ${lowNumber} and ${highNumber}.`);
} else {
    alert('You need to provide two numbers. Try again.')
}