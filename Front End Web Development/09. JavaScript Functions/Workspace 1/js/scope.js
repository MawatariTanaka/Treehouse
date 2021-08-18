//Global scope
let person = 'Lee';

function greeting() {
  // Function scope
  let person = 'Meg';
  alert(`Hi, ${person}!`);
}

function greeting2() {
  // Function scope
  let person = 'Robert';
  alert(`Good morning, ${person}!`);
}

greeting();
alert(`Hi, ${person}!`);
greeting2();