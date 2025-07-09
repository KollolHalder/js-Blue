const person = {
  name: "Kollol",
  age: 22,
  student: {
    name: "Mohona",
    marks: {
      math: 90,
      science: 85
    }
  }
};

console.log(person["name"]);

person["email"] = "kollol@gmail.com";
console.log(person);
person["age"] = 24;
// console.log(person["age"]);

delete person["email"];
console.log(person);

console.log("name" in person);

for (let key in person) {
  console.log(key, person[key]);
}

console.log(person["student"]["marks"]["math"]);

const users = [
  { name: "brandon", age: 16 },
  { name: "karlie", age: 20 }
];
