// JS Recap

var name = "Muzaffar";
console.log(name); // String

console.log("My name is "+name); // concatenation

console.log(`My name is ${name}`) // Interpolation use ``

// Number

var age = 13;
var weight = 70.5;

var a = 10;
var b = 3 ;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b); // Remainder of division operation 

// Boolean

var hungry = true;
var tired = false;
console.log(hungry && tired); //Both of it needs to be true 
console.log(hungry || tired); // One of it needs to be true

console.log(!hungry) // Negation (NOT / reverse of)

// Array and important methods

var scores = [30,60,80,100,20,70];
console.log(scores[0]); // First item - 30
console.log(scores[2]); // third item 
scores.push(80); // add an item at the end
scores.pop(); //Remove an item from the end
scores.pop(); //Remove another item from the end
console.log(scores);
console.log(scores.length); // How many items
scores.splice(2,1); // Remove 1 item at index 2, it will change the original array , mutable
console.log(scores); 

// Object
var info = {"name":"Muzaffar", "address":"Bangi","age":30};
console.log(`My name is ${info["name"]} I am ${info["age"]} years old and I stay in ${info["address"]}`)
