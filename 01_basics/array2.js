const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][0]);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

// aita korle array thake na proti ta element alada thake.

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// const real_another_array = another_array.flat(Infinity);

// console.log(real_another_array);

//.flat array er moddhe array thakle aitar jhamela komiye akta array er moddhe sob value niye ase. Infinity akta argument ja koto deppth porjonto array er jhamela komabe ta bole dey aikhane 2,3,4 ja iccha daoya jabe.

// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh"));

let string = "It is beautiful";

let array = Array.from(string);
console.log(array);
console.log(Array.from({ name: "Hitesh" })); // Interesting
