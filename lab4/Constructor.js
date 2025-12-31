//constructor function named User that accepts name and email as parameters, stores them as object properties and has a login() method added using User.prototype.

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.login = function () {
  console.log(this.name + " logged in");
};

const user1 = new User("Alex", "alex@example.com");
user1.login();

//onstructor function named Student that calls the User constructor to reuse name and email, adds a new property rollNo, inherits the login() method using the prototype chain and adds a new method registerEvent() using Student.prototype.
function Student(name, email, rollNo) {
User.call(this, name, email);
this.rollNo = rollNo;
}
Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;
Student.prototype.registerEvent = function () {
console.log("Event registered");
};

const student1 = new Student("Jamie", "jamie@example.com", 101);
student1.login();
student1.registerEvent();

//constructor function named Organizer that reuses properties from User, adds a new property department, inherits the login() method and adds a method createEvent() using Organizer.prototype

function Organizer(name, email, department) {
User.call(this, name, email);
this.department = department;
}
Organizer.prototype = Object.create(User.prototype);
Organizer.prototype.constructor = Organizer;
Organizer.prototype.createEvent = function () {
console.log("Event created");
};

const org1 = new Organizer("Chris", "chris@example.com", "Cultural");

org1.login();       
org1.createEvent(); 
