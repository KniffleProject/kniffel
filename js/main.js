var diceRoll = 0;


function rollDice() {
	if(diceRoll < 3){
  	var max = 6;
    var min = 1;
  	var dices = document.getElementsByClassName("dice");
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
  
function newRound(){
	var buttonDiceRoll =  document.getElementById("diceRoll");
	diceRoll = 0; 
	buttonDiceRoll.innerHTML = "Roll Dice (0/3)";
	resetDices()
}

function resetDices(){
	var dices = document.getElementsByClassName("dice");
	for(var i=0; i<dices.length;i++){
		dices[i].style.backgroundColor="gray";
		dices[i].innerHTML="D";
		dices[i].myVar = "egal";
	}
}