function calculate(symb, x, y){
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
  str = str.trim();
  let expElements = str.split(/ +/);
  if (operations.includes(expElements[0])){
    if (isNumber(expElements[1]) && isNumber(expElements[2])){
      return calculate(expElements[0], Number(expElements[1]), Number(expElements[2]));
    }
    return NaN
  }
  return NaN
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
  if (s != null){
    while (s.includes('(')){
      s = simplifyExpression(s);
    }
    return calculateBinaryExp(s)
  } else {
    console.log('Error');
  }
}

let str = ' +  (/ 4 (- (- 2 1) (+ 2 3))) (* 4 (+ 1 1))';

console.log(calc(str));
