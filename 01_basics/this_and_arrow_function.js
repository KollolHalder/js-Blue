const user = {
  username: "Hitesh",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  }
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

const chai = () => {
  let username = "Hitesh";
  //   console.log(this.username);
  console.log(this);
};

chai();

//arrow function

const add = (num6, num9) => {
  return num6 + num9;
};

console.log(add(6, 9));

// arrow function er implicit return
// array function the different etai je {} er moddhe lekha lagbe na and same line e likhte hobe.
// {er vitor likhle return likhte hobe () vitore likhe or konotar moddhe na likhle return lekha lagbe na }
const addTwo = (num1, num2) => num1 + num2;
console.log(addTwo(2, 4));

const returnObject = (num1, num2) => ({ username: "Hitesh" });
console.log(returnObject(2, 3));

const user2 = {
  username2: "Hitesh",
  welcome: function () {
    console.log("This is the teacher of JS " + this.username2);
  }
};
user2.welcome();
const user3 = {
  username3: "Hitesh",
  welcome: () => {
    console.log("This is the teacher of JS " + this.username3);
  }
};
user3.welcome();
