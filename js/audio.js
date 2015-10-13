var meditationtrack1 = document.getElementById("meditation1");

var meditationtrack2 = document.getElementById("meditation2");

var meditationtrack3 = document.getElementById("meditation3");

// event for hovering over first circle
var playTrack1 = function() {
  var meditationtrack1 = document.getElementById("meditation1");
  meditationtrack1.src = "./audio/breathe.mp3";
  meditationtrack1.play();
}

// event for hovering over second circle
document.getElementById("circle2").mouseenter(function() {



});

// event for hovering over third circle
document.getElementById("circle3").mouseenter(function() {
  meditationtrack3.play();
});
