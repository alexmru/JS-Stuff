$("h1").css("color", "red");

$("h1").click(function(event){
    $("h1").css("font-size", "44px");
    console.log(event);
});

$(document).keypress(function(event){
    console.log(event.key);
    $("h1").text(event.key);
})