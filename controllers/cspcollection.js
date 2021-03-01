/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();

/////////////// MODELS
//const Cspschema = require("../models/cspschema.js") 

ROUTER.get("/", (req, res)  => {
	res.send("Hello world, all is well...so far!")
})




 
module.exports = ROUTER;

