function sayName(){
    console.log("Govind Singh");
}
sayName()
 function addNum(num1, num2){
    return num1 + num2;
}
const result = addNum(5,10);
console.log(result);
// function with conditions
function userNanme(username){
    if(username==undefined){
        console.log("Username is required");
        return; 
    }
    console.log("Username is:", username);
}
userNanme();
userNanme("govind");
//rest opreator
function calculateCostPrice(...nums){
    return nums
}
console.log(calculateCostPrice(100,200,300,400,500));

// with some other parameter
function calculateCostPrice1(val1,val2,...nums){
    return nums
}
console.log(calculateCostPrice1(100,200,300,400,500));
