function printarray(arr) {
  for (let values of arr) {
    console.log(values);
  }
}

printarray(["Nature", "Earth"]);

function getLast(arr) {
  return arr[arr.length - 1];
}

console.log(getLast([10, 20, 30, 60]));

function printtable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(i * number);
  }
}

printtable(9);

function totalPrice(...num) {
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total = total + num[i];
  }
  return total;
}

console.log(totalPrice(100, 200, 300));

function capitalize(strg) {
  return strg.charAt(0).toUpperCase() + strg.slice(1);
}

console.log(capitalize("Mature"));

function printUser(user) {
  console.log("Name" + user.name, "Age " + user.age);
}

const user = { name: "Hitesh", age: 25 };
printUser(user);
