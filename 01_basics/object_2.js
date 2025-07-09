const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 }; // this is the most used in object assigning
console.log(obj3);

const users = [
  {
    id: 1,
    email: "g@gmail.com"
  },
  {
    id: 2,
    email: "h@gmail.com"
  },
  {
    id: 3,
    email: "p@gmail.com"
  }
];
