// Your code here
function saturdayFun(r= "roller-skate"){
  return `This Satrurday, I want ${r}!`;
}

function mondayWork(s="go to the office"){
  return `This Monday, I will ${s}`;
}

function wrapAdjective(effect = "*"){
  return function(a="special"){
      return `You are ${effect}${a}${effect}!`;    
  }
}