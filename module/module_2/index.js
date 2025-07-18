//union type
//user defined type
/* let userId: string | number;
userId = "101";
userId = 101;

function displayInfo(userId: string | number) {
  console.log(userId);
}

displayInfo(101);
displayInfo("3012"); */
//displayInfo(true);
//arr type
/* let userName: string[] = ["Mobarok", "Ali", "Ashraful"];
const joinedArray = userName.join(" ");
console.log(joinedArray); */
var userId;
var userName;
var userInfo = {
    userId: 1001,
    userName: "Mobarok",
};
var oneLine = Object.values(userInfo).join(" ");
console.log(oneLine);
