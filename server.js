/////////////// DEPENDENCIES
const express = require("express");	
const mongoose = require("mongoose");

/////////////// APP CONFIGURATION
const APP = express();
const PORT = process.env.PORT || 3000;

///////////////  MODELS
const Csp = require("./models/cspschema.js")

/////////////// DATABASE CONFIGURATION
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/" + "csps"
const db = mongoose.connection;

// connection error/success
db.on("error", (err) => console.log(err.message + "is Mongo not running"));
db.on("connected", () => console.log("Mongo connected: " + mongoURI));
db.on("disconnected", () => console.log("Mongo disconnected"));

// connect to Mongo
mongoose.connect(mongoURI, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("The connection with Mongo is established.")
});

/////////////// CONTROLLER LOGIC
const collectionController = require("./controllers/cspcollection.js")

/////////////// MIDDLEWARE
APP.use(collectionController)
APP.use(express.urlencoded({extended: true}));

//root route
APP.get("/", (req, res) => {
    res.redirect('/cspcollection');
});

/////////////// LISTENER
APP.listen(PORT, () => {
	console.log("Listening on PORT: " + PORT)
})

