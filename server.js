// require express and path modules
const express = require("express");
const path = require("path");

// initialize express
const app = express();

// define a port for local use or allow hosting server to define.
const PORT = process.env.PORT || 3000;

// allows express to utilize data parsing.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//=========================
// ROUTES SECTION
//=========================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
