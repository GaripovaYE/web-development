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

function isNotValidData(data){
  if (data != null){
    if (typeof data == 'object'){
      if (data[0] != null){ // проверка, не пустой ли массив
	    return (Array.isArray(data) && (!data.every(isValid))) // все элементы валидные
      }
	  return true
    }
    if (typeof data == 'number'){
      return false
    }
	return true
  }
  return true
}

function isPrimeNumber(num){  
  if (!isNotValidData(num)){
	let numArray;
    if (typeof num == "number"){
      numArray = [num];
    } else {
      numArray = num;
    }
    for (let i = 0; i < numArray.length; i++){
      ((isPrimeNum(numArray[i]))) 
        ? console.log(numArray[i] + ' is prime number')
        : console.log(numArray[i] + ' is not prime number')
    }
  } else {
    console.log('Not valid data');
  }
}

// let n = [5, '5', 20];
// let n = 5;
// let n;
let n = [5, 20];

isPrimeNumber(n);

