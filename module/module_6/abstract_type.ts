//main idea is amader ashol uddessho amra kao ke share korbo na
/* abstraction help -> us to hide the implementation of something   */

/* ->class declare with abstract keyword
   -> object can be creted from abstact class
   ->if a class extends abstract class it must inherit all the abstract methods
   ->abstract method not have any body 
*/

abstract class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //display method
  abstract display(): void;
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
