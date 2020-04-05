function isPrimeNum(Num) {
  let isPrime;
  
  isPrime = true;
  for (let j = 2; j < Num; j++) {
    if (Num % j == 0) {
      isPrime = false;
	  break;
    }
  }
  return isPrime
}

function isValid(numb){
  return (typeof numb == "number")
}

function isPrimeNumber(Num) {
  let isPrime;
  let NumArray;
  if (typeof Num == "number"){
	NumArray = [Num];
  } else {
	NumArray = Num;
  }
  let i = 0
  
  while (i < NumArray.length){
	(isPrimeNum(NumArray[i])) 
	  ? console.log(NumArray[i] + ' is prime number')
	  : console.log(NumArray[i] + ' is not prime number')
	i++;
  }
}

function isNotValidData(data){
	return ((Array.isArray(data) && !data.every(isValid)) || (data == null))
}
//let n = [5, '5', 20];
// let n = 5;
// let n;
let n = [5, 20];

if (isNotValidData(n)){
  console.log('not valid data');
} else {
  isPrimeNumber(n);
}

