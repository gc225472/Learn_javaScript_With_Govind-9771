/** array take any type of data type */
const marvel_heroes = ['thor', 'ironman', 'spiderman', 'hulk']
const dc_heroes = ['batman', 'superman', 'flash', 'aquaman']
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[4][1]);

//spreading operator
const all_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_heroes);

const AnotherArray = [1,2,3,[4,5,[66,6]],[7,8,9]]
const real_AnotherArray= AnotherArray.flat(Infinity)
console.log(real_AnotherArray);

//for making array from string
console.log(Array.from('govind'));
