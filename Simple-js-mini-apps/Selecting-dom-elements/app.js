const h1 = document.getElementById('main-title');
const ul = document.querySelector('ul');


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
    console.log(btn.id)
  }
  ul.classList.toggle('bg-red')
})

let btn2 = document.getElementById('click2');
btn2.addEventListener('mouseover', () => {
  for(i=0; i< listItemElements.length; i++) {
    listItemElements[i].textContent = `Item ${i+1}`;
    listItemElements[i].style.fontSize = '30px'
  }
})

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}

// crearea unui nou element in lista

const newLi = document.createElement('li');
newLi.textContent = 'new list item , created with JS'
ul.appendChild(newLi);

const firstLi = document.createElement('li');
firstLi.textContent = 'Acesta va fi primul item';
ul.prepend(firstLi);
