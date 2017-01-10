"use strict";

(function executeCode() {

	var myNameIs = 'Jacob';
	
	(function sayHello(name) {
		console.log("Hello " + name + ".");
	})(myNameIs);
	
	// Don't modify the following line
	// It generates a random number between 1 and 100 and stores it in random
	var random = Math.floor((Math.random()*100)+1);
	
	(function isOdd(number) {
		console.log((number % 2 == 1) ? "The number " + number.toString() + " is odd." : "The number " + number.toString() + " is even.");
	})(random);
})();