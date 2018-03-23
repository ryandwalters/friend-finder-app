var friendsList = require("../data/friends.js");
var path = require("path");


 module.exports = function (app) {

    // * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    app.get("/friends", function (req, res) {
        res.json(friendsList);
    })

    app.post("/friends", function (req, res) {

        console.log("hit post");
        var bestMatch = {
            name: "",
            photo: "",   
            likes: ""
        }

        var userTotal = sum(req.body.scores);
        var friendTotal = 0;
        var closest = 50;

        for (var i = 0; i < friendsList.length; i++) {
            friendTotal = sum(friendsList[i].scores);

            var difference = Math.abs(friendTotal - userTotal);
            if (difference <= closest) {
                closest = difference;
                bestMatch.name = friendsList[i].name;
                bestMatch.photo = friendsList[i].photo;
                bestMatch.likes = friendsList[i].likes;
            }
        };

        function sum(array) {
            var total = 0;
            for (var n = 0; n < array.length; n++) {
                total += parseInt(array[n]);
            }
            return total;
        }
        res.json(bestMatch);
    });

} 



