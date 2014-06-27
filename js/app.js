$(document).ready(function() {
    
	$("#play").click(function() {
	
	    event.preventDefault();
		var userInput = $("#YourPick").val();
		console.log(userInput);
	});

});
var maxGuess = 100;

function rand(n){
	return Math.round(Math.random()*n+1);
	
var randNum = rand(maxGuess);

var prevDiff = maxGuess + 1;
}


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
