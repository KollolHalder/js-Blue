//singleton
// object literals er moto declare korle singleton hoy na kintu constructor er moto declare korle singleton hoy.

// object literals
const mySym = Symbol("Key1");

const JsUser = {
  name: "Kollol",
  [mySym]: "mykey1",
  age: 22,
  location: "Shariatpur",
  email: "kollol@gmail.com",
  isLoggedIn: false,
  lastLoggedinDays: ["Monday", "Saturday"]
};

// console.log(JsUser[mySym]);
// JsUser[mySym] = "mykey9";
// console.log(JsUser[mySym]);
// Object.freeze(JsUser); // object ke freeze kora hoise jano er value change kora na jay.

JsUser.greetings = function () {
  console.log("Hello Kollol");
};

console.log(JsUser.greetings);
