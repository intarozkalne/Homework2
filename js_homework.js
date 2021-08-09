// 1. Write a JavaScript function which accepts an argument and returns the type.

/* function returnType(argument){
    let type = typeof(argument);
    return type;
}

let type = returnType("tiger");
alert(type);
type = returnType(10);
alert(type); */

// 2. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 

/* function isPrime(number){
    let prime = true
    if (number > 1 && typeof(number==Number)){
        for(let i=2; i < number; i++){
            if (number % i == 0){
            prime = false
            break
            }
        }
    }
    
    if (prime){
        alert(number + " is prime");
    }else{
        alert(number + " is not prime")
    }
    return prime; //šo vajag vai nē?
}
    
isPrime(33); */


//3. Write a JavaScript function to convert an amount to small coins.
//Note: Coins are 1,2,5,10,20,50

/*function convertToAmount (amount){
    let restOf50 = amount % 50;
    let restOf20 = restOf50 % 20;
    let restOf10 = restOf20 % 10;
    let restOf5 = restOf10 % 5;
    let restOf2 = restOf5 % 2;

    console.info (Math.floor(amount/50) + "x50;" + 
        Math.floor(restOf50/20) + "x20;" +
        Math.floor(restOf20/10) + "x10;" +
        Math.floor(restOf10/5) + "x5;" +
        Math.floor(restOf5/2) + "x2;" +
        restOf2 + "x1"
        )
}

convertToAmount(48);*/

//4. Write a JavaScript program to get the integers in range (x, y)

/* function getIntegers(x,y){
    let integers = [];
    for (let i = x + 1; i < y; i++){
        alert(i)
           }
    return integers
}
getIntegers(2,9); */



// 5. Write a JavaScript program that accept three integers and display the larger

/* function getLargerInt (x,y,z){
    if (x > y && x > z){
        alert(x + " is the largest")
    }else if (y > x && y > z){
        alert (y + " is the largest")
    }else{
        alert(z + " is the largest")
    }
}
getLargerInt(7,5,9); */

/* 6. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
Sample numbers : 3, -7, 2
Output: The sign is -*/

/* let x = 3;
let y = -7;
let z = 2;

if (x < 0 && y < 0 && z < 0){
    alert("The sign is -");
}else if (x < 0 && y > 0 && z > 0){
    alert("The sign is -");
}else if (x > 0 && y < 0 && z > 0){
    alert("The sign is -");
}else if(x > 0 && y > 0 && z < 0){
    alert("The sign is -");
}else{
    alert("The sign is +");
} */
