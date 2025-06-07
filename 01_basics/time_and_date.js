// Date constructor er structure to pass argument Date(year,month,date,hour,minutes,second,ms);

// console.log(date);

//let newDate = new Date("2029-09-30");
// console.log(newDate);

const newDate = new Date(2025, 4, 1, 2, 3, 4, 5);
let yr = newDate.getFullYear();
let mn = newDate.getMonth() + 1;
let dt = newDate.getDate();
console.log(dt);
console.log(mn);
console.log(yr);

newDate.setDate(9);
newDate.setMonth(2);
console.log(newDate.toString());
console.log(newDate.toLocaleDateString());
