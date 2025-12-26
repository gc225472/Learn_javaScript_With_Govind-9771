const myarr = [1, 2, 3, 4, 5, 'govind']; 
console.log(myarr);
console.log(typeof myarr);
const myArr2 = new Array(6, 7, 8, 9, 10);
console.log(myArr2);

/** for checking array or not */
console.log(Array.isArray(myarr));
console.log(Array.isArray('govind'));

/** copy operation on array create shallow copy */

const myHeros = ['shaktiman', 'nagraj', 'doga', 'bahubali'];
const mynewHeros = myHeros;

/** for adding new element at last */
myHeros.push('ironman');
console.log('myHeros:', myHeros);
console.log('mynewHeros:', mynewHeros);

/** for adding a new element at starting */
myHeros.unshift('superman');
console.log('myHeros after unshift:', myHeros);
/** searching */
console.log(myHeros.includes('doga'));

console.log(myHeros.indexOf('doga'));
/** for removing last element */
myHeros.pop();
console.log('after pop myHeros:', myHeros);

/** for removing first element */
myHeros.shift();
console.log('after shift myHeros:', myHeros);

/** for reversing the array */
myHeros.reverse();
console.log('after reverse myHeros:', myHeros);

/** slice, splice */ 
const MyArr = [0,1,2,3,4]

console.log("a:", MyArr);
const Myarr1=MyArr.slice(1,3)
console.log(Myarr1);

console.log ("b:",MyArr); 
const Myarr2= MyArr.splice(1,3);
console.log ("c:",MyArr); 
 console.log(Myarr2);
/** in splice the portion of array is also remove from the main array*/