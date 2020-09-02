const express = require("express")

const handleCreateStory = require('./handlers/handleCreateStory');
const handleFindStories = require("./handlers/handleFindStories");

const storyRoute = express.Router();


storyRoute.post("/", handleCreateStory );
storyRoute.get("/", handleFindStories );
storyRoute.get("/:id", (req,res) => res.send("You reached story with id"));
storyRoute.patch("/:id", (req,res) => res.send("You updated stories"));
storyRoute.delete("/", (req,res) => res.send("You deleted stories"));


module.exports = storyRoute;
