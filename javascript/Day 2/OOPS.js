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
