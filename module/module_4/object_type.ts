/* const user1 = {
  userName: "Mobarok",
  userId: 636238,
};
const user2 = {
  userName: "Mobarok Ali",
  userId: 63623890,
};
 */
/* 
let user1: object;
user1 = {
  name: "Mobarok",
};

let user2: object[];
user2 = [{ name: "Mobarok", email: "Mobaorkislamw" }];

for (const key in user2) {
  console.log(user2[key]["name"]);
}
 */

//custom type

/*type User = { name: string; age: number };

let user1: User;
user1 = {
  name: "Mobarok",
  age: 21,
};
let user2: User;
user2 = {
  name: "Mobarok",
  age: 21,
};
let user3: User;
user3 = {
  name: "Ali",
  age: 34,
};
 */

type RequiestType = "GET" | "POST";
let getRequest: RequiestType;

getRequest = "GET";

function requiestHandler(requiestType: RequiestType) {
  console.log(requiestType);
}

requiestHandler("POST");
