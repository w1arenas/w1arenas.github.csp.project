/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();
const Csp = require("../models/cspschema.js")
/////////////// MODELS
//const Cspschema = require("../models/cspschema.js") 

// ROUTER.get("/", (req, res)  => {
// 	res.send("Hello world, all is well...so far!")
// })


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

module.exports = ROUTER;