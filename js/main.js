var diceRoll = 0;

function getDiceFields() {
	return document.getElementsByClassName("dice");
}

function getDiceImgHtml(diceScore, locked) {
	var lockedString = '';
	if (locked) {
		lockedString = '_locked';
	}
	return '<img src="./img/dice' + diceScore + lockedString + '.png" alt="' + diceScore + '" title="' + diceScore + '">';
}

function isLocked(diceElement) {
	return diceElement.myVar == 'f';
}

function getDices(){
	var diceArr = "";
	var dices = document.getElementsByClassName("dice");
	for(var i=0; i<dices.length;i++){
		diceArr += dices[i].score;
	}
	return diceArr;
}

function rollDice() {
	if(diceRoll < 3){
		var max = 6;
		var min = 1;
		var dices = getDiceFields();
		var buttonDiceRoll =  document.getElementById("diceRoll");
		
		buttonDiceRoll.innerHTML = "Roll Dice ("+(diceRoll+1)+"/3)";
		diceRoll++;
		for(var i=0; i<dices.length;i++){
			dices[i].style.backgroundColor="transparent";
			if(dices[i].myVar != "f"){
				var diceScore = Math.round(Math.random() * (max - min)) + min;
				dices[i].innerHTML=getDiceImgHtml(diceScore, isLocked(dices[i]));
				dices[i].score = diceScore;
			}
		}  
	}
}
  
function lockDice(div){
	if(div.myVar != "f"){
		div.myVar ="f";
		div.innerHTML = getDiceImgHtml(div.score, true);
	} else {
		div.myVar = "egal";
		div.innerHTML = getDiceImgHtml(div.score, false);
	};
}

 
 function getScore(row){
		var dices = getDiceFields();
		var anzahl = 0;
		var weitermachen = false;
		if(row.alreadyUsed!="true"){
			row.alreadyUsed="true";
		for(var i=0; i<dices.length;i++){
			if(dices[i].score==row.id){
				anzahl++;
			}
		}
	 for(var i=0;i<row.childNodes.length;i++){
		 if(row.childNodes[i].className=="userScore1P1" && row.childNodes[i].alreadySet !="bereitsGesetzt"){
			 row.childNodes[i].innerHTML=anzahl*row.id;
			 row.childNodes[i].alreadySet="bereitsGesetzt";
			 
		 }
		 
	 }
	setAllSums();
	newRound(); 
	}
 }
 
 function setAllSums(){
	 var U1P1Sum = getSumUser1("userScore1P1");
	 var U1P2Sum = getSumUser1("userScore1P2");
	 document.getElementById("User1ZwischensummePart1").innerHTML=U1P1Sum;
	 if(U1P1Sum>63){
		 document.getElementById("User1Bonus").innerHTML="35";
		 
	 }
	 var Bonus = parseInt(document.getElementById("User1Bonus").innerHTML);
	 document.getElementById("User1Part1Sum").innerHTML=U1P1Sum+Bonus;
	 document.getElementById("User1Part2Sum").innerHTML=U1P2Sum;
	 document.getElementById("User1WholeSum").innerHTML=U1P1Sum+U1P2Sum;
 }
 
 
 function getSumUser1(ScoreClass){
	 var scores = document.getElementsByClassName(ScoreClass);
	 var Sum = 0;
	for(var i=0; i<scores.length;i++){
		var textScore= scores[i].innerHTML;
		if(textScore == "")textScore=0;
		Sum+=parseInt(textScore);
	}
	return Sum;
 }

  
  
function newRound(){
	var buttonDiceRoll =  document.getElementById("diceRoll");
	diceRoll = 0; 
	buttonDiceRoll.innerHTML = "Roll Dice (0/3)";
	resetDices()
}

function resetDices(){
	var dices = getDiceFields();
	for(var i=0; i<dices.length;i++){
		dices[i].style.backgroundColor="gray";
		dices[i].innerHTML="";
		dices[i].myVar = "egal";
		dices[i].score = 0;
		dices[i].style.backgroundColor="#CCCCCC";
	}
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