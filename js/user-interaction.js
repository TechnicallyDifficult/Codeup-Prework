"use strict";

do {
	name = prompt('What is your name?');
		if (name !== "") {
		break;
	}
	alert('Please enter your name.');
} while (name === '');

alert('Welcome, ' + name + '.');

if (confirm('Do you like pizza?')) {
	alert("That's good. You are a normal human being.");
} else {
	alert('...what planet are you from?');
}

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
