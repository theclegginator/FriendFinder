// load existing data from the friends.js file
const friends = require("../data/friends");

module.exports = function(app) {
  // API GET request for the current data in friends array.
  app.get("/api/friends", function(req, res) {
    // returns JSON for the friends array.
    res.json(friends);
  });
  // POST route for adding a friend through the API upon form submit.
  app.post("/api/friends", function(req, res) {
      var newFriend = req.body;
      //newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
      // Push the new friend into the friends array variable in friends.js
      friends.push(newFriend);
      res.json(newFriend);
    });
}
