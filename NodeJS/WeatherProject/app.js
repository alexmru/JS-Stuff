const { response } = require("express");
const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
const { request } = require("http");


app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    
    const query = req.body.cityName;
const apiKeyAndUnits = "&appid=384465e1fd15499e205993608adb550d&units=metric"
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + apiKeyAndUnits;
    https.get(url, function(response){

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const cntry = weatherData.sys.country;
            console.log(cntry);
            res.write("<h1>Temperatura in "+ req.body.cityName +" este " + temp + " grade celsius!</h1>");
            res.write("<p>"+ req.body.cityName +" se afla in</p> " + cntry);
            res.send();
        })
    })

})


   

app.listen(3000, function() {
    console.log("Server started !")
});



