/*
*
* Do you remember we are discusses that function are first class citizen ?
*
* - That claimed that we can pass function as an argument.
*
*/


/**
 *  array - list of the number that we will get 
 * fn -  is a function  passed as an argument to the processArray function.
 * 
 * 
 */

function processArray(array , fn) {
    for(i=0; i< array.length;i++){

        console.log("index",i, "value",array[i],"return value of fn " , fn(array[i]));
        
        //i - index , array[i] - value at the index , fn(array[i]) - it will pass array array[i] as argument
        //fn(arrat[i]) -  
        // 1. we are calling fn
        // 2. Argument passed to call fn is arrat[i]
        // 3. fn represents the function passed as gthe argument to procassArray
        //
        
    }
    
}

//processArray([1,2,3,4,5], function cube(x){return x*x*x;} );//passing function as an argument 

processArray([1,2,3,4,5], function square(x){return x*x;} );//passing  function as an argument



//............................................................................................................................................

//Returing function.

function fun(){
    console.log("calling the function fun");

    return function cleanUp(){
        console.log("cleaning up the resources");
    }
}

 const reult = fun() ;
 console.log(reult);
 reult(); //calling the eturn function

 //...........................................................................................................................................

 // IIFE(immediatly invoked function experission )

 let variable = 10; // global function
 function f() {

    console.log(variable);
    
 }
    f(); // calling the function.

//.................................................................................................................................................

//without_IIFE

function downloadscript() {
    //this was an old function
    console.log("old function implementation");
    
}

// more code 8000 lines
downloadscript();
// somewhere  between


// intern by mistake makes the same function

function downloadscript() {

    console.log("New function created");
    
}

//.......................................................................................................................................................

//life with IIFE example ..........


function downloadscript() {
    //this was an old function
    console.log("old function implementation");
    
}

// more code 8000 lines
downloadscript();
// somewhere  between


// intern by mistake makes the same function
// To solve this , we can wrap the whole intern's code that can break , into an IIFE
(function () {
    function downloadscript() {

        console.log("New function created");
                       }
        console.log("calling intern code");

        downloadscript();
        
    
    
})
();




//................................................................................................................................................


// example of that....

var x= 10;

//more code 8000 function.

console.log(x);

// somewhere between

//intern by mistake makes the same function

function f() {
    var x = 20;
    console.log(x);
    
}
f();
console.log("line no  146 :",x);


function square(x) {
    console.log("square of 100 :" , x*x);
}
 const result = square(10)













