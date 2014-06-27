var maxGuess = 100;

//Declare a function to get the random number//
function rand(n){
	return Math.round(Math.random()*n+1);
}
//Declare values for random number in a variable//
var maxGuess = 100;
var randNum = rand(maxGuess);
alert(randNum);


var prevDiff = maxGuess + 1;


while(true){
	var userInput = parseInt(prompt("enter your guess"));
	var diff = Math.abs(randNum - userInput);
	
	if (userInput === randNum){
		alert("GENIUS!"); 
		break;
	}
	else if (diff < prevDiff) {
		alert("hot");
		prevDiff = diff;
	}
	else if (diff > prevDiff) {
		alert("cold");
		prevDiff = diff;
	}
}





