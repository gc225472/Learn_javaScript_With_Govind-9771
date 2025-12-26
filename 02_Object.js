const RegularUser = {
    email: "gc225472.com",
    FullName: {
UserName: {
   Firstname: "John Doe",
  LastName: "Smith"
       }
    }
}
console.log(RegularUser.email);
console.log(RegularUser.FullName.UserName.Firstname);
const obj1 = {1: "e",3:"r",2:"t"}
const obj2 = {4:"y",6:"u",5:"i"}
const newobj = {...obj1,...obj2}
console.log(newobj);
const obj3={ obj1,obj2}
console.log(obj3);