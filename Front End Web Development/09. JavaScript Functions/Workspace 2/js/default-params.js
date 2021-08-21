function sayGreeting (greeting = 'Good morning', name = 'student') {
    return `${greeting}, ${name}!`;
}
/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

 function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
  }