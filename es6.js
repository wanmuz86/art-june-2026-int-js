// // let vs var

// let x = 10;

// if (true) {
//   let x = 20;
//   console.log("Inside ",x); // The value x here will only change within the {} -> block scoped
// } 

// console.log("Outside ", x); // The outer x will remain the same

// // hoisted variable
// // hoisted , in a way we have this line on top of console.log = var y;
// console.log(y); // with var , we will get "undefined" here because it is hoisted
// var y = 5;
// console.log(y);

// console.log(y); // with let , we will have syntax error, it protect it's to be hoisted
// let y = 5;
// console.log(y);


// Constant
// const NAME = "Muzaffar";
// console.log(NAME);
// NAME = "Wan Muzaffar"

// // Function declaration without arrow notation
function add(a, b) {
  return a + b;
}

const tambah = (a,b) => a+b; // If it is one liner , return is not needed and {} is not needed
console.log(tambah(2,3));


const numbers = [1,2,3]; // Array of numbers

// Array destructuring
// first = numbers[0], second = numbers[1]
const [first, second, third] = numbers;

console.log(first);
console.log(second);


// // Object desctructuring
// // We will see this a lot on props topic in react (passing variable from 1 component to another)
// const info = {"name":"Alice", age:30, address:"Kajang"};
// // Eq : const name = info["name"], const age = info["age" ]....
const {name, age, address} = info;

console.log(name);
console.log(age);
console.log(address);

// // Array spread operator

// To add an item at the end of it while maintaining the original array
const originalArray = [1,2,3];
const modifiedArray = [...originalArray, 4];
console.log(originalArray);
console.log(modifiedArray);

// To combine multiplea array

const arr1 = [1,2,3];
const arr2 = [4,5,6];
const combinedArray = [...arr1, ...arr2]; // Combining the value of arr1 and arr2
console.log(combinedArray);


// Object Spread operator

// 1) merge objext

const person = {"name":"John", "age":25};
const details = {"city":"New York", "occupation":"Engineer"};
const mergedPerson = {...person , ...details};
console.log(mergedPerson);

// 2) Overriding properties

const info =  {"name":"John", "age":25,"city":"New York"};
const updatedInfo = { ...info, "age":30};

console.log(info);
console.log(updatedInfo);


// Rest parameters, infinit number of arguments, transform arguments into array

const sum = (...arr) => {
  let answer = 0;
  for (let i =0 ; i < arr.length; i++){
    answer+= arr[i];
  }
  return answer;
}

console.log(sum(1,2,3)) // 6 
console.log(sum(1,2,3,4,5)) // 15
console.log(sum(1,2,3,4,5,6,7,8,9,10)) // 55
