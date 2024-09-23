var employid = 'abc';
function foo(){
    employid = '123';
    return;
}

function employid(){
    {}
}
foo();
console.log(employid);