//calculateBinaryExp(str) вычисляет результат выражения формата 'операция число1 число2'
function Calculate(symb, x, y){
  switch(symb){
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      if (y != 0){
        return x / y
      } else {	
        console.log('Divide by zero');
        return NaN
      }
  }
}

function isNumber(x){
  let isNum  = isFinite(x);
  if ((isNum) && (Number(x) == 0) && (!x.includes('0'))){
    isNum = false;
  }
  return isNum
}

function calculateBinaryExp(str){ 
  const operations = '*/+-';	
  let a, b;	
  let err;
  let oper = str[0];
	
 if (operations.includes(oper) && (str.length > 4)){
    str = str.substr(2, str.length);
    let posSpace = str.indexOf(' ');
    a = str.substring(0, posSpace);
    b = str.substr(posSpace	, str.length);
    if (isNumber(a) && isNumber(b)){
      return Calculate(oper, Number(a), Number(b));
    } else {
      err = true;
    }			
  } else {
    err = true;
  }
  if (err){
    return NaN
  }
}

function simplifyExpression(s){		
  if (s.includes(')')){
    let i = s.indexOf(')')
    while (s[i] != '('){
      i--;
    }
    let sub = s.substring(i, s.indexOf(')') + 1);
    s = s.replace(sub, calculateBinaryExp(sub.substring(1, sub.length - 1)));
    return s
  } else {
    return NaN
  }
}

function calc(s){ 
  while (s.includes('(')){
    s = simplifyExpression(s);
  }
  return calculateBinaryExp(s)
}

let str = "+ (/ 4  0 ) (* 4 (+ 1 1))";

console.log(calc(str));
