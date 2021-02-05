window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onmousemove = showCoords;

}

function showCoords(eventObj) {
    var coords = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    coords.innerHTML = "Map coordinates :" + x + " , " + y;
}

function timerHandler() {
    alert("Hey !");
}

setTimeout(timerHandler, 5000);