var diceRoll = 0;

function getDices() {
	return document.getElementsByClassName("dice");
}


function rollDice() {
	if(diceRoll < 3){
  	var max = 6;
    var min = 1;
	var dices = getDices();
  	var buttonDiceRoll =  document.getElementById("diceRoll");
	
	buttonDiceRoll.innerHTML = "Roll Dice ("+(diceRoll+1)+"/3)";
	diceRoll++;
	//alert(diceRoll);
  	for(var i=0; i<dices.length;i++){
  	if(dices[i].myVar != "f"){
      var x = Math.round(Math.random() * (max - min)) + min;
    dices[i].innerHTML=x;
    }
  }  
	}
}
  
function changeButton(btn){
	if(btn.myVar != "f"){
		btn.myVar ="f";
		btn.style.backgroundColor="#FFFFFF";
	} else {
		btn.myVar = "egal";
		btn.style.backgroundColor="gray";
	};
}

 
 function getScore(row){
		var dices = getDices();
		var anzahl = 0;
		var weitermachen = false;
		if(row.alreadyUsed!="true"){
			row.alreadyUsed="true";
		console.log(weitermachen);
		for(var i=0; i<dices.length;i++){
			if(dices[i].innerHTML==row.id){
				anzahl++;
			}
		}
	 for(var i=0;i<row.childNodes.length;i++){
		 if(row.childNodes[i].className=="userScore1" && row.childNodes[i].alreadySet !="bereitsGesetzt"){
			 row.childNodes[i].innerHTML=anzahl*row.id;
			 row.childNodes[i].alreadySet="bereitsGesetzt";
			 
		 }
		 
	 }
	setSumUser1();
	newRound(); 
	}
 }
 
 function setSumUser1(){
	 var scores = document.getElementsByClassName("userScore1");
	 var Sum = 0;
	for(var i=0; i<scores.length;i++){
		var textScore= scores[i].innerHTML;
		console.log(textScore);
		if(textScore == "")textScore=0;
	
		Sum+=parseInt(textScore);
	}
	if(Sum>63){
		document.getElementById("User1Bonus").innerHTML="35";
	}
	 document.getElementById("User1ZwischensummePart1").innerHTML=Sum;
	 var Bonus = parseInt(document.getElementById("User1Bonus").innerHTML);
	 document.getElementById("User1Part1Sum").innerHTML=Sum+Bonus;
 }

  
  
function newRound(){
	var buttonDiceRoll =  document.getElementById("diceRoll");
	diceRoll = 0; 
	buttonDiceRoll.innerHTML = "Roll Dice (0/3)";
	resetDices()
}

function resetDices(){
	var dices = getDices();
	for(var i=0; i<dices.length;i++){
		dices[i].style.backgroundColor="gray";
		dices[i].innerHTML="D";
		dices[i].myVar = "egal";
	}
}

function getDices(){
	var diceArr = "";
	var dices = document.getElementsByClassName("demo");
	for(var i=0; i<dices.length;i++){
		diceArr += dices[i].innerHTML;
	}
	return diceArr;
}

function validateRoll(row){
	var dices = getDices();
	var n = dices.split("3");
	n = dices.split("3").toString();//alert(n.replace(/,/g ,"").length)
	if( n.replace(/,/g ,"").length > 3){
		alert("Dreierpasch nicht Möglich");	
	}else{
		document.getElementById("7").innerHTML = sum(dices);
	}
	
}

function sum(diceSum){
	var sum=0;
	for(var i=0; i<diceSum.length;i++){
	sum += parseInt(sum[i]);
	}
	return sum;
}