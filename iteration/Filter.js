const nums = [1, 2, 3, 4, 5, 6];

// Using filter to get even numbers
const evenNums = nums.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers: ", evenNums); // Output: [2, 4, 6]