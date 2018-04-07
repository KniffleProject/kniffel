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

 
 function getScore(row){
		var dices = document.getElementsByClassName("demo");
		var anzahl = 0;
		for(var i=0; i<dices.length;i++){
			if(dices[i].innerHTML==row.id){
				anzahl++;
			}
		}
	 for(var i=0;i<row.childNodes.length;i++){
		 if(row.childNodes[i].className=="einserAnzahl" && row.childNodes[i].alreadySet !="bereitsGesetzt"){
			 row.childNodes[i].innerHTML=anzahl*row.id;
			 row.childNodes[i].alreadySet="bereitsGesetzt";
		 }
		 
	 }
	 
 }
 
  
  
  
function rollDice2() {
	var max = 6;
	var min = 1;
	var x = Math.round(Math.random() * (max - min)) + min;
	document.getElementById("demo").innerHTML = x;
}