
var path = require("path");
var friends = require("../data/friends");

// * A GET Route to `/survey` which should display the survey page.
module.exports = function(app){

    app.get("/", function (req, res) {
        console.log("hit root");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // * A default, catch-all route that leads to `home.html` which displays the home page. 


    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

app.get("/api/friends", function (req, res) {
    res.json(friends);

})

}
