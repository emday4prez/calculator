function add(n1,n2){
 return n1 + n2
}
function subtract(n1,n2){
 return n1 - n2
}
function multiply(n1,n2){
 return n1 * n2
}
function divide(n1,n2){
 return n1 / n2
}

function operate(operator, a, b){
 switch(operator){
  case '+':
   return add(a, b)
  case '-':
   return subtract(a, b)
  case '*':
   return multiply(a,b);
  case '/':
   if(b === 0) return null;
   return divide(a, b)
  default:
   return null;
 }
}