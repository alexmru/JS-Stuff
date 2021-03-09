const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const exit = document.querySelector('.popup-close');


button.addEventListener('click', (e) => {
    popup.style.display = 'block';
})

exit.addEventListener('click',() => {
    popup.style.display = "none";
} )

popup.addEventListener('click',() => {
    popup.style.display = "none";
} )
