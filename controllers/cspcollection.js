/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();

/////////////// MODELS
const Cspschema = require("../models/cspschema.js") 

ROUTER.get("/", (req, res)  => {
   res.send("Hello world!")
})



	/////////////// ROUTES
	// seed route
    // index route
	// new route
	// create route
    // show route
	// edit route
	// update route
    // delete route


 
module.exports = ROUTER;

