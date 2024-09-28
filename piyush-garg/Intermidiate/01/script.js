const age = 22;

if(age >= 18){
    console.log("You can vote");
}
else{
    console.log("You cannot vote");
}

// ternary operator

const Age = 89;

Age >= 20 ? console.log('yes') : console.llog('no');


// switch case

let Option = 3;

switch(Option){
    case 1: console.log("one");
    break;
    case 2: console.log("two"); 
    break;
    case 3: console.log("three");
    break;
    default: console.log("default");    
}

// Examples of swwitch case;

let a  = 45;
let opt = '+';
let b = 33;

switch(opt){
    case '+' : console.log(a+b);
    break;
    case '-' : console.log(a-b);
    break;
    case '*' : console.log(a*b);
    break;
    case '/' : console.log(a/b);
    break;
    default: console.log("IDK");
}