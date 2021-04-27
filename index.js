// Your code here
function saturdayFun(r= "roller-skate"){
  return "This Satrurday, I want ${r}";
}

function mondayWork(){
  return "This Monday, I will go to work early";
}

function wrapAdjective(effect = "*"){
  return function(a="special"){
      return "You are ${effect}${a}${effect}";    
  }
}