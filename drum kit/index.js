// document.getElementsByTagName("button").addEventListener("click", handleClick);
var buttons = document.querySelectorAll(".drum");

function handleEvents() {
    for(i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function(){
        this.style.color = "white";
    });
    }
}
handleEvents();

function handleClick () {
    sound.play();
    
}

var sound = new Audio("sounds/tom-1.mp3");













































// function add(num1, num2) {
//     return num1 + num2;
// }

// function subtract(num1, num2) {
//     return num1 - num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// function divide(num1, num2) {
//     return num1 / num2;
// }

// function calculator (num1, num2, operator) {
//     return operator(num1, num2);
// }

// console.log(calculator(100,50, subtract));
// console.log(calculator(100,50, divide));