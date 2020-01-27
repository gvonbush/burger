var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.post("/api/new", function(req, res) {
    console.log("Burger Data:");
    console.log(req.body);



    burger.addBurger(req.body, function(err, res) {
      if (err) throw err;
      console.log("Burger added");
      res.end();
    });
  });

  router.get("/", function(req, res) {
      res.redirect("/api/all")
// res.render("index")
  })

  router.get("/api/all", function(req, res) {
     
      console.log("apiRouteHit")
      burger.getAllBurgers(function (data){
          console.log(data)
          console.log("api call")
          res.render("index", {burgerInfo:data})
      })
  }

  )

module.exports = router

