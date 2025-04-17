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

for (let i = 1; i <= 10; i++) {
  if (i == 4) break;
  console.log(i);
}
