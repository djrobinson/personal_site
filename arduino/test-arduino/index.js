// var five = require("johnny-five");
// var board = new five.Board();

// // The board's pins will not be accessible until
// // the board has reported that it is ready
// board.on("ready", function() {
//   console.log("Ready!");

//   var led = new five.Led(13);
//   led.blink(500);
// });

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a new `joystick` hardware instance.
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });

  joystick.on("change", function() {
    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);
    console.log("--------------------------------------");
  });
});
