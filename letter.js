//constructor (capital letter)
var Letter = function(letter){
	this.letter = letter;
	this.guessed = false;
};

//prototype adds toString functionality(property) to every 
//future instance of Letter
Letter.prototype.toString = function() {
	if(this.letter === ' '){
		return " ";
	}
	else if(!this.guessed) {
		return "_";
	}

	return this.letter;
}

//prototype adds guess property to every instance of Letter
Letter.prototype.guessLetter = function(userGuess) {
	if(userGuess === this.letter) {
		this.guessed = true;
	}

	return userGuess === this.letter;
}

module.exports = Letter;


// var a = new Letter("a");

// console.log(a + ''); // _

// a.guessLetter("b");

// console.log(a + ''); // _

// a.guessLetter("a");

// console.log(a + ''); // a


