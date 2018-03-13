//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express environment
var app = express();
// var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({type: "application/vnd.api+json"}));
app.use(express.static(path.join(__dirname, "app/public")));

//require needed
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  