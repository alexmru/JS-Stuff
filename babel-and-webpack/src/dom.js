console.log('dom file');

const body = document.querySelector('body');

const stylebody = () => {
    body.style.background = 'peachpuff';
}

const addTitle = (text) => {
    const title = document.createElement('h1');
    title.innerText = text;
    body.appendChild(title);
}

stylebody();
addTitle('Hello from the dom.js file');

const contact = 'alex@themanthelegend.com';

export {stylebody, addTitle, contact};