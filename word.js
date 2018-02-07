//import letter.js to use constructor!
var Letter = require("./letter.js");

var Word = function(word) {
	this.wordArray = [];

	for(let i = 0; i < word.length; i++){
		this.wordArray.push(new Letter(word[i]));
	}
}

Word.prototype.toString = function() {
	//join calls toString on each element of the array to join together
	return this.wordArray.join('');
}

Word.prototype.guessWord = function(userGuess){
	for(let i = 0; i < this.wordArray.length; i++){
		this.wordArray[i].guessLetter(userGuess);
	}
}

// Word.prototype.duplicate = function(userGuess){
// 	if(this.)
// }

module.exports = Word;

// var cat = new Word("cat");

// console.log(cat + ''); // _ _ _

// var vehicle = new Word("vehicle");

// console.log(vehicle + ''); // _ _ _ _ _ _ _

// var parkRanger = new Word("park ranger");

// console.log(parkRanger + '');

// var spiderman = new Word("with great power comes great responsibility");
// console.log(spiderman + "");

// spiderman.guessWord("p");
// console.log(spiderman.toString());
// console.log(spiderman);










