// class Car {
//   constructor(brand, model, yearOfManufacture, color) {
//     this.brand = brand;
//     this.model = model;
//     this.yearOfManufacture = yearOfManufacture;
//     this.color = color;
//   }

//   start() {
//     console.log(
//       `brand : ${this.brand} \  model : ${this.model} \ yearOfManufacture : ${this.yearOfManufacture} \ color : ${this.color}`
//     );
//   }
// }

// const car1 = new Car("Toyota", "Corolla", 2020, "Red");
// car1.start();

// class Student {
//   constructor(name, age, degree) {
//     this.name = name;
//     this.age = age;
//     this.degree = degree;
//   }

//   introduce() {
//     console.log(
//       `name : ${this.name} \  age : ${this.age} \ degree : ${this.degree}`
//     );
//   }
// }

// const testStudent = new Student("John", 24, "Btech");
// testStudent.introduce();

// Encapsulation

// class BankAccount {
//   balance = 0;

//   deposit(amount) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }

//   getBalance() {
//     return this.balance;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(1000);
// console.log("Balance: ", acc.getBalance());
// acc.deposit(1000);
// console.log("Balance: ", acc.getBalance());

// class Employee {
//   salary = 0;

//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }

//   getSalary() {
//     return `${this.name} has a salary of ${this.salary}`;
//   }
// }

// const emp = new Employee("John", 100000);
// console.log(emp.getSalary());

//Encapsulation

// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }

//   setName(newName) {
//     this.#name = newName;
//   }
// }

// const p1 = new Person("Pramendra");

// console.log(p1.getName());
// p1.setName("Shukla");

// console.log(p1.getName());

// Abstraction

// class Car {
//   startEngine() {
//     console.log("Engine started");
//   }

//   drive() {
//     this.startEngine();
//     console.log("Car is driving");
//   }
// }

// const car = new Car();

// car.drive();

// Inheritance

// class Animal {
//   eat() {
//     console.log("Eating");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Dog is Barking");
//   }
// }

// const dog = new Dog();
// dog.eat();
// dog.bark();

// Polymorphism

// class Animal {
//   speak() {
//     console.log("Animal speaks");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Dog barks");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Cat meows");
//   }
// }

// const animals = [new Dog(), new Cat(), new Animal()];
// animals.forEach((animal) => animal.speak());

// class Animal {
//   constructor() {
//     this._species = "Unknown";
//   }
// }

// class Dog extends Animal {
//   getSpecies() {
//     return this._species;
//   }
// }

// const dog = new Dog();
// console.log(dog.getSpecies());

// let a = [10, 20, 30, 40, 50];
// console.log(a);

// access first element
// console.log(a[0]);

// access last element
// console.log(a[a.length - 1]);

// print number of element present in array
// console.log(a.length);

//modify value of array
// a[1] = 100;
// console.log(a);

// add element in an array

// a.push(200);
// console.log(a);

// functions in arrays

// length of an array
// console.log(a.length);

// toString() method

// let a = ["Java", "Python", "JavaScript", "Rust"];
// console.log(a);
// let s = a.toString();
// console.log(s);

// join() method
// console.log(a.join(" / "));

// let b = ["C", "C++", "GoLang", "PHP"];

// let newArr = a.concat(b);
// console.log(newArr);

// delete method
// delete a[2];
// console.log(a);
// console.log(a.length);

// let c = a.concat(b);
// console.log(c);

// flat function
// a = [10, 20, 30, [40, 50], [60, 70, 80]];
// console.log(a);
// const b = a.flat();
// console.log(b);

//push function

// a = [1, 2, 3, 4, 5];
// a.push(6);
// console.log(a);

// unshift function
// a.unshift(7);
// console.log(a);

// pop function

// a.pop();
// console.log(a);

// shift function
// a.shift();
// console.log(a);

// splice function

// let b = [10, 20, 30, 40, 50];
// b.splice(1, 3);
// console.log(b);

// slice function
// let b = [10, 20, 30, 40, 50];
// let c = b.slice(1, 3);
// console.log(c);

// map function

// let a = [10, 20, 30, 40, 50];
// let b = a.map((x) => {
//   return x * x;
// });

// console.log(b);

// filter function

// let c = [1, 2, 3, 4, 5];
// let d = c.filter((x) => x < 3);
// console.log(d);

//reduce function
// let a = [10, 20, 30, 40, 50];
// let b = a.reduce(adds);

// function adds(tot, num) {
//   return tot + num;
// }

// console.log(b);

// reverse function
// a = [10, 20, 30, 40, 50];
// a.reverse();
// console.log(a);
