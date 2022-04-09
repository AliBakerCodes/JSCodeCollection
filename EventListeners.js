//Event Listener to do something on keypress
document.addEventListener("keydown", (event) => {
    // Access value of pressed key with key property
    var key = event.key.toLowerCase();
    console.log(key);
    //change alphachar to the key or keys you want to act on.
    var alphachar = "abcdefghijklmnopqrstuvwxyz".split("");
    if (alphachar.includes(key)) {
      checkGuess(game.currentWord, key);
    }
  });
  
//boostrap show or hide modal on submit or click
  formEl.on('submit', function(event) {
    event.preventDefault();
    console.log("Submit Clicked");
    handleFormSubmit();
    $('#newProjectModal').modal('hide');
    return false;
  });