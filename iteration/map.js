//map
const mynumbers = [1, 2, 3, 4, 5];

const squaredNumbers = mynumbers.map(function(num) {
    return num * num;
});
//callback function is applied to each element of the array
console.log("Squared Numbers: ", squaredNumbers); // Output: [1, 4, 9, 16, 25]

const Mynumber = mynumbers
                 .map((num) => num + 10)
                 .map((num) => num * 2)

console.log("Transformed Numbers: ", Mynumber); // Output: [22, 24, 26, 28, 30

// Reduce
const sum = mynumbers.reduce(function(accumulator, currentValue) {
    //console.log('acc: ${accumulator}, curr: ${currentValue}');
    return accumulator + currentValue;
}, 0); // 0 is the initial value for the accumulator

console.log("Sum of Numbers: ", sum); // Output: 15