// load existing data from the friends.js file
const friends = require("../data/friends");

module.exports = function (app) {
  // API GET request for the current data in friends array.
  app.get("/api/friends", function (req, res) {
    // returns JSON for the friends array.
    res.json(friends);
  });
  // POST route for adding a friend through the API upon form submit.
  app.post("/api/friends", function (req, res) {
    let newFriend = req.body;
    let match = checkCompatibility(newFriend); // Send the new friend we just posted to the function.
    // Push the new friend into the friends array variable in friends.js
    friends.push(newFriend);
    res.json(match);
  });
}

function checkCompatibility(newFriend) {
  let currentCheck = [];
  let differences = [];
  for (let i = 0; i < friends.length; i++) {
    let totalDiff = 0; // reset the total difference (a score of the differences between the sample user and each checked user from the api)
    currentCheck = friends[i].scores; // pull the scores array for the first user in the API route.
    for (let q = 0; q < currentCheck.length; q++) {
      totalDiff = totalDiff + Math.abs(newFriend.scores[q] - currentCheck[q]); // adds the difference for each question together.
    }
    differences.push(totalDiff); // add the total differences to an array.
  }
  // Now that comparing scores is done, find the smallest value in the differences array. This is the best match.
  let temp = 100; // set the temp check value too high, so it will always be lowered.
  let index = 0; // set a temporary index. We will use this to find the index within the friends array that is the best match.
  for (let r = 0; r < friends.length; r++) {
    if (differences[r] < temp) {
      temp = differences[r];
      index = r;
    }
  }
  let bestMatch = friends[index];
  return bestMatch;
}
