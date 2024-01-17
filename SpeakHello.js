// Create helloSpeaker object
var helloSpeaker = {};

// Attach the "speak" method to helloSpeaker
helloSpeaker.speak = function(name) {
  console.log("Hello " + name);
};

// Expose helloSpeaker to the global scope
window.helloSpeaker = helloSpeaker;

