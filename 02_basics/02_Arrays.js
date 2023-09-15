const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

const allHeroes = marvel_heroes.concat(dc_heroes) //--> Merges both arrays
console.log(allHeroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // --> Spread operator
console.log(all_new_heroes);   // --> It also merges both arrays


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // -->> Every subarrays into a single array
console.log(real_another_array);



console.log(Array.isArray("Pranav"))
console.log(Array.from("Pranav"));  //-->> Array me convert kr dega directly

console.log(Array.from({name: "Pranav"}));  // -->>  empty array dega kyuki isko btana pdega ki kisko change krna h key ko ki uske value ko.!

let score = 100
let score2 = 200
let score3 = 300

console.log(Array.from(score, score2, score3)); // -->> "array.of" se hm array me bdl skte hain different variables ko


