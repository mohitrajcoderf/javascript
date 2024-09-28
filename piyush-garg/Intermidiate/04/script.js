// Function.

function sayHello() {
  console.log("Hey Mohit!");
}
sayHello();   // calling the function.

// Function with parameters.

function add(num1, num2) {
  console.log(num1 + num2);
}
add(30, 48);
add(23, 31);

// new function.

function multiply(a, b) {
  let ans = a * b;
  return ans;
}
let a = multiply(29, 33);
console.log('the ans of this is', a);



// function assignment.

function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i=i+1) {
    ans = ans + arguments[i];
  }
  return ans;
}
let result = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);
