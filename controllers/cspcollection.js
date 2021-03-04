/////////////// DEPENDENCIES
const express = require("express");
const ROUTER = express.Router();
const methodOverride = require("method-override");

/////////////// MIDDLEWARE
ROUTER.use(express.urlencoded({extended: true})); //Do I need this here?
ROUTER.use(methodOverride("_method"))

/////////////// MODELS
const Csp = require("../models/cspschema.js");


/////////////// STATIC FILES
ROUTER.use(express.static("public"));


/////////////// ROUTES

//seed route
ROUTER.get("/cspcollection/seed", (req, res) => {
	Csp.create([
		{
			state: "Georgia",
			image: "/images/ga-alapaha-area-council-t1b.png",
			simpleimage: "/images/ga-simple-alapaha-area-council-t1b.png",
			council: "Alapaha Area Council",
			issue: "T1b"
		},
		{
			state: "Georgia",
			image: "/images/ga-atlanta-area-council-t11a.png",
			simpleimage: "/images/ga-simple-atlanta-area-council-t11a.png",
			council: "Atlanta Area Council",
			issue: "T11a"
		},
		{
			state: "Georgia",
			image: "/images/ga-central-georgia-council-t2.png",
			simpleimage: "/images/ga-simple-central-georgia-council-t2.png",
			council: "Central Georgia Council",
			issue: "T2"
		},		
		{
			state: "Georgia",
			image: "/images/ga-chattahoochee-council-s4.png",
			simpleimage: "/images/ga-simple-chattahoochee-council-s4.png",
			council: "Chattahoochee Council",
			issue: "S4"
		},
		{
			state: "Georgia",
			image: "/images/ga-coastal-empire-council-t7.png",
			simpleimage: "/images/ga-simple-coastal-empire-council-t7.png",
			council: "Coastal Empire Council",
			issue: "T7"
		},
		{
			state: "Georgia",
			image: "/images/ga-flint-river-council-s4b.png",
			simpleimage: "/images/ga-simple-flint-river-council-s4b.png",
			council: "Flint River Council",
			issue: "S4b"
		},
		{
			state: "Georgia",
			image: "/images/ga-georgia-carolina-council-s2.png",
			simpleimage: "/images/ga-simple-georgia-carolina-council-s2.png",
			council: "Georgia Carolina Council",
			issue: "S2"
		},
		{
			state: "Georgia",
			image: "/images/ga-northeast-georgia-council-s3.png",
			simpleimage: "/images/ga-simple-northeast-georgia-council-s3.png",
			council: "Northeast Georgia Council",
			issue: "S3"
		},
		{
			state: "Georgia",
			image: "/images/ga-northwest-georgia-council-S3.png",
			simpleimage: "/images/ga-simple-northwest-georgia-council-s3.png",
			council: "Northwest Georgia Council",
			issue: "S3"
		},
		{
			state: "Georgia",
			image: "/images/ga-okefenokee-area-council-S4a.png",
			simpleimage: "/images/ga-simple-okefenokee-area-council-S4a.png",
			council: "Okefenokee Area Council",
			issue: "S4a"
		},
		{
			state: "Georgia",
			image: "/images/ga-southwest-georgia-council-s2.png",
			simpleimage: "/images/ga-simple-southwest-georgia-council-s2.png",
			council: "Southwest Georgia Area Council",
			issue: "S2"
		},

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

//history route
ROUTER.get("/cspcollection/history", (req, res) => {
    res.render('history.ejs');
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

// edit route
ROUTER.get("/cspcollection/:id/edit", (req,res) => {
	Csp.findById(req.params.id, (error, foundCsp) => {
		res.render("edit.ejs", { csp: foundCsp})
	});
});

// put edited csp route
ROUTER.put("/cspcollection/:id", (req,res) => {
	//console.log(req.params.id);
	//res.send(req.params.id);

	Csp.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, editedCsp) => {
        //res.send(editedCsp);
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
        // console.log("Deleting record: " + req.params.id);
		// console.log(deletedCsp)
        res.redirect("/cspcollection")
    });
});




module.exports = ROUTER;