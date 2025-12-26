// for ecch loop
const array = [1, 2, 3, 4, 5];
array.forEach(function(element) {// callback function
    console.log(element);
});

//break and continue are not applicable in forEach loop

//Nested forEach loop
const outerArray = [1, 2, 3];
const innerArray = ['A', 'B'];
outerArray.forEach(function(outerElement) {
    console.log("Outer Element: " + outerElement);
    innerArray.forEach(function(innerElement) {
        console.log("  Inner Element: " + innerElement);
    });
});
