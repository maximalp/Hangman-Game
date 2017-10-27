

var statusDiv = document.getElementById("status");

var animals = ["cat", "dog", "tiger", "elephant", "lion", "fox", "python", "salmon", "rabbit", "kangaroo"];
var answer = [];
var anm = animals[0];


var tries = 0;
var maxtry = 12;
var lettersGuessed = "";

var newGame = false;
resetGame();


document.onkeyup = function(event) {

   var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log("user guess: " + userGuess);
   if (newGame) {
     resetGame();
     newGame = false;
   }


  tries++;
  console.log("number of tries " + tries);



      for (var i = 0; i < anm.length; i++) {
        if (userGuess === anm[i]) {
          answer[i] = userGuess;
          trueGuess = true;
          lettersGuessed = lettersGuessed + userGuess;
          console.log("true guess");
        }
      }

   updateDiaplay();

   if (doneGuess(answer))
   {

     statusDiv.innerHTML = "Right word!";
     newGame = true;
   }
   else if (tries >= maxtry) {
     statusDiv.innerHTML = "Too many tries, you lose!";
     newGame = true;
   }

};

function updateDiaplay() {

  var letters = document.getElementById("letterdisplay");
  letters.innerHTML = answer;

  var remainGuess = document.getElementById("remainGuess");
  var remaining = maxtry-tries;
  remainGuess.innerHTML = "You have " + remaining + " guesses remaining.";

  document.getElementById("letGuessed").innerHTML = "You have guessed the following letters: " + lettersGuessed;

}

function resetGame() {
  anm = animals[Math.floor(Math.random()*animals.length)];
  console.log("current word guessed:" + anm);
  answer = [];
  for (var i = 0; i < anm.length; i++) {
    answer[i] = "_";
  }

   tries =0;
   lettersGuessed = "";

   updateDiaplay();
   statusDiv.innerHTML = "";
}

function doneGuess(a) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === '_') {
            return false;
        }
    }
    return true;
}
