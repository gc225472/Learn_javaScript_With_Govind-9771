//For...in Loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for(const key in person) {
    console.log(key + ": " + person[key]);
}

//For...of Loop
const colors = ["Red", "Green", "Blue"];
for(const color of colors) {
    console.log(color);
}
//map method
const map= new Map();
map.set(1, "One");
map.set(2, "Two");
map.set(3, "Three");

for(const [key, value] of map) {
    console.log(key + ": " + value);
}
