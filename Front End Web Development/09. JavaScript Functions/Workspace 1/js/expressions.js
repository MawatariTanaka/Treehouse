console.log(getRandomNumber(10));

function getRandomNumber(upper) {
  const randomNumber = Math.floor(Math.random() * upper) + 1;
  return randomNumber;
}

// const getRandomNumber = function (upper) {
//   const randomNumber = Math.floor(Math.random() * upper) + 1;
//   return randomNumber;
// };
// s

// getRandomNumber(10);