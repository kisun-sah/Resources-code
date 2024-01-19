
//In this  class Explain the most lambda function and some important library  math library in js

//The major difference between let and var exis around the scoping mechainsm

// let and cost support block scope , if block scope not present then global scope
// var support function scope , and if function scope not present then global scope

//let and const support TDZ
//var doesn't support TDZ


//Differences between let and const
//Ressignment

//variables declared with let and reassignable
//const an the other hand is not

function letReassignment() {
    let x = "10"
    console.log(x);  //print value 10

     x = "kartik"
     console.log(x); // print value kartik
    
}
letReassigment();
//............................


function constReassignment() {
    const x = "10"
    console.log(x);// print value 10

     x = "kartik"
     console.log(x); // but in this case  throw the error, because "x is a const value"
    
}
constReassigment();

//.......................................................................................................

function  constReassignmentwithObjects(){
    const obj = {x:10 , y:20};
    console.log(obj);
    obj = {a:5}; // reassignment to a brand new object // throw an error
}
constReassignmentwithObjects();

//................................................................................................


function constUpdatingvalue() {
    const o = {x :100 , y : 0};
    o.x = 90; // this doesnot throw the error
    o.z = 99; 
    
    
}
constUpdatingvalue();

//.........................................................................................................

function temp(){
    const x = {a:10 ,b : 20};
    console.log(x);
    const y = x;
    y.a =99;
    console.log(y);
    console.log(x);
}
temp();

//......................................................................................................................................

// Library// 
//--> library is a predefined function 
//abs
// abs(positive_value) --> positive value
// abs(negative_value)  --> positive counterpart_of that negative value
// |x|--> Ex:|10|--> 10 , |-8|--> 8

console.log(Math.abs(-9));
console.log(Math.abs(8));
console.log(Math.round(4,5));

//float --> library
console.log(Math.floor(7.9));
console.log(Math.floor(9.7));

// max/min --> library

console.log(Math.max(7,9,3));
console.log(Math.min(9,4,3));



// square --> library
console.log(Math.sqrt(100));


// random --> library
console.log(Math.random()); // by default it returns a random real number between 0 - 1 

//..........................................................................................................................

// you will be given two values , x and y and you need to generate a random number 
// between x and y inclusive of x and y

/**
 * @param{x} lower_limit
 * @param{x} lower_limit
 * @return random number in the range [x ,y]
 */

function randomInRange(x ,y){ // 10 ,35 --> y-x+1 ==>35 - 10 +1 = 26
    
    return Math.random()+(y-x+1)+x; // [10,36]

    
}
console.log(randomInRange(10 ,35));

//..........................................................................................................................

//arrow_function 
//Lambda function --> Arrow function () ==> {}


function processArray(array , fn) {
    for(i=0; i< array.length;i++){

        console.log("index",i, "value",array[i],"return value of fn " , fn(array[i]));
        
      
    }
    
}

processArray([1,2,3,4,5], function square(x)       {return x*x;} );
