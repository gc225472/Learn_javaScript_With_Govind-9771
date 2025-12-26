const userEmail = "user@example.com"

if(userEmail) {  
    // it means if email is got then true otherwise false
    console.log("Email is defined")
} else {
    console.log("Email is not defined")
}
// if object is empty then use
const user = {}

if(Object.keys(user).length === 0) {
    console.log("User object is empty")
} else {
    console.log("User object is not empty")
}

let val1;
//val1 = 5 ?? 2
val1 = null ?? 2
console.log(val1) // it will return 2 because val1 is null

//Terary operator
const age = 17
const canDrive = age >= 18 ? "Can Drive" : "Cannot Drive"
console.log(canDrive)