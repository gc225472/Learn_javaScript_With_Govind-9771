const jsUser = {
    name: "Govind Singh",
    age: 18,
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday", "Saturday"]
}
console.log(jsUser);

//console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser['age']);

// for permanetly changing
Object.freeze(jsUser.age);
jsUser.age = 20; // it will not change the age because object is freezed
console.log(jsUser.age);

//for making a function to change the object values
jsUser.greeting = function() {
    console.log("Hello Govind Singh");
}
jsUser.greeting();