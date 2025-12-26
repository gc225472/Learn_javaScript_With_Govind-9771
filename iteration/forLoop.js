//For
const array = [1, 2, 3, 4, 5];
for(let index=0;index<Array.length;index++) {
   const element = array[index];
   console.log(element);
}
//break snd continue
for(let index=0;index<array.length;index++) {
    const element = array[index];
    if(element === 3) {
        break; // it will exit the loop when element is 3
    }
    console.log(element);
 }

 for(let index=0;index<array.length;index++) {
    const element = array[index];
    if(element === 3) {
        continue; // it will skip the iteration when element is 3
    }
    console.log(element);
 }

//Nested For Loop
for(let i=1;i<=3;i++) {
    console.log("Outer Loop: " + i);
    for(let j=1;j<=2;j++) {
        console.log("  Inner Loop: " + j);
    }
}

