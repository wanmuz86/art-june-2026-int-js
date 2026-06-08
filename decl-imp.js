// Code to double all numbers
// Imperative programming -> We till how to do it 
const numbers = [1,2,3,4,5];
let answer = []

for (let i = 0; i < numbers.length; i++){
  answer.push(numbers[i]* 2);
}
console.log(answer);

// Declarative programming - map
// For each item in the array DO [LAKUKAN]
const answerMap = numbers.map(val=> val *2);
console.log("Declarative ", answerMap);


// FIlter - Imperative
let answerFilterImp = [];
for (let i = 0; i< numbers.length;i++){
  if (numbers[i] % 2 === 0){  // Even number test
    answerFilterImp.push(numbers[i])
  }
}
console.log("Imperative", answerFilterImp);

// Declarative programming - filter
// For each item in the array ENSURE THAT [PASTIKAN]

const answerFilterDecl = numbers.filter(val => val % 2 === 0);
console.log("Declarative",answerFilterDecl);

// Reduce

let answerRedImp = 0;
for (let i = 0; i < numbers.length; i++){
  answerRedImp += numbers[i]
}
console.log("Imperative",answerRedImp);

// Declarative

// acc = accumulator, which by default start at 0
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10 + 5

// You can add second argument to override the value of acc from 0 to 100 for eg
const answerRedDecl = numbers.reduce((acc,val)=> acc+val)
console.log("Declarative", answerRedDecl)
