// Suppose we are working on building an e-commerce website, then we need to get details from the registration form, which the user will fill for us. 

// Here comes concept of variables and constants

const accountId = 1445566
let accountEmail = "Riya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"   // Js is even safe to use this: don't prefer

let accountState  // print: undefined 

// accountId = 2   Error : const can't be modified
console.log(accountId)

// MODIFYING VALUES

accountEmail= "hello@gmail.com"
accountPassword = "345"
accountCity = "haldwani"


// console.log(accountEmail)
// console.log(accountPassword)   // LONG METHOD
// console.log(accountCity)

console.table([accountEmail, accountPassword, accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
