var userClickedPattern = [];
var gamePattern = [];
var level = 0;
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").html("Level "+ level);
    let randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    // userClickedPattern = [];
}

$(document).on("keypress", function(){
    if(!started){
    $("#level-title").html("Level 0");
    nextSequence();
    started = true;
}
});


$(".btn").click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor); 

    playSound(userChosenColor);
    animatePress(userChosenColor);

    // var lastAnswer = userClickedPattern.indexOf(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
})

function checkAnswer(currentLevel) {
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
       console.log("success");
       if(gamePattern.length === userClickedPattern.length){
       setTimeout(function(){nextSequence();}, 1000);
    } 
}
    else {
        startOver();
        console.log("wrong");
        $("#level-title").html("Game Over, Press Any key to Restart")
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 300);
        
    }
    
}
function playSound(name) {
    var audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed")
    }, 100);
}

function startOver() {
    level = 0;
    started = false;
    gamePattern = [];

}


























// function makeSound(key) {
//     switch (key) {
//         case "red":
//             var redSound = new Audio("sounds/red.mp3");
//             redSound.play();
//             break;
//         case "green":
//             var greenSound = new Audio("sounds/green.mp3");
//             greenSound.play();
//             break;
//         case "blue":
//             var blueSound = new Audio("sounds/blue.mp3");
//             blueSound.play();
//             break;
//         case "yellow":
//             var yellowSound = new Audio("sounds/yellow.mp3");
//             yellowSound.play();
//             break;

//         default:
//             var wrongSound = new Audio("sounds/wrong.mp3");
//             wrongSound.play();
//             break;
//     }
// }

// makeSound(randomChosenColor);

