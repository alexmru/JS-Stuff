//store data to local storage

localStorage.setItem('nickname', 'mario');
localStorage.setItem('age', 20);

// get data from local storage

let nick = localStorage.getItem('nickname');
let age = localStorage.getItem('age');

console.log(nick, age);


//update data in local storage

localStorage.setItem('nickname', 'alex');
nick = localStorage.getItem('nickname');
console.log(nick, age);


// localStorage.name = 'oana';

// Removing an item from local storage

// localStorage.removeItem('age');



localStorage.clear();

age = localStorage.getItem('age');

console.log(nick, age);