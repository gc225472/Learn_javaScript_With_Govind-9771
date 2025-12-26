function one(){
    const username="govind";

function two(){
    const website = "www.govind.com";
    console.log(username);
}
//console.log(website);
two();
}

one()
// if we go out of scope then code give error
//console.log(username)
// just like in if else block
{
    let city = "delhi";
    console.log(city);
}
//console.log(city);
// for var keyword
{
    var country = "india";
    console.log(country);
}
console.log(country);// no error for var keyword
// because it is reintiallized globally
