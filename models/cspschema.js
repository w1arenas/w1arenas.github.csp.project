// Database connection happens in server.js

/////////////// DEPENDENCIES
const mongoose = require("mongoose");
const Schema = mongoose.Schema

const cspSchema = new Schema ({
    state:  {type: String, required: true},
    image: {type: String, required: true},
    simpleimage: {type: String, required: true},
    council: {type: String, required: true},
    issue: String,
    location: String,
    //body: String,
    //comments: [{body: String}]
}, {timestamps: true});

const Csp = mongoose.model("Csp", cspSchema);

/////////////// Export the model to make it accessible in server.js
module.exports = Csp; 