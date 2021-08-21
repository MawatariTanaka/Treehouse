/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function getRandomNumber(lower, upper) {
    if (isNan(lower) || isNan(upper)) {
        throw Error('Both elements must be numbers.')
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + 1;
}
Math.floor(Math.random() * (6 - 1 + 1)) + 1;

// Call the function and pass it different values

console.log(getRandomNumber(1, 6));
console.log(getRandomNumber(10, 100));
console.log(getRandomNumber(200, 500));