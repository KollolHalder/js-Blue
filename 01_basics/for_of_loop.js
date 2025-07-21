// for of
// It is array specific loop

// for (const element of object) {
//     In here the object bole kiser upor loop apply korbo. Ai Object {} navigator.
// }

// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//   console.log(num);
// }

// const str = "Beautiful Nature";

// for (const charecter of str) {
//   if (charecter == " ") {
//     continue;
//   }
//   console.log(charecter);
// }

// Map
// Map is an object and it stores key value pair. It remembers insertion order. It does not have duplicate values.

const map = new Map();
map.set("IN", "India");
map.set("NP", "Nepal");
map.set("Vu", "Vutan");

// console.log(map);
// Result Map(3) { 'IN' => 'India', 'NP' => 'Nepal', 'Vu' => 'Vutan' }

// Applying for of loop
// for (const key of map) {
//   console.log(key);
// }
// Result [ 'IN', 'India' ]
// ["NP", "Nepal"][("Vu", "Vutan")];

// for (const [key, value] of map) {
//   console.log(key, ":", value);
// }

// Result IN : India
// NP : Nepal
// Vu : Vutan

// ?? Applying for of loop on Object

const myObject = {
  game1: "NFS",
  game2: "Vinland"
};

for (const [key, value] of myObject) {
  console.log(key, ": ", value);
}
