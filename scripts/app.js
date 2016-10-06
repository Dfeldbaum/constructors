console.log('hello')

// constructors 
// constructors start with a capital letter
// this is part of the style guide

function Taco(cheese, protein, beans, tortilla, onions, greens, salsa) {
	this.cheese = cheese;
	this.protein = protein;
	this.beans = beans;
	this.tortilla = tortilla;
	this.onions = onions;
	this.greens = greens;
	this.salsa = salsa;
}

// create new object from Taco, and then adding values


// var veggieTaco = new Taco('cheddar jack', 'tofu', 'black beans', 'corn all the way', 'red', 'cilantro', 'verde')

// veggieTaco;






// NEW GAME

// name



function Enemies(name, health, weapon) {
	this.name = name;
	this.health = health;
	this.weapon = weapon;
	this.attack = function() {
		console.log(this.name + ' attacked you with ' + this.weapon)
	}
}

var trump = new Enemies('Donald','4','words');
trump.attack();


function Question(question, correctAnswer, answers) {
	this.question = question;
	this.correctAnswer = correctAnswer;
	this.answers = answers;
}

var question1 = new Question ('What is the best pizza on planet earth?', 'Cheese Pizza', ['Cheese Pizza', 'Pepperoni Pizza', 'Sausage Pizza'])



// Have a start button
// when it is clicked you will put onto the page a question with
// div that contains the question, and each answer can be a button
// its answers, you can use jquery

// when the user clicks an answer
// you will have to find the value or text value of whatever
// they clicked and compare it the right answe


$('#start').on('click', function() {
	var div = $('<div></div>')
	$('body').append(div)
	div.append(question1.question)
});







