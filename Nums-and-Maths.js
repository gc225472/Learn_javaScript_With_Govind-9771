const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);

/** number of digit after the decimal point */
console.log(balance.toFixed(2));

/** number of significant digit */
const othernumber = 123.123456
console.log(balance.toPrecision(3));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

/** for converting string to number */
const mystr = "100.567"
console.log(Number(mystr));
console.log(parseFloat(mystr));
console.log(parseInt(mystr));

// ++++++++++++++++Maths +++++++++++++++++++
console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(2,3,4,5,-1,0));
console.log(Math.max(2,3,4,5,-1,0));
console.log(Math.random());

/** for generating random number between two numbers */
console.log(Math.floor(Math.random() * 10) + 1); // between 1 to 10
console.log(Math.floor(Math.random() * 100) + 1); // between 1 to 100

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // between 10 to 20