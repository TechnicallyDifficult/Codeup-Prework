"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
	case 'red':
		console.log('Firetrucks are red.');
		break;
	case 'orange':
		console.log('Traffic cones are orange.');
		break;
	case 'yellow':
		console.log('The sun is yellow.')
		break;
	case 'green':
		console.log('Pears are green.');
		break;
	case 'blue':
		console.log('Sonic the Hedgehog is blue.');
		break;
	default:
		console.log('I do not know anything by that color.');
}
	// TODO: create a case statement that will handle every color except indigo and violet
	// TODO: when a color is encountered log a message that tells the color, and an object of that color
	//       example: Blue is the color of the sky.

	// TODO: create a default case that will catch indigo and violet
	// TODO: for the default case, log: I do not know anything by that color.