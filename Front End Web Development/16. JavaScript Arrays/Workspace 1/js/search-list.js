const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;

if (search) {
    search = search.toLowerCase();
}

if (!search) {
    message = `<strong>In stock:</strong> ${inStock.join(', ')}`;
} else if (inStock.includes(search)) {
    message = `Yes, we have <strong>${search}</strong>. It's #${inStock.indexOf(search) + 1} on the list!`;
} else {
    message = `Sorry, we do not have <strong>${search}</strong>.`;
}

document.querySelector('main').innerHTML = message;