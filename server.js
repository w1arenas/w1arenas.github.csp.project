/////////////// DEPENDENCIES
const express = require("express");	
const mongoose = require("mongoose");
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

// open connection to Mongo
db.on("open", () => {});
//mongoose.connection.once("open", () => {
//  console.log("connected to Mongo");
//});

/////////////// APP CONFIGURATION
const APP = express();
const PORT = process.env.PORT || 3000;


/////////////// CONTROLLER LOGIC
const collectionController = require("./controllers/cspcollection.js")

/////////////// MIDDLEWARE
APP.use(collectionController)
APP.use(express.urlencoded({extended: true}));

///////ROUTES
//new route
APP.get("/cspcollection/new", (req, res) => {
    res.render('new.ejs');
});

// create route
APP.post('/cspcollection', (req, res) => {
    Csp.create(req.body, (error, createdCsp) => {
        res.send(createdCsp);
        //res.redirect("/cspcollection")
    });
});


/////////////// ITEM CREATION - testing
// const myFirstCspEntry = {
//     name: "Alapaha Area Council",
//     council: "Alapaha Area Council",
//     issue: "T1b"
// }

// Csp.create(myFirstCspEntry, (error, cspItem) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(cspItem)
//     }
// })





/////////////// LISTENER
APP.listen(PORT, () => {
	console.log("Listening on PORT: " + PORT)
})

setTimeout(() => { db.close(); }, 10000)