/////////////// DEPENDENCIES
const express = require("express");	
const mongoose = require("mongoose");

/////////////// GLOBAL CONFIGURATION
const mongoURI = "mongodb://localhost:27017/" + "csps"
const db = mongoose.connection;

/////////////// CONNECT TO MONGO
mongoose.connect(mongoURI)

/////////////// APP CONFIGURATION
const APP = express();
const PORT = 3000;


/////////////// CONTROLLER LOGIC
const collectionController = require("./controllers/cspcollection.js")

/////////////// MIDDLEWARE
APP.use(collectionController)

	/////////////// DATABASE CONFIGURATION


	/////////////// LISTENER
APP.listen(PORT, () => {
	console.log("Listening on PORT: " + PORT)
})

