const user = {
    username: "govind",
    welcomeMessage: function(){
        console.log(`Welcome ${this.username} to the JavaScript world`);
console.log(this )
    }
}
user.welcomeMessage();
user.username = "singh";
user.welcomeMessage();

// function chai(){
//   let username = "govind";
//   console.log(this.username);  
//  }
//chai();

const chai = () => {//arrow function
  let username = "govinda";
  console.log(this);  
 }
chai();

// const addTwoNumber = (num1,num2) => {
//     return num1 + num2;
// }

//paranthesis can be omitted for single parameter
const addTwoNumbers = (num1, num2) => (num1 + num2);
console.log(addTwoNumbers(3, 4));
