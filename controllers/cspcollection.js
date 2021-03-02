/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();
const methodOverride = require("method-override");

/////////////// MIDDLEWARE
ROUTER.use(express.urlencoded({extended: true})); //Do I need this here?
ROUTER.use(methodOverride("_method"))

/////////////// MODELS
const Csp = require("../models/cspschema.js");


/////////////// ROUTES

//seed route
ROUTER.get("/cspcollection/seed", (req, res) => {
	Csp.create([
		{
			image: "some image",
			council: "Alapaha Area Council",
			issue: "T1b"
		},
		{
			image: "some image",
			council: "Atlanta Area Council",
			issue: "T11a"
		},
		{
			image: "some image",
			council: "Central Georgia Council",
			issue: "T2"
		},		
		{
			image: "some image",
			council: "Chattahoochee Council",
			issue: "S4"
		}
	], (error, data) => {
		res.redirect("/cspcollection");
	})
})

//index route
ROUTER.get("/cspcollection", (req, res) => {
    Csp.find({}, (error, csps) => {
        res.render("index.ejs", {
            allCsps: csps
        });
    });
});

//new route
ROUTER.get("/cspcollection/new", (req, res) => {
    res.render('new.ejs');
});

// create route
ROUTER.post('/cspcollection', (req, res) => {
    // console.log(req.body)
    // res.send(req.body);
    Csp.create(req.body, (error, createdCsp) => {
        // res.send(createdCsp);
        res.redirect("/cspcollection")
    });
});

// show route
ROUTER.get("/cspcollection/:id", (req, res) => {
    Csp.findById(req.params.id, (error, foundCsp) => {
		res.render("show.ejs", {
			csp: foundCsp
		});
		
    });
});

// delete route
ROUTER.delete("/cspcollection/:id", (req, res) => {
	Csp.findByIdAndRemove(req.params.id, (error, deletedCsp) => {
        console.log("Deleting record: " + req.params.id);
		console.log(deletedCsp)
        res.redirect("/cspcollection")
    });
})

module.exports = ROUTER;