const h1 = document.getElementById('main-title');


h1.textContent = 'Some new title!';
h1.style.color = 'white';
h1.style.backgroundColor = 'black';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';
const firstListItem = document.querySelector('.list-item');
firstListItem.className = 'another-class';

const body = document.body;

// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');

let btn = document.getElementById('click-me');
btn.addEventListener('click', () => {
  for(item of listItemElements) {
    item.textContent = 'haha i changed this';
    item.style.fontSize = '30px';
  }
})

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}