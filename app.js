var guessParagraph = document.querySelector("#guessPara");
var wrongGuessParagraph = document.querySelector("#wrongGuessPara");
var guessCountParagraph = document.querySelector("#guessCountPara");
var winParagraph = document.querySelector("#winPara");
var loseParagraph = document.querySelector("#losePara");
var artworkSection = document.querySelector("#artwork-img");
var songnameSection = document.querySelector("#songbyname");

var wordsArray = [
    genesis = {
        artistName : "genesis",
        image : "genesis.jpg",
        song : "Illegal Alien"
    },
    madonna = {
        artistName : "madonna",
        image : "madonna.jpg",
        song : "Material Girl"
    },
    toto = {
      artistName : "toto",
        image : "toto.jpg",
        song : "Rosanna"
    },
    queen = {
      artistName : "queen",
        image : "queen.jpg",  
        song : "Princes of the Universe"
    },
    u2 = {
      artistName : "u2",
        image : "u2.jpg",  
        song : "With or Without You"
    },
    metallica = {
       artistName : "metallica",
        image : "metallica.jpg",  
        song : "Master of Puppets"
    },
    journey = {
      artistName : "journey",
        image : "journey.jpg",  
        song : "Don't Stop Believin"
    },
    inxs = {
      artistName : "inxs",
      image : "inxs.jpg",  
      song : "Need You Tonight"
    },
    poison = {
      artistName : "poison",
      image : "poison.jpg",  
      song : "Limelight"
    },
    blondie = {
      artistName : "blondie",
      image : "blondie.jpg",  
      song : "Call Me"
    }
]

console.log();

var bottomLineArray = [];
var wrongGuesses =[];
var randomWord = "";

var winCounter = 0;
var loseCounter = 0;
var guessCounter = 9;

function randomWordFunc(arr) {
  var randomIndex = Math.floor(Math.random() * wordsArray.length);
  return arr[randomIndex];
}

function StartGame() {
  //
   randomWord = randomWordFunc(wordsArray);
   console.log(randomWord);
  var selectedLettersInWord = randomWord.artistName.split("");
  var bottomLine = selectedLettersInWord.length;
  // console.log(bottomLine);

  for (var i = 0; i < bottomLine; i++) {
    bottomLineArray.push("_");
  }
  guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
}
StartGame()

function mySupposition(e) {
  var myLetter = e.key.toLowerCase();
  var selectedLettersInWord = randomWord.artistName.split("");
  if(selectedLettersInWord.indexOf(myLetter)!==-1){
    for (var i = 0; i < bottomLineArray.length; i++) {
      if (selectedLettersInWord[i] === myLetter) {
        bottomLineArray[i] = myLetter;
      }
    }
  }else{
    wrongGuesses.push(myLetter);
    guessCounter--;
  }
  
  if(bottomLineArray.indexOf("_")===-1){
    // randomWord = randomWordFunc(wordsArray);
    console.log(randomWord)
    selectedLettersInWord = randomWord.artistName.split("");
    bottomLine = selectedLettersInWord.length;
    wrongGuesses = [];
    bottomLineLetter = [];
    bottomLineArray = [];
    guessCounter = 9;
    winCounter++;

    
    artworkSection.setAttribute("src",`./images/${randomWord.artistName}.jpg`)
    songnameSection.innerHTML = `${randomWord.song} By ${randomWord.artistName}`
    wrongGuessParagraph.innerHTML = `${wrongGuesses}`;
    winParagraph.innerHTML = ` ${winCounter}`;
    guessCountParagraph.innerHTML = `${guessCounter}`;

    alert("You win")
    StartGame();
  }

  if(selectedLettersInWord.indexOf(myLetter)===1){
    guessCounter;
  }

  if(guessCounter===0){
    loseCounter++;
    wrongGuesses = [];
    selectedLettersInWord = randomWord.artistName.split("");
    bottomLine = selectedLettersInWord.length;
    bottomLineArray=[];
    // for (var i = 0; i < bottomLine; i++) {
    //   bottomLineArray.push("_");
    // }
    guessCounter = 9;
    guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
    wrongGuessParagraph.innerHTML = `${wrongGuesses}`;
    loseParagraph.innerHTML = ` ${loseCounter}`;
    guessCountParagraph.innerHTML = `${guessCounter}`;
    alert("You Lose")
    StartGame();
  }

  guessParagraph.innerHTML = `${bottomLineArray.join(" ")}`;
  wrongGuessParagraph.innerHTML = ` ${wrongGuesses}`
  winParagraph.innerHTML = `${winCounter}`
  guessCountParagraph.innerHTML = `${guessCounter}`
  // console.log(bottomLineLetter)
}


window.onkeydown = mySupposition;