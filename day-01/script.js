console.log("Hello, World!");
console.log("This is Day 1 from 21 Days of JavaScript!");

// Q1. Print Numbers from 1 to N
// Input: 5
// Output: 1 2 3 4 5

function printNumbers(N){
    for(let i=0 ; i<N ; i++){
        console.log(i+1);
    }
}

printNumbers(5);

// Q2. Print Numbers from N to 1 without changing the loop condition of above question
// Input: 5 
// Output: 5 4 3 2 1

function printNumbersReverse(N){
    for(let i=0 ; i<N ; i++){
        console.log(N - i);
    }
}

printNumbersReverse(5);

// Q3. Print All Even Numbers from 1 to N
// Input: 10
// Output: 2 4 6 8 10


function printAllEvenNumbers(N){
    for(let i=1 ; i<=N ; i++){
        if(i%2 === 0){
            console.log(i);
        }
    }
}

printAllEvenNumbers(10);

// Q4. Sum of First N Natural Numbers
// Input: 5
// Output: 15

function sumOfAllNumbers(N){
    let sum = 0;
    for(let i=1 ; i<=N ; i++){
        sum+=i;
    }
    console.log("Sum of all numbers from 1 to " + N + " is: " + sum);
}

sumOfAllNumbers(5);

// Q5. Product (Factorial) of N
// Input: 5
// Output: 120

function factorialOfNumber(N){
    let factorial = 1;
    for(let i=1 ; i<=N ; i++){
        factorial *= i;
    }
    console.log("Factorial of " + N + " is: " + factorial);
}

factorialOfNumber(5);


// Q6. Sum of All Even Numbers from 1 to N
// Input: 10
// Output: 30

function sumOfEvenNumbers(N){
    let sum = 0;
    for(let i=1 ; i<=N ; i++){
        if(i%2 ===0){
            sum += i;
        }       
    }
    console.log("Sum of all even numbers from 1 to " + N + " is: " + sum);
}

sumOfEvenNumbers(10);

// Q7. Print Squares of Numbers from 1 to N
// Input: 5
// Output: 1 4 9 16 25

function squareOfNumbers(N){
    for (let i=0;i<=N;i++){
        console.log("Square of " + i + " is: " + (i*i));
    }
}

squareOfNumbers(5);

// Q8. Print all numbers divisible by 3 and 5 up to N
// Input: 30
// Output: 15 30

function divisbleBy3And5(N){
    for(let i=1 ; i<=N ; i++){
        if(i%3 === 0 && i%5 === 0){
            console.log(i);
        }       
    }
}
divisbleBy3And5(30);


// Q9. Sum of All Odd Numbers from 1 to N
// Input: 10
// Output: 25 (1 + 3 + 5 + 7 + 9)

function sumOfOddNumbers(N){
    let sum = 0;
    for(let i=1 ; i<=N ; i++){
        if(i%2 !== 0){
            sum += i;
        }       
    }
    console.log("Sum of all odd numbers from 1 to " + N + " is: " + sum);
}

sumOfOddNumbers(10);


// Q10. Print Cubes of Numbers from 1 to N
// Input: 5
// Output: 1 8 27 64 125

function cubeOfNumbers(N){
    for (let i=0;i<=N;i++){
        console.log("Cube of " + i + " is: " + (i*i*i));
    }
}

cubeOfNumbers(5);

// Q11. Print only the numbers that are both even and perfect squares
// Input: 1 to 20
// Output: 4 16


function printEvenNumbersAndPerfectSquares(N){
    for(let i=1 ; i<=N ; i++){
        if(i%2 === 0 && Number.isInteger(Math.sqrt(i))){
            console.log(i);
        }
    }
}

printEvenNumbersAndPerfectSquares(20);