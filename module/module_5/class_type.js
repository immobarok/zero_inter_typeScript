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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    //display method
    User.prototype.display = function () {
        console.log("Name is : ".concat(this.name, " and age is :").concat(this.age));
    };
    return User;
}());
/* const user1 = new User("Mobaork", 23);
user1.display(); */
//inheritence
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this;
        _this.studentId = studentId;
        return _this;
    }
    Student.prototype.display = function () {
        console.log("Name is : ".concat(this.name, " and age is :").concat(this.age, " id:").concat(this.studentId));
    };
    return Student;
}(User));
var student1 = new Student("mobarok", 45, 73949);
student1.display();
