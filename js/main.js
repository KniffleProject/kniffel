function rollDice() {
  	var max = 6;
    var min = 1;
  	var dices = document.getElementsByClassName("demo");
  	
  	for(var i=0; i<dices.length;i++){
  	if(dices[i].myVar != "f"){
      var x = Math.round(Math.random() * (max - min)) + min;
    dices[i].innerHTML=x;
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
  
  
function rollDice2() {
	var max = 6;
	var min = 1;
	var x = Math.round(Math.random() * (max - min)) + min;
	document.getElementById("demo").innerHTML = x;
}