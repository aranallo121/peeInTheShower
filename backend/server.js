//dependancies
var express = require("express");
var cors = require("cors");
var logger = require("morgan");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var peopleRoutes = require("./routes/peopleRoute.js");
var path = require("path");

//create the server by calling express
var app = express();
mongoose.connect("mongodb://localhost/people", function(){
    console.log("mongoose is connected");
});

app.use(express.static(path.join(__dirname,"..",'frontend')))

//middleware
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());

//routes
app.use("/people", peopleRoutes)


app.listen(8080, function() {
    console.log("app is listening on port 8080")
})