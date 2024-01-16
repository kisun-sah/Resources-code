// Function - {In the javascript function is execution of the block of code that are called by itself .}
/*
syntax of function

function name 0f the function(p1 p2 p3){

    // body

    //return output
}
call by function

*/






function calculationsquare(num) {
    // logic to calculate square of a value .
    let calculation = num *num;

    // return the object pf the square of a num

    return calculation
}

// function called

  let result=calculationsquare(10);
  console.log(result);

  console.log(calculationsquare(5));
  //....................................................................................

  function abcNumbers(a,b,c) {
    const  sumnum = a+b+c;

    return sumnum;
    
  }

 
  let  result2 =console.log(abcNumbers(42 ,52,6));

  //...........................................................................................
  //arguments_keywords.js

  function addNumbers() {

    //no parameters passed in the function

    console.log(arguments[0]);
    
  }
  addNumbers(9, 0 ,4,67)
  addNumbers(9, 0 ,7)
  addNumbers(94,67)
  addNumbers()
  addNumbers(9, 0)

  //............................................................................................................

  // function declaration and function expression.

  function name(params) {
    
  }

  // call stack ........................................................................

  function f1 (){
    console.log("inside.f1");

  }

  
  function f2 (){
    console.log("inside.f2");
    f1();
    return 7+8;

    }

  
  function f3 (){
    console.log("inside.f3");
    f2();
    return 5;
    
  }

  
  function f4 (){
    console.log("inside.f4");
     const x = 10;
     const y = f3();
     return x + y;
     
    
  }

  console.log("start");
  const reasult = f4();
  console.log(reasult);



  // function factorial ...................................................................

  function f(n) {
    if(n == 0) return 1 ;
    let result = n * f(n-1);
    return result;
    
  }

  console.log(f(3));

  
