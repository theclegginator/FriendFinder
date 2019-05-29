// dependency for path npm module.
const path = require("path");
const express = require("express");

// List of HTML routes below.
module.exports = function(app) {
    // allows us to link to files such as background images through routing
    app.use(express.static("public"));

    // If the user only types a "/", we send them to the home page. 
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  
    // This route will send the user to the survey page where they answer questions.
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    // wildcard
    app.get("/*", async function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    })
};