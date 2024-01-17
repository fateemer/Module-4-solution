(function() {
  // Your existing code for creating helloSpeaker and byeSpeaker objects

  // Array of names
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // Loop over the names array
  for (var i = 0; i < names.length; i++) {
    // Retrieve the first letter of the current name
    var firstLetter = names[i].charAt(0).toLowerCase();

    // Compare the first letter to 'j' and call the appropriate speaker's 'speak' method
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]); // Call byeSpeaker's 'speak' method
    } else {
      helloSpeaker.speak(names[i]); // Call helloSpeaker's 'speak' method
    }
  }
})();

