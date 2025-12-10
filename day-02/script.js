console.log("Hello, World!");
console.log("This is Day 2 from 21 Days of JavaScript!");


// Q1. Find the Maximum of Three Numbers
// Input: 10 20 5
// Output: 20

function findMax(a,b,c){
    if(a>=b && a>=c){
        console.log(a + " is the largest number among " + a + ", " + b + ", and " + c);
    }
    else if(b>=a && b>=c){
        console.log(b + " is the largest number among " + a + ", " + b + ", and " + c);
    }
    else{
        console.log(c + " is the largest number among " + a + ", " + b + ", and " + c);
    }
}

findMax(10, 20, 5);

// Q2. Check if a Number is Positive, Negative, or Zero
// Input: -9
// Output: Negative 

function checkNumberType(num){
    if(num > 0){
        console.log(num + " is a Positive Number");
    }
    else if(num < 0){
        console.log(num + " is a Negative Number");
    }
    else{
        console.log("The number is Zero");
    }
}

checkNumberType(10);
checkNumberType(-5);
checkNumberType(0);


