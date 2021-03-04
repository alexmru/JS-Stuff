const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { post } = require("request");
const mailchimp = require("@mailchimp/mailchimp_marketing");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

   const data = {
       members: [
           {
            email_adress: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }
       ]

   };

   const jsonData = JSON.stringify(data);

   const url = "https://us1.api.mailchimp.com/3.0/lists/5ee677aeb1";

   const options = {
       method: "POST",
       auth: "alexm:b9188fb707111385c510eb23b4faeef7-us1"

   }

   const request = https.request(url, options, function(response) {
       response.on("data", function(data) {
           console.log(JSON.parse(data));
       })
   })

})

    request.write(jsonData);
    request.end();

// API Key 

// b9188fb707111385c510eb23b4faeef7-us1

// List ID 
// 5ee677aeb1