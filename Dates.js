let myDate = new Date('2023-10-05T14:48:00');
 console.log(myDate);

 console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());

 console.log(myDate.getFullYear());
 console.log(myDate.getMonth()); // 0-indexed
 console.log(myDate.getDate());
 console.log(myDate.getDay()); // 0 (Sunday) to 6 (Saturday)
 console.log(myDate.getHours());
 console.log(myDate.getMinutes());
 console.log(myDate.getSeconds());
 console.log(myDate.getTime());
/**  for convert it into second */
console.log(Math.floor(myDate.now()/1000));

console.log(myDate.getTime());
// let myTimeStamp =Date.now();
// console.log(myTimeStamp);