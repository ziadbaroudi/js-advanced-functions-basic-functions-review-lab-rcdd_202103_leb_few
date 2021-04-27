// Your code here
function saturdayFun(){
  return "This Satrurday, I want to go out with my friends";
}

function mondayWork(){
  return "This Monday, I will go to work early";
}

function wrapAdjective(effect = "*"){
  return function(a="special"){
      return "You are ${effect}${a}${effect";    
  }
}