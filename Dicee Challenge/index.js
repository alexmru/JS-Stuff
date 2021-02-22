var randomNumber1 = Math.floor(Math.random()*6)+1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
console.log(randomNumber2);

var img1 = document.querySelector(".img1");
console.log(img1);
img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var img2 = document.querySelector(".img2");
console.log(img2);
img2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    var title = document.querySelector("h1");
    if (randomNumber1 > randomNumber2) {
        title = title.innerHTML = "Player 1 Wins!! 🏴󠁧󠁢󠁥󠁮󠁧󠁿 ";
    } else if ( randomNumber2 > randomNumber1){
        title = title.innerHTML = "Player 2 Wins!! 🏴󠁧󠁢󠁥󠁮󠁧󠁿 ";
    } else {
        title = title.innerHTML = "Draw !!"
    }


