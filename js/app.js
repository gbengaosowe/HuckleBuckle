$(document).ready(function(){
	//Global variables
var maxGuess = 100;
var randNum = rand(maxGuess);
var prevDiff = maxGuess + 1;
var userInput;
var diff;

$("#responses").hide()


function rand(n){
	return Math.round(Math.random()*n+1);
}

function checkVal(){
	if (userInput == randNum){
		//alert("GENIUS!"); 
		$("#responses").html("GENIUS!!! PLAY AGAIN!").show("slow");
	}
	
	else if (diff < prevDiff) {
		//alert("hot");
		prevDiff = diff;
		$("#responses").html("HOT! TRY AGAIN").show("slow");
	}
	else if (diff > prevDiff) {
		//alert("cold");
		prevDiff = diff;
		$("#responses").html("COLD! TRY AGAIN").show("slow");
	}
}

$("#play").click(function(){
	userInput = $("#YourPick").val();
	diff = Math.abs(userInput - randNum);
	checkVal();

});

});
