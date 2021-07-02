var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var keyPressFirstTime = true;
var level = 0;

//STARTS THE GAME (Checks if the game is started or not, then calls the first sequence)

$(document).on('keypress', function() {
  if (keyPressFirstTime == true) {
    nextSequence();
    $("h1").text("Level 1");
    keyPressFirstTime = false;
  }
});

//Generates the next sequence item

function nextSequence() {
  var randomNumber = Math.floor(4 * Math.random());
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#' + gamePattern[gamePattern.length - 1]).fadeOut().fadeIn();
  playSound(gamePattern[gamePattern.length - 1]);
  level++;
  $("h1").text("Level " + level);
}

//detect what button the user pressed

$(".btn").click(function(event) {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


// function that checks if Answer is correct
function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log(userClickedPattern[currentLevel]);
    console.log(gamePattern[currentLevel]);
    console.log("Success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence();
        userClickedPattern = [];
      }, 1000);
    }
  }
  else if (userClickedPattern[currentLevel] != gamePattern[currentLevel]) {
    $("h1").text("Game Over.");
  }
}

//Plays the audio files that corresponds to the input color

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

//Animation that shows the user click on a button

function animatePress(currentColour) {
  $('#' + currentColour).addClass("pressed");
  setTimeout(function() {
    $('#' + currentColour).removeClass("pressed");
  }, 100);
}


var test1 = ["aaa", "bbb"];
var test2 = ["ccc", "ddd"];
if (test1[1] === test2[1]) {
  console.log(test1[1] + " = " + test2[1]);
} else {
  console.log(test1[1] + " != " + test2[1]);
}
