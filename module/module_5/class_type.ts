//class is use for multiple time use
/* class User {
  //properties, methods, constructor
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`username:${this.userName},age:${this.age}`);
  }
}

let user1 = new User("Mobaork", 23);
user1.display();
let user2 = new User("Mobaork Ali", 27);
user2.display(); */

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //display method
  display(): void {
    console.log(`Name is : ${this.name} and age is :${this.age}`);
  }
}

/* const user1 = new User("Mobaork", 23);
user1.display(); */

//inheritence
class Student extends User {
  studentId: number;

  constructor(name: string, age: number, studentId: number) {
    super(name, age);
    this.studentId = studentId;
  }
  display(): void {
    console.log(
      `Name is : ${this.name} and age is :${this.age} id:${this.studentId}`
    );
  }
}

let student1 = new Student("mobarok", 45, 73949);
student1.display();
