//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//express environment
var app = express();
var PORT = process.env.PORT || 3000; 

app.use(express.static(path.join(__dirname, "/public")));



app.use(bodyParser.text({type: 'text/html'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({ type: 'application/*+json'}));
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

//require needed
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  