const accountId = 43211
let accountEmail = "mohit@gmail.com"
var accountPassword = "123432"
accountCity = "bhopal"

// accountId = 432 // this is not allowed!

accountEmail = "mohit@googl.com"
accountPassword = "123"
accountCity = "patna"
let accountState;

/*
prefer to not use 'var' 
because of issue in block scope and functional scope.

*/





console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

 