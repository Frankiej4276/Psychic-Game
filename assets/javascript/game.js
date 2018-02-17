// All counters set to zero

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var lettertoGuess = null;


// Letters available to the computer inside the array

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Tells computer to pick a random letter inside the array 

var computerGuess = letters[Math.floor(Math.random() * letters.length)];

var updateguessesLeft = function(){

}

var updateguessedLetters = function(){

}

var updatelettertoGuess = function (){
    lettertoGuess = letters[Math.floor(Math.random() * letters.length)]
}

// Resets the game

var resetGame = function(){
    guesses = 9;

    guessesLeft = 9;

    guessedLetters = [];

    updateguessesLeft();

    updateguessedLetters();

    updatelettertoGuess();

}

// Enables key input

document.onkeydown = function(){
    guessesLeft--;

    // turns keypushes into lower case
    var playerGuess = String.fromCharCode(event.keycode).toLocaleLowerCase();

    guessedLetters.push (playerGuess);

    updateguessesLeft();

    updateguessedLetters();

    if (playerGuess === lettertoGuess){
        wins++;

        alert("You guessed correctly!");

        resetGame();
    }

    else (guessesLeft === 0){

        losses++;

        alert("Better luck next time!");

        resetGame();
    }
}
