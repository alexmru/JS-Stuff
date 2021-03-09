const form = document.querySelector(".form1");
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if(usernamePattern.test(username)) {
        feedback.textContent = "Username valid!"
    } else {
        feedback.textContent = "Username is not valid!"
    }
});

//live feedback event

form.username.addEventListener('keyup', e => {
    // console.log(form.username.value);
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'failed');
    }
})