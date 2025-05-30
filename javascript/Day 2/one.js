//Single line comment
//console.log("Hello world");

//Multi-line comment
/*
console.log("Hello world");
console.log("Hello world");
console.log("Hello world");
*/

//Declaration of variable (let, const, var)
// var a = 10;
// var a = 30;
// console.log(a);

// const a = 10;
// const a = 30;

// let a = 10;
// let a = 20;
// console.log(a);

//Data Types in Javascript
// Primitive Data Types
// let n = 10;
// console.log(typeof n);
// let n1 = "String";
// console.log(typeof n1);
// let n2 = false;
// console.log(typeof n2);
// let n3;
// console.log(typeof n3);
// let n4 = null;
// console.log(typeof n4);
// let n5 = Symbol("Hello");
// console.log(typeof n5);
// let n6 = 123456789012345678901234567890n;
// console.log(typeof n6);
//Non Primitive Data Types
// let obj = {
//   name: "test user",
//   age: 25,
// };
// console.log(typeof obj);

// let n7 = [1, 2, 3, 4, 5];
// console.log(typeof n7);

// function sayHello() {
//   console.log("Good Evening!");
// }
// sayHello();

// console.log(typeof sayHello);

// Global and Local Variables in Javascript

// let a = 20;

// function sayHello() {
//   var time = "Evening!";
//   console.log(time + "___" + a);
// }
// var time = "Morning!";

// sayHello();
// console.log(time);

// Javascript Operators

//Arithmetic Operators

// let a = 10;
// let b = "hello";
// let sum = a - b;
// let sub = a - b;
// let mul = a * b;
// let div = a / b;
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
//console.log(sum);

//Assignment Operators

// let n = 10;
// console.log(n);
// n += 5;
// console.log(n);
// n *= 5;
// console.log(n);
// n -= 5;
// console.log(n);
// n /= 5;
// console.log(n);
//console.log("hello world");

//Comparison Operators

// let a = 20;
// let b = 40;
// console.log(a >= b);

// Javascript Logical Operators

// let a = false;
// let b = false;
// console.log(a || b);

// Javascript Ternary Operator

// const a = 18;
// const status = a >= 18 ? "You can vote" : "You cannot vote";
// console.log(status);

// Javascript Comma Operator

// let n1, n2;
// const res = ((n1 = 10), (n2 = 10), n1 + n2);
// console.log(res);

// Unary Operators

// let a = 5;
// console.log(--a);
// console.log(++a);

// BigInt Operator

// let n = 123456789012345678901234567890n;
// let n1 = 123456789012345678901234567890n;
// console.log(n + n1);

// let a = "Hello";
// let c = "World";
// console.log(a + " " + c);

// let a = 16;

// if (a == 16) {
//   if (a < 15) {
//     console.log("a is less than 15");
//   } else {
//     console.log("a is greater than 15");
//   }
// } else {
//   console.log("a is not equal to 10");
// }

// let score = 60;
// if (score >= 90 && score <= 100) {
//   console.log("A");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else if (score >= 70 && score < 80) {
//   console.log("C");
// } else {
//   console.log("You are fail!");
// }

// Switch Case Statement
// const day = 8;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Invalid day";
//     break;
// }

// console.log(dayName);

// let grade = "A";
// let result;

// switch (grade) {
//   case "A":
//     result = "Excellent";
//     break;
//   case "B":
//     result = "Good";
//     break;
//   case "C":
//     result = "Average";
//     break;
//   case "D":
//     result = "Poor";
//     break;
//   default:
//     result = "Invalid grade";
//     break;
// }

// console.log(result);

// for (let i = 1; i <= 10; i++) {
//   if (i == 4) break;
//   console.log(i);
// }

// Loops in Javascript

// For loop

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for (let i = 1; i <= 10; i++) {
//   console.log("Count: " + i);
// }

// While Loop
// let i = 1;
// while (i <= 10) {
//   console.log("Count: " + i);
//   i++;
// }
// Do while Loop

// let i = 1;
// do {
//   console.log("Counter : " + i);
//   i++;
// } while (i < 1);

// const obj = { name: "Pramendra Shukla", age: 24, hobbies: "playing" };
// for (let key in obj) {
//   console.log(key, ": ", obj[key]);
// }

// const school = {
//   name: "test user 1",
//   admissionNo: 324,
//   phone: 1234567890,
//   city: "Delhi",
// };

// for (let key in school) {
//   console.log(key, " : ", school[key]);
// }

//For of Loop
// let a = [10, 20, 30, 40, 50];
// for (let cnt of a) {
//   console.log("count ", cnt);
// }

// Objects In Javascript

// 1. Create an object using Literal
// let obj = {
//   name: "test user 1",
//   mobile: 12345678,
//   city: "Delhi",
// };
// console.log(obj);

// 2. Create object Using new Object() Constructor
// let obj = new Object();
// obj.name = "test user 1";
// obj.age = 24;
// obj.phone = 123456789;

// console.log(obj);

//get value from object

// console.log(obj.name);
// console.log(obj.phone);

//modify value from object

// obj.age = 100;
// console.log(obj);

//add value from object
let obj = new Object();
obj.name = "test user 1";
obj.age = 24;
obj.phone = 123456789;
obj.city = "Delhi";

let objNew = new Object();
objNew.country = "India";

//Delete value from object
// delete obj.city;

//Check if key and value present in object
// console.log("city" in obj);
// console.log(obj.hasOwnProperty("age"));

//merge two object
// let obj3 = { ...obj, ...objNew };
// console.log(obj3);

// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = arr1 + arr2
// console.log(first)

// console.log(Object.keys(obj3).length);

//functions in Javascript

// 1. Function Declaration
// function greet(name) {
//   return `Hello ${name}`;
// }
// console.log(greet("Pramendra!"));

// 2. Function Expression
// const greet = function (name) {
//   return `Hello ${name}`;
// };

// console.log(greet("Pramendra!"));

// 3. Arrow Function
// const sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 20));

// 4. Anonymous Function
// setTimeout(function () {
//   console.log("Anonymous function!");
// }, 2000);

// 5. IIFE (Immediately Invoked Function Expression)

// (function () {
//   console.log("IIFE function!");
// })();

// (() => {
//   console.log("IIFE function!");
// })();

// 6. Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const user1 = new Person("John", 25);
// console.log(user1);

// 7. async function

// async function fetchAPI() {
//   const res = await fetch(
//     "https://650df10fa8b42265ec2cd7c0.mockapi.io/newsletter"
//   );
//   const data = await res.json();
//   console.log(data);
// }

// fetchAPI();

// 8. Recursive Function

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));
