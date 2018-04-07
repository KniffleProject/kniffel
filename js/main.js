function rollDice() {
  	var max = 6;
    var min = 1;
  	var dices = document.getElementsByClassName("demo");
  	
  	for(var i=0; i<dices.length;i++){
  	if(dices[i].id=="t"){
      var x = Math.round(Math.random() * (max - min)) + min;
    dices[i].innerHTML=x;
    }
  }  
}
  
  function chngBttn(btn){
  if(btn.id=="t"){
    btn.setAttribute("id","f");
  	btn.style.backgroundColor="#FFFFFF";
  }else{
    btn.setAttribute("id","t");
    btn.style.backgroundColor="gray";
  };
    
  }
  
  
  function rollDice2() {
  	var max = 6;
    var min = 1;
  	var x = Math.round(Math.random() * (max - min)) + min;
  	document.getElementById("demo").innerHTML = x;
    }