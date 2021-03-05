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
			issue: "T1b",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4350.75764512608!2d-83.31951241520031!3d30.845704484602795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ee6693a5ab0123%3A0xee1edc7d995d320!2s1841%20Norman%20Dr%2C%20Valdosta%2C%20GA%2031601!5e0!3m2!1sen!2sus!4v1614915522559!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-atlanta-area-council-t11a.png",
			simpleimage: "/images/ga-simple-atlanta-area-council-t11a.png",
			council: "Atlanta Area Council",
			issue: "T11a",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8677254955533!2d-84.46722994976894!3d33.893060333455395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5104c7b7580b1%3A0x87f18deee6344347!2s1800%20Circle%2075%20Pkwy%2C%20Atlanta%2C%20GA%2030339!5e0!3m2!1sen!2sus!4v1614915811346!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-central-georgia-council-t2.png",
			simpleimage: "/images/ga-simple-central-georgia-council-t2.png",
			council: "Central Georgia Council",
			issue: "T2",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.5687575092666!2d-83.57561214979948!3d32.803691989839706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f156150888798d%3A0x18585d47de5e21c!2s4335%20Confederate%20Way%2C%20Macon%2C%20GA%2031217!5e0!3m2!1sen!2sus!4v1614915920085!5m2!1sen!2sus",
		},		
		{
			state: "Georgia",
			image: "/images/ga-chattahoochee-council-s4.png",
			simpleimage: "/images/ga-simple-chattahoochee-council-s4.png",
			council: "Chattahoochee Council",
			issue: "S4",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3366.0997249779834!2d-84.99426774980859!3d32.47002430679029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888ccda5334f6b37%3A0x3ad2f37dd922c01a!2s1237%201st%20Ave%2C%20Columbus%2C%20GA%2031901!5e0!3m2!1sen!2sus!4v1614916036183!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-coastal-empire-council-t7.png",
			simpleimage: "/images/ga-simple-coastal-empire-council-t7.png",
			council: "Coastal Empire Council",
			issue: "T7",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.146659344682!2d-81.15977304982172!3d31.984039531208534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb74cafcfbc593%3A0x443b33f1c9754b70!2sCoastal%20Georgia%20Council%2C%20Boy%20Scouts%20of%20America!5e0!3m2!1sen!2sus!4v1614916194356!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-flint-river-council-s4b.png",
			simpleimage: "/images/ga-simple-flint-river-council-s4b.png",
			council: "Flint River Council",
			issue: "S4b",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3338.015614548613!2d-84.2842033497881!3d33.21368686880588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f489f711989caf%3A0x934ac9ee097dc5bb!2sBoy%20Scouts%20of%20America!5e0!3m2!1sen!2sus!4v1614916330960!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-georgia-carolina-council-s2.png",
			simpleimage: "/images/ga-simple-georgia-carolina-council-s2.png",
			council: "Georgia Carolina Council",
			issue: "S2",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.7910691840775!2d-82.12004504978137!3d33.454749456333126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9cc446a45c82b%3A0x81c3745b25c4956c!2sGeorgia-Carolina%20Council%20Boy%20Scouts%20of%20America%20(Please%20note%20the%20Augusta%20Scout%20Shop%20has%20different%20hours)!5e0!3m2!1sen!2sus!4v1614916446238!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-northeast-georgia-council-s3.png",
			simpleimage: "/images/ga-simple-northeast-georgia-council-s3.png",
			council: "Northeast Georgia Council",
			issue: "S3",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.720647027691!2d-83.66542204976149!3d34.15348841974103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5e345009d54eb%3A0x9a6108f2ac310d09!2sNortheast%20Georgia%20Council%2C%20BSA!5e0!3m2!1sen!2sus!4v1614916562353!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-northwest-georgia-council-S3.png",
			simpleimage: "/images/ga-simple-northwest-georgia-council-s3.png",
			council: "Northwest Georgia Council",
			issue: "S3",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11914.945495560294!2d-85.18157207697082!3d34.26134653832594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888aa497518d95df%3A0xf6a238745a0302ec!2s1013%20N%205th%20Ave%20%231%2C%20Rome%2C%20GA%2030165!5e0!3m2!1sen!2sus!4v1614916702860!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-okefenokee-area-council-s4a.png",
			simpleimage: "/images/ga-simple-okefenokee-area-council-s4a.png",
			council: "Okefenokee Area Council",
			issue: "S4a",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.146659344682!2d-81.15977304982172!3d31.984039531208534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fb74cafcfbc593%3A0x443b33f1c9754b70!2sCoastal%20Georgia%20Council%2C%20Boy%20Scouts%20of%20America!5e0!3m2!1sen!2sus!4v1614916855210!5m2!1sen!2sus",
		},
		{
			state: "Georgia",
			image: "/images/ga-southwest-georgia-council-s2.png",
			simpleimage: "/images/ga-simple-southwest-georgia-council-s2.png",
			council: "Southwest Georgia Area Council",
			issue: "S2",
			location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.448574378993!2d-83.32014564985171!3d30.84611378712118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ee6693a5ab0123%3A0xee1edc7d995d320!2s1841%20Norman%20Dr%2C%20Valdosta%2C%20GA%2031601!5e0!3m2!1sen!2sus!4v1614917147577!5m2!1sen!2sus"
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

//start route
ROUTER.get("/cspcollection/start", (req, res) => {
    res.render('start.ejs');
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