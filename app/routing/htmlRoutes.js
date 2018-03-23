
var path = require("path");
var friends = require("../data/friends");

// * A GET Route to `/survey` which should display the survey page.
module.exports = function (app) {

    app.get("/", function (req, res) {
        console.log("hit root");
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/api/friends", function (req, res) {
        res.json(friends);

    })

}
