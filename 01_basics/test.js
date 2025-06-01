// console.log(Math.random());
// console.log(Math.random() * 10 + 1);

// console.log(Math.floor(Math.random() * 10) + 1);

// const min = 10;
// const max = 20;

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

let date = new Date();
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(typeof date);
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

// let createdDate = new Date(2025,6,1); // erokom patterene likhle month 0 theke shuru hoy.
let createdDate2 = new Date("2025-06-1"); // Erokom kore likhle month a theke shuru hoy.

let createdDate = new Date("6-1-2025");
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(createdDate2.getTime());
