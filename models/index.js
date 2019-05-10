"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Sam starts input of Ajax and Onclick Events here:

$(function() {
  $(".change-selected").on("click", function(event) {
    event.preventDefault(); 
    var id = $(this).data("id");
    var newSelected = $(this).data("newSelected");
    console.log(id);
    console.log(newSelected);
    var newSelectState = {
      selected: 1
    };
  console.log(newSelectState);
    // Send the PUT request.
    $.ajax("/" + id, {
      type: "PUT",
      data: newSelectState
    }).then(
      function() {
        console.log("changed selected to", newSelected);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //submit button event
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    // If we need to hard code in a spacebar press, the event is descr below:
    //     if (e.keyCode === 32) 
    //     { 
    var newCharacter = {
      character_name: $("#ca").val().trim(),
    };
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newCharacter
    }).then(
      function() {
        console.log("created new Character");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
 });
         

// Sam ends input of Ajax and Onclick Events here:
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
