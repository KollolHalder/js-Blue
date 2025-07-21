// Falsy Value = false, -0, BigInt 0n, "", null, undefined, NaN
// truthy  Value = "0", 'false', " ", [],{}, function(){}

const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Checking if object is empty

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
// ?? gives a default value only if the first value is missing (null or undefined).
// It keeps real values like 0, false, or "".
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;

console.log(val1);

// Terniary Operator=  condition ? true : false

const iceTeaPrice = 100;

iceTeaPrice >= 80
  ? console.log("Greater than 80")
  : console.log("Less than 80");
