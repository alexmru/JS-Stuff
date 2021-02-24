var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

nextSequence = function () {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

randomChosenColor = buttonColors[nextSequence()];
// console.log(randomChosenColor);

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

function makeSound(key) {
    switch (key) {
        case "red":
            var redSound = new Audio("sounds/red.mp3");
            redSound.play();
            break;
        case "green":
            var greenSound = new Audio("sounds/green.mp3");
            greenSound.play();
            break;
        case "blue":
            var blueSound = new Audio("sounds/blue.mp3");
            blueSound.play();
            break;
        case "yellow":
            var yellowSound = new Audio("sounds/yellow.mp3");
            yellowSound.play();
            break;

        default:
            var wrongSound = new Audio("wrong.mp3");
            wrongSound.play();
            break;
    }
}

makeSound(randomChosenColor);