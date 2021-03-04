const express = require("express");
const app = express();
const bodyParser = require("body-parser")

app.listen(3000, function() {
    console.log("Calculator has started !")
});
app.use(bodyParser.urlencoded({extended: true}));

app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;
    res.send("Result is " + result);
})

app.post("/bmicalculator", function(req, res) {
    var height = Number(req.body.no1);
    var weight = Number(req.body.no2);

    var result2 = weight/(height*height);
    res.send("Result is " + result2);
 
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})


app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})


