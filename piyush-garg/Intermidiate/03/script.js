//LOOPS

// for loop

// for loop =====>  for loop is used whe you know the number of times you want to execute a block of code.

// for(let i = 1; i<=10; i = i+1){
//     console.log('Mohit' + i);
// }

// while loop
// while loop is used when you don't know the number of times you want to execute a block of code.

// let ip = 0;
// let home = 100;

// while(ip != home){
//     ip = ip + 1;
//     console.log('reached home' + ip);
// }


//do while loop

let ip = 90;
let home = 100;

do{
    ip = ip + 1;
    console.log('reached home' + ip);
}while(ip != home);



// let's make a game that you have to guess the numbers.

let guess = 0;
let number = 40;

do{
    guess = prompt('guess the number');
    if(guess == number){
        break;
        alert('you are right');
    }
}while(guess != number);