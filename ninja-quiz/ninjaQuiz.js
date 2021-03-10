const correctAnswers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const scoreDiv = document.querySelector('.result');
const scoreSpan = document.querySelector('span');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    
    scoreDiv.classList.remove('d-none');

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
            
        }
    })
    scrollTo(0,0);
    

    let i = 0;
    const timer = setInterval(() => {
        scoreSpan.textContent = `${i}%`;
        if(i === score) {
            clearInterval(timer);
        } else {
            i++;
        }
    }, 10);

    
})