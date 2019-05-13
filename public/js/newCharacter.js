$(document).ready(function() {
var $newCharacterInput = $("input.new-character");
$(document).on("submit", "#name-form", insertNameCharacter);

let newUserName = [];

 
//crappy inherited validation function that doesn't work.
//function check_empty() {
//if (document.getElementById("name").value == "") {
//alert("Please Enter A Name");
//} else {
//document.getElementById("form").submit();
//alert("Form Submitted Successfully...");
//}
//}

//$(".secondDoors").on("click", function(event) {
//  event.preventDefault();
//  var id = $(this).attr("id");
//  console.log(id);
  // Send the GET request.
//  $.ajax("/api/characters/" + id, {
//    type: "PUT"
//  }).then(function() {
//    console.log("display selected ", id);
    // Reload the page to get the updated list
    //location.reload();
//  });
//});


function getNewCharacter() {
    $.get("/api/characters", function(data) {
      newUserName = data;
      initializeRows();
      console.log(result);
    });
}

    // This function inserts a new Character into our database and then updates the view
  function insertNameCharacter(event) {
    console.log(result);
    event.preventDefault();
    var newUserName = {
      text: $newCharacterInput.val().trim(),
      complete: false
    };

    $.post("/api/characters", newUserName, getNewCharacter);
    $newCharacterInput.val("");
}
});
   
