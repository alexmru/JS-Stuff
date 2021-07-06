let modal = document.getElementById("add-modal");
let backdrop = document.getElementById('backdrop');

let startAddMovieButton = document.querySelector('header button');
let closeModalButton = document.querySelector('.btn--passive');
let addMovieButton = closeModalButton.nextElementSibling;
let userInputs = modal.querySelectorAll('input');
let entryCard = document.getElementById('entry-text');

let movies = [];

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    toggleBackdrop();
    modal.classList.toggle('visible');
}

const clearInputs = () => {
    for(item of userInputs) {
        item.value = '';
    }
}

const updateUI = () => {
    if(movies.length === 0) {
        entryCard.style.display = 'block';
    } else if (movies.length > 0) {
        entryCard.style.display = 'none';        
    }
}

const renderNewMovie = (title, imageUrl, value) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = '.movie-element';
}

const addMovie = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || ratingValue < 1 || ratingValue > 5) {
        alert('Please enter valid values');
        return;
    }
    const newMovie = {
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue
    };

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    clearInputs();
    updateUI();


}




startAddMovieButton.addEventListener('click', toggleMovieModal)
closeModalButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal)
addMovieButton.addEventListener('click', addMovie)