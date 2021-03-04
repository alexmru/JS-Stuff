const express = require("express");
const app = express();

app.get("/about", function(req, res) {
    res.send("<h1> About me ... </h1><br><p>I am trying to be one of the best</p>")
});

app.listen(3000, function(){
    console.log("The server has started on port 3000!")
});
