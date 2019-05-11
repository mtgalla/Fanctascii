//var db = require("../models");
var path = require("path");
// // Do we need to require path for html routing as well?

module.exports = function(app) {
  // // Load index page
  // app.get("/", function(req, res) {
  //   db.choices.findAll({}).then(function(dbchoices {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbchoices
  //     });
  //   });
  // });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  }

//   // Load example page and pass in an example by id
//   app.get("/example/:id", function(req, res) {
//     db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
//       res.render("example", {
//         example: dbExample
//       });
//     });
//   });

//   // Render 404 page for any unmatched routes
//   app.get("*", function(req, res) {
//     res.render("404");
//   });
// };
