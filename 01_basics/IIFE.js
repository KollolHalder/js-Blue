// IIFE -> Immediately Invokked Function Expressions
// Function immediately execute krorar jonne

// IIFE er structure hosse () er moddhe prothome function rakha lagbe then () aije execute

(function chai() {
  console.log("We are connected to nature");
})();

// global scope theke polution hoy majhe majhe. global scope er pollution soranor jonno IIFE babohar kora hoy.
// () aita hosse execute part not the () containing function.() aita jane na kokhon thamte hobe tai aita ke end korar jonno ; dite hoy

//parameter and argument daoyar niyom

//This  is unnamed IIFE
((name) => {
  console.log(`Teacher name is ${name}`);
})("Hitesh");

//This is named IIFE

(function chai2() {
  console.log("we are connected to nature");
})();
