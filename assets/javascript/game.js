/*start game by choosing name from a list randomly-
create array */

// remove letters from name

// show word in HTML with blanks

// give user certain number of guesses to guess word

// add correct letters to randomly chosen word as user guesses, incorrect decreases number of guesses

// show letter that have been guessed

// if all guesses have been made and word has not been solved, user loses

// if user guesses the word, have the image of the word show up in image tag

var names = [
    "perez", "hosmer", "moustakas", "gordon", 
    "escobar", "zobrist", "cain", "morales",
    "dyson", "davis", "cueto","ventura", 
    "young", "colon",  "volquez", 
    "herrera","rios", "yost", 
];

var actualName = "";
var letters= [];
var blankName = [];
var wrongLetters = [];

var numName = 0;
var guessesLeft = 12;
var wins= 0;



  function gameStart() {
    actualName = names[Math.floor(Math.random() * names.length)];
    letters = actualName.split("");
    numName = letters.length;
    guessesLeft = 12;
    wrongLetters = [];
    blankName = [];

    for(var i = 0; i < numName; i++) {
      blankName.push("_")
      console.log(blankName)
    }
           
    document.getElementById("wordDisplay").innerHTML = blankName.join(" ");
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;

  };
    

function checkAnswer (letter) {

  var letterInName = false;

  for(var j = 0; j < numName; j++) {

    if (letter == actualName[j]) {
      letterInName = true;
    }
  }
 
  if (letterInName) {
    for(var j = 0; j < numName; j++) {
      if (actualName[j] == letter) {
        blankName[j] = letter;
        console.log(blankName)
      }         
    }
  } else {
      wrongLetters.push(letter);
      guessesLeft--;
  }
  
};


gameStart();


function rounds() {
  document.getElementById("remainingGuesses").innerHTML = guessesLeft;
  document.getElementById("letterUsed").innerHTML = wrongLetters;
  document.getElementById("wordDisplay").innerHTML = blankName.join(" ");
   
  if(letters.toString() == blankName.toString()) {
    wins++
    document.getElementById("wins").innerHTML = wins;
    play();
  } else if (guessesLeft===0) {
      alert("You lost. Don't give up, try again! LET'S GO ROYALS!")
      gameStart();
  }
};


document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  checkAnswer(userGuess);
  rounds();
};

function play(){
  if (actualName =="perez"){
    var picture = "<img src= 'assets/images/perez.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="hosmer"){
    var picture = "<img src='assets/images/hoz.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="moustakas"){
    var picture = "<img src='assets/images/moose.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="gordon"){
    var picture = "<img src='assets/images/gordo.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="cain"){
    var picture = "<img src='assets/images/cain.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="escobar"){
    var picture = "<img src='assets/images/esky.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="zobrist"){
    var picture = "<img src='assets/images/zobrist.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  }else if (actualName =="morales"){
    var picture = "<img src='assets/images/morales.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="dyson"){
    var picture = "<img src='assets/images/dyson.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="davis"){
    var picture = "<img src='assets/images/davis.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="cueto"){
    var picture = "<img src='assets/images/cueto.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="ventura"){
    var picture = "<img src='assets/images/ventura.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="young"){
    var picture = "<img src='assets/images/cyoung.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="colon"){
    var picture = "<img src='assets/images/colon.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="volquez"){
    var picture = "<img src='assets/images/volquez.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="herrera"){
    var picture = "<img src='assets/images/herrera.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="rios"){
    var picture = "<img src='assets/images/rios.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="escobar"){
    var picture = "<img src='assets/images/esky.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="escobar"){
    var picture = "<img src='assets/images/esky.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  } else if (actualName =="yost"){
    var picture = "<img src='assets/images/yost.jpg'>"
    document.querySelector("#picture").innerHTML = picture;
    gameStart();
  }


}