var diceRoll = 0;


function rollDice() {
	if(diceRoll < 3){
  	var max = 6;
    var min = 1;
  	var dices = document.getElementsByClassName("demo");
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
		var dices = document.getElementsByClassName("demo");
		var anzahl = 0;
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
	newRound(); 
 }
 
  
  
function newRound(){
	var buttonDiceRoll =  document.getElementById("diceRoll");
	diceRoll = 0; 
	buttonDiceRoll.innerHTML = "Roll Dice (0/3)";
	resetDices()
}

function resetDices(){
	var dices = document.getElementsByClassName("demo");
	for(var i=0; i<dices.length;i++){
		dices[i].style.backgroundColor="gray";
		dices[i].innerHTML="D";
		dices[i].myVar = "egal";
	}
}

function getDices(){
	var diceArr = new Array();
	var dices = document.getElementsByClassName("demo");
	for(var i=0; i<dices.length;i++){
		diceArr[i] = dices[i].innerHTML;
	}
	return diceArr;
}

function validateRoll(){
	alert(getDices());
}