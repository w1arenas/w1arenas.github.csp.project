/////////////// DEPENDENCIES
const express = require("express");	
const mongoose = require("mongoose");

/////////////// GLOBAL CONFIGURATION
const mongoURI = "mongodb://localhost:27017/" + "csps"
const db = mongoose.connection;

/////////////// CONNECTION ERROR/SUCCESS
db.on("error", (err) => console.log(err.message + "is Mongo not running"));
db.on("connected", () => console.log("Mongo connected: " + mongoURI));
db.on("disconnected", () => console.log("Mongo disconnected"));

/////////////// CONNECT TO MONGO
mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("The connection with Mongo is established.")
});

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

setTimeout(() => { db.close(); }, 5000)