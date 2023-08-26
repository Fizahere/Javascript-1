//Oop stands for Object Oriented Programing

// in javascript everything is object

const person = {
  name: "Muzammil",
  age: 27,
  job: "software engineer",
};
// console.log(typeof person, "type"); //object

// const person = ["Muzammil", "age", "Job"];
// console.log(typeof person, "type"); //object
// const person = new String("AAA");
// console.log(typeof person, "type"); //object
// const person = new Number(11);
// console.log(typeof person, "type"); //object

// console.log(person, "person");;

//create same object with function
// function personOne() {
//   this.name = "Muzammil";
//   this.age = 27;
//   this.job = "software engineer";
// }

// const personWithFunction = new personOne();

// console.log(personWithFunction, "personWithFunction"); //exact same object

class PersonClass {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}

const personWithClass = new PersonClass("Muzammil", 27, "software engineer"); //class initialize

// console.log(personWithClass, "personWithClass"); //exact same object
// console.log(person, "simple object literal");

// There are four pillars in oop

/*
1-Encapsulation
2-Inheritance = Wirasat
3-Abstraction
4-Polymorphism


JavaScript OOP has its own set of advantages and disadvantages. Here are some of the pros and cons of using object-oriented programming (OOP) in JavaScript:

Pros of JavaScript OOP:

Code Organization: OOP helps organize code into logical and modular structures. It allows you to encapsulate related properties and behaviors into objects, making the code more maintainable and easier to understand.

Reusability: OOP promotes code reuse through concepts like inheritance and composition. You can create reusable classes or objects that can be extended or composed to create new functionalities. This can save development time and reduce code duplication.

Abstraction and Encapsulation: OOP encourages the use of abstraction and encapsulation, allowing you to hide complex implementation details and expose only essential interfaces. This can improve code readability and reduce dependencies between different parts of the code.

Polymorphism: Polymorphism in OOP enables flexibility by allowing objects to take multiple forms while sharing a common interface. This allows you to write more flexible and extensible code.
*/

//1-Encapsulation

class PersonEncapsulation {
  constructor(name, age, job) {
    this.name = name; //encapsulation
    this.age = age; //encapsulation
    this.job = job; //encapsulation
  }

  print() {
    console.log(
      `Hello, my name is ${this.name} and my age is ${this.age} and my job title is ${this.job}`
    );
  }
}

const encapsulationExample = new PersonEncapsulation(
  "Muzammil",
  27,
  "software engineer"
);

// encapsulationExample.print();

//inherit all variables and methods of class
//Parent Class
class Parent {
  motherLanguage() {
    return "urdu";
  }
}

const parentVariable = new Parent();
parentVariable.motherLanguage(); //Urdu

//Children Class
class Children extends Parent {}

const childrenVariable = new Children();
childrenVariable.motherLanguage(); //Urdu

/*

Abstraction: Abstraction focuses on providing a simplified interface 
for interacting with complex objects. 
It allows for hiding implementation details and only exposing essential features
*/

class Database {
  constructor(connectionString) {
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
    //connect to the database
  }

  query(sql) {
    //query work
    //query work
    //query work
    //query work
    //query work
    //query work
  }
  save(data) {
    // save the data to database
  }
}

const db = new Database("database://localhost");
db.query("SELECT * from users");
db.save({ name: "Jhon", age: 25 });

/*
In this example, the Database class abstracts the complexity of connecting to a database 
and executing queries. The user of the class doesn't need to know the inner workings. 
they can simply use the provided methods to interact with the database.

*/

//Polymorphism: one class inherit in many classes
class Shape {
  calculateArea() {
    // Default implementation
  }
}

class Circle extends Shape {
  constructor(radius) {
    super(); //initialize the parent class
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// const circle = new Circle(100);
// circle.calculateArea();

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(3, 4);

// console.log(circle.calculateArea()); // Output: 78.53981633974483
// console.log(rectangle.calculateArea()); // Output: 12

//Prototype Inheritance

/*

Prototype inheritance allows objects to inherit properties and methods from a prototype object.
It is an alternative way to implement inheritance in JavaScript.

*/

//Array
const arrExample = [1, 2, 3];

// console.log(arrExample, "arr Example");

// console.log(
//   arrExample.__proto__,
//   "console all prototype hidden functions of array"
// );

//String
const strExample = new String("111");
// console.log(strExample.__proto__, "str prototype functions");

function PersonProto(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

PersonProto.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// {firstName:"muzammil",lastName: "rafay",birthday: "1996-11-27"}
const personProtoExample = new PersonProto("muzammil", "rafay", "1996-11-27");
// console.log(personProtoExample, "personProtoExample");
// console.log(personProtoExample.__proto__.calculateAge(), "personProtoExample");
console.log(personProtoExample.calculateAge(), "personProtoExample");

function Customer(firstName, lastName, dob, phone) {
  //this = instance of customer function
  PersonProto.call(this, firstName, lastName, dob); //properties inherit
  this.phone = phone;
}

Customer.prototype = Object.create(PersonProto.prototype);

const customer1 = new Customer(
  "firstname",
  "lastname",
  "1996-11-27",
  "035555555"
);

console.log(customer1, "customer1"); // {firstName:"muzammil",lastName: "rafay",birthday: "1996-11-27",phone:"1111"}
console.log(customer1.calculateAge(), "calculateAge");
