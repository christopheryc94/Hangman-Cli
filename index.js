//Load the NPM Package inquirer 
var inquirer = require("inquirer");
//wordBank
var wordBank = require("./wordBank.js");
//word.js
var Word = require("./word.js");
//letter.js
var Letter = require("./letter.js");
//select random word from wordBank
const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(randomWord);
wordToGuess = new Word(randomWord)
var arrayCopy = randomWord.split("");
//console.log(arrayCopy);
//guessesRemaining
var guessesRemaining = 5;
//empty array to store guessedLetters
var guessedLetters = [];

var startGame = function() {
	inquirer.prompt([
	{
		type: "confirm",
		message: "Start a game of Hangman?",
		name: "startGame",
		default: true
	}
	]).then(answers => {
		if(answers.startGame === true){
			console.log("Welcome to Hangman!");
			console.log("Think carefully, you only get 5 miss tries!");
			console.log(wordToGuess.toString());
			letterGuess();
		}
		else {
			console.log("Re-run this file if you wish to play!");
		}
	})
}

var letterGuess = function() {
	inquirer.prompt([
	{
		type: "input",
		message: "Guess a letter",
		name: "letterGuess"
	}
	]).then(answers => {
		const letter = answers.letterGuess.toUpperCase();
		// console.log(letter);
		if((letter.charCodeAt() < 65) || (letter.charCodeAt() > 90)){
			// console.log(letter.charCodeAt())
			console.log("Please input a valid letter!");
			letterGuess();
		} else if(guessedLetters.indexOf(letter) >= 0){
			console.log("You've already guessed that letter!");
			letterGuess();
		} else{
			var copy = wordToGuess.toString();
			//console.log(copy)
			guessedLetters.push(letter);
			wordToGuess.guessWord(letter);
			if(copy === wordToGuess.toString()){
				guessesRemaining--;
			}
			console.log(wordToGuess.toString() + "	Guessed Letters: " + guessedLetters);
			console.log("\nGuesses remaining: " + guessesRemaining + "\n");
			isSolved(letter);
		}
	})
}

var isSolved = function(letter) { 
	if(guessesRemaining === 0){
		console.log("You ran out of guesses! You Lose");
	}
	// for(let i = 0; i < arrayCopy.length; i++){
	//   	if(arrayCopy[i] !== letter){
	//   		guessesRemaining--;
	//   		letterGuess();
	//   	} else if(arrayCopy[i] === letter){
	//   		letterGuess();
	//   	} 
	//   	else {
	//   		console.log("YOU WIN!");
	//   		}
	//   }
	else if(wordToGuess.toString() === randomWord.toUpperCase()){
		console.log("You Won!!");
	} else{
		letterGuess();
	}
};

startGame();








