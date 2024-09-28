// ARROW FUNCTION.

//syntax
 
const sayHello = () => {
    console.log("Hello!");
}
sayHello();

const addNumbers = (a, b) =>  a + b;
console.log(addNumbers(10, 20));

////////////////////
// 'arguments' keyword.
const numbers = (...nums) => {
    console.log(nums);
 }
 numbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

 // hoisting.
   SayHey();
    function SayHey(){
     console.log("hey");
 }

 /// this keyword.

 const obj = {
    value: 54,
    Myfunction:() => {
        console.log(this);
    },
 }
 obj.Myfunction();