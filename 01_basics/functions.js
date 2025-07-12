function nature() {
  console.log("N");
  console.log("A");
  console.log("T");
  console.log("U");
  console.log("R");
  console.log("E");
}

nature();

function addTwoNumbers(num1, num2) {
  let result = num1 + num2;
  return result;
  console.log("Math is an interesting subject.");
}

const finalresult = addTwoNumbers(2, 4);
console.log(`Result ${finalresult}`);

// ... (rest) mane ja khuchra value ase oiguloke bundle kora

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500));

function calculate(val1, val2, ...num) {
  return num;
}

console.log(calculate(200, 400, 600, 900));

const user = {
  username: "Hitesh",
  price: 100
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
