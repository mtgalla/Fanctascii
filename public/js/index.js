// Sam starts input of Ajax and Onclick Events here:

  $(".firstDoors").on("click", function(event) {
    event.preventDefault(); 
    var id = $(this).attr("id");
    console.log(id);
    // Send the GET request.
    $.ajax("/api/characters/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("display selected ", id)
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });
  $(".secondDoors").on("click", function(event) {
    event.preventDefault(); 
    var id = $(this).attr("id");
    console.log(id);
    // Send the GET request.
    $.ajax("/api/characters/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("display selected ", id)
        // Reload the page to get the updated list
        //location.reload();
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

         

// Sam ends input of Ajax and Onclick Events here: