const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
};

const { courseInstructor: instructor } = course; // ✅ This is called destructuring.
// ✅ It renames 'courseInstructor' as 'instructor' while extracting it.
// naming the courseInstructor to instructor.

// console.log(courseInstructor);
// console.log(instructor);

//TODO object destructuring

const fruits = {
  name: "Mango",
  price: 600
};

const { name, price } = fruits;

console.log(name);
console.log(price);

const colors = ["Blue", "Green", "Red"];
const [first, second] = colors;
console.log(first);
console.log(second);

const numbers = [6, 8, 10];
const [, , ten] = numbers;
console.log(ten);

let a = 1;
let b = 2;
[a, b] = [b, a];

console.log(a, b);
