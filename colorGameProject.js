var numSquares = 6;
var boxes = document.querySelectorAll(".box");
var rgbColor = document.querySelector("#rgbColor");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#resetButton");
var easy = document.querySelector("#easy");
var	medium = document.querySelector("#medium");
var hard = document.querySelector("#hard");
var header = document.querySelector(".header");

reset();
boxColorMedium();

resetButton.addEventListener("click", reset);
easy.addEventListener("click", resetEasy);
medium.addEventListener("click", resetMedium);
hard.addEventListener("click", resetHard);


function reset(){
	colors = createsColors(numSquares);
	resetAll();
}

function resetAll(){
	colorPicked = colors[Math.floor(Math.random()*colors.length)];
	rgbColor.textContent = colorPicked;
	header.style.backgroundColor = "#19A4D6";

	for(var i=0; i<colors.length; i++){
	boxes[i].style.backgroundColor = colors[i];
	resetButton.textContent = "New Colors";
	message.textContent = "Click the Color";


		boxes[i].addEventListener("click", function(){

			var clickedColor = this.style.backgroundColor;

				if(clickedColor === colorPicked){
					message.textContent = "Correct!";
					resetButton.textContent = "Play Again?";
					changeColor();
					header.style.backgroundColor = clickedColor;

				} else {
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again!";
					resetButton.textContent = "New Colors";
				}
	 	});
	}
}

function resetEasy(){
	easy.classList.add("selected");
	medium.classList.remove("selected");
	hard.classList.remove("selected");
	numSquares = 3;
	colors = createsColors(numSquares);
	resetAll();
	boxColorEasy();
}

function resetMedium(){
	easy.classList.remove("selected");
	medium.classList.add("selected");
	hard.classList.remove("selected");
	numSquares = 6;
	colors = createsColors(numSquares);
	resetAll();
	boxColorMedium();
}

function resetHard(){
	easy.classList.remove("selected");
	medium.classList.remove("selected");
	hard.classList.add("selected");
	numSquares = 9;
	colors = createsColors(numSquares);
	resetAll();
	boxColorHard();
}

function boxColorEasy(){
	for(var i=3; i<9; i++){
		boxes[i].style.display = "none";
	}
}

function boxColorMedium(){
	for(var i=3; i<6; i++){
		boxes[i].style.display = "block";
	}
	for(var i=6; i<9; i++){
		boxes[i].style.display = "none";
	}
}

function boxColorHard(){
	for(var i=3; i<9; i++){
		boxes[i].style.display = "block";
	}
}

function changeColor(){
	for(var i=0; i<boxes.length; i++){
		boxes[i].style.backgroundColor = colorPicked;
	}
}

function createsColors(colorNumber){
	var arr = []
	for(var i=0; i<colorNumber; i++){
		arr.push(rgbRandomColor());
	}
	return arr;
}

function rgbRandomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return ("rgb(" + r + ", " + g + ", " + b + ")");
}


