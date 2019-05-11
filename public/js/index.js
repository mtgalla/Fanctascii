// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   //===FUTURE DEVELOPMENT: DELETE USER DATA?=== 
//   // deleteExample: function(id) {
//   //   return $.ajax({
//   //     url: "api/examples/" + id,
//   //     type: "DELETE"
//   //   });
//   // }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);


// Sam starts input of Ajax and Onclick Events here:

$(function() {
  $(".rotted-door").on("click", function(event) {
    event.preventDefault(); 
    var id = $(this).data("id");
    console.log(id);
    // Send the GET request.
    $.ajax("/" + id, {
      type: "GET",
      data: id;
    }).then(
      function() {
        console.log("display selected ", id;
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  //submit button event
  // $(".create-form").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();
  //   // If we need to hard code in a spacebar press, the event is descr below:
  //   //     if (e.keyCode === 32) 
  //   //     { 
  //   var newCharacter = {
  //     character_name: $("#ca").val().trim(),
  //   };
  //   // Send the POST request.
  //   $.ajax("/", {
  //     type: "POST",
  //     data: newCharacter
  //   }).then(
  //     function() {
  //       console.log("created new Character");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
 });
         

// Sam ends input of Ajax and Onclick Events here: