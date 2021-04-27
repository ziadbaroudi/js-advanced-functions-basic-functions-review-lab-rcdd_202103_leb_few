// Your code here
function saturdayFun(r= "roller-skate"){
  return `This Satrurday, I want to ${r}!`;
}

function mondayWork(s="go to the office"){
  return `This Monday, I will ${s}.`;
}

function wrapAdjective(effect = "*"){
  return function(a="special"){
      return `You are ${effect}${a}${effect}!`;    
  }
}

let Calculator = {
  add: function (a,b){
    return a+b;
  },
  subtract: function (a,b){
    return a-b;
  },
    multiply: function(a,b) {
    return a * b
  },
  divide: function(a,b) {
    return a / b;
  }
  
}

let actionApplyer = function(start, ray) {
  let a = start

  for (let i = 0; i < ray.length; i++ ){
    a = ray[i](a)
  }

  return a
}