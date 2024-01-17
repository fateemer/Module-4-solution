// Create byeSpeaker object
var byeSpeaker = {};

// Attach the "speak" method to byeSpeaker
byeSpeaker.speak = function(name) {
  console.log("Good Bye " + name);
};

// Expose byeSpeaker to the global scope
window.byeSpeaker = byeSpeaker;

