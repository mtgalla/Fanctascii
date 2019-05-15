// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the characters
  app.get("/api/characters/", function(req, res) {
    db.characters.findAll({}).then(function(dbcharacters) {
      res.json(dbcharacters);
    });
  });
  // GET route for getting all of the choices
  app.get("/api/choices/", function(req, res) {
    db.choices.findAll({}).then(function(dbchoices) {
      res.json(dbchoices);
    });
  });
  // Get route for retrieving a single choice
  app.get("/api/choices/:id", function(req, res) {
    db.choices
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbchoices) {
        res.json(dbchoices);
      });
  });
  // PUT route for updating character
  app.put("/api/characters/:id", function(req, res) {
    db.characters
      // eslint-disable-next-line camelcase
      .update({ choice_id: req.params.id }, { where: { id: 1} })
      .then(function(dbcharacters) {
        res.json(dbcharacters);
      });
  });

  app.post("/api/characters", function(req, res) {
    // eslint-disable-next-line
    const name = req.body.name;

    if (!name) {
      return res.status(400);
    }

    db.characters
      // eslint-disable-next-line camelcase
      .create({name})
      .then(function(dbcharacters) {
        res.json(dbcharacters);
      });
  });
    // // DELETE route for deleting posts
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });
};
