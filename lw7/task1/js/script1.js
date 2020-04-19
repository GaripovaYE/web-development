function isPrimeNum(num){
  if (Number.isInteger(num) && num > 1){ 
    let isPrime = true;
    for (let j = 2; j < num; j++){
      if (num % j == 0){
        isPrime = false;
        break;
      }
    }
    return isPrime
  } else {
    return false
  }
}

function isValid(numb){
  return (typeof numb == "number")
}

function isValidData(data){
  return (typeof data == 'number') || Array.isArray(data)
}

function isPrimeNumber(num){  
  if (isValidData(num)){
    let numArray;
    if (typeof num == "number"){
      numArray = [num];
    } else {
      numArray = num;
    }    
    for (let i = 0; i < numArray.length; i++){
      if (isValid(numArray[i])){
	(isPrimeNum(numArray[i]))
          ? console.log(numArray[i] + ' is prime number')
          : console.log(numArray[i] + ' is not prime number')
      }
    } 
  }
}

// let n = [5, '5', 20];
// let n = 5;
// let n;
let n = [5, 20];

isPrimeNumber(n);

