// // high order function.

// function add(a,b , cb){
//     let result = a+ b;
//     cb(result);
// }
// add(10, 39 , function(val){
//  console.log(val);
// });
// callback function.
// array.

// const students = ['mohit', 'piyush', 'rohit', 'vipin', 'ankit', 'jatin', 'aniket'];
// students.reverse()
// // console.log(students);
// students.forEach((val) => console.log(val+" is a student."));


// arrays in javascript are hetrogeneous so we can store different types of data in an array.


// .map

const number = [1,2,3,4,5,6,7,8,9,10,11];

// function double(n){
//     return n*2;
// }

// let newarr = Number.map(double);
// console.log(newarr);

// find function

let ans =number.find((num) => num === 6);

console.log(ans);