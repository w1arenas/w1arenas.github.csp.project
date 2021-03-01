/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();

/////////////// MODELS
const Cspschema = require("../models/cspschema.js") 

ROUTER.get("/", (req, res)  => {
	res.send("Hello world, all is well...so far!")
})

	/////////////// ROUTES
	// seed route
    // index route
	// new route
	// ROUTER.get("/new", (req, res) => {
	// 	res.send("new")
	// });
	
	// create route
    // show route
	// edit route
	// update route
    // delete route


 
module.exports = ROUTER;

