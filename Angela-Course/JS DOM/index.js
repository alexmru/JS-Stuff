document.querySelector("ul").lastElementChild.innerHTML = "Alex";
var googleLink = document.querySelector(".list a");
document.querySelector(".list a").innerHTML = "Changed the text";
// googleLink.setAttribute("color", "yellow");
// document.querySelector("li a").style.color = "yellow";

document.querySelector(".list a").style.color = "purple";
var btn = document.querySelector("button");
// btn.style.backgroundColor= "yellow";
document.querySelector("button").classList.add("huge");
// document.querySelector("button").classList.toggle("huge");