import './styles/tooltip.css'

class Tooltip {
    constructor(element) {
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        // creeaza un DIV pe care il ataseaza spanului cu this.message in interior
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        this.element.appendChild(tip);

        //adaugam listeneri pentru momentul in care ajungem cu mouse-ul peste SPAN
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        })
        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        })
    }
}

export { Tooltip as default };