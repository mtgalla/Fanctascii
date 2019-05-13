$(document).ready(function() {
var $newCharacterInput = $("input.new-character");
$(document).on("submit", "#name-form", insertNameCharacter);
let newUserName = [];

 
function check_empty() {
if (document.getElementById("name").value == "") {
alert("Please Enter A Name");
} else {
document.getElementById("form").submit();
alert("Form Submitted Successfully...");
}
}

function getNewCharacter() {
    $.get("/api/Characters", function(data) {
      newUserName = data;
      initializeRows();
    });
}

    // This function inserts a new Character into our database and then updates the view
  function insertNameCharacter(event) {
    event.preventDefault();
    var newUserName = {
      text: $newCharacterInput.val().trim(),
      complete: false
    };

    $.post("/api/Characters", newUserName, getNewCharacter);
    $newCharacterInput.val("");
}
});
   
