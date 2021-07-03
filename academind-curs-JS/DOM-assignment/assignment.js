// let task1 = document.getElementById('task-1');
// task1.style.backgroundColor = 'black';
// task1.style.color = 'white';

let tasks = document.getElementsByTagName('li');
let firstTask = tasks[0];
firstTask.style.backgroundColor = 'black';
firstTask.style.color = 'white';

// const title = document.querySelector('title');
// title.textContent = 'Assignment - Solved!';

document.title = 'Assignment - Solved!';

const mainHeading = document.querySelector('h1');
mainHeading.textContent = 'Assignment - Solved!';

const list = document.querySelector('ol');
console.log(list.children)