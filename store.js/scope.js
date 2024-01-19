// In this class we dipply disscus in the scope of javascript .
/**
 * 1. global scope
 * 2.local scope
 * internal scope
 * As we know the scope of the javasript
 */

//.............................................................................................................................

var teacher = "kartik shah";// global scope

function fun(){   //global scope
    var teacher ="salu shiple"   //that are fun scope
    console.log("Hello !! :",teacher); // this console print the teacher name
}
function gun() {   // this are also a global scope

    var student  = "kisu sah"   // this are a gun scope
    console.log("Welcome to class my student :",student );
    
}
fun();   // calling the fun function 
gun();   // calling the gun function

console.log(teacher);

//.....................................................................................................................................



 var teacher = "kartik shah";  // global scope

 function fun(){      // global scope
    contant = "js"
    var teacher ="salu shiple"   //that are fun scope
    console.log("Teacher",teacher);
 }
 function gun() {    // global scope

    var student  = "kisu sah"   //that are gun scope
    console.log("Welcome to class my student :",student ,", Teacher for your class :",teacher);
    
 }
   fun();   // calling the fun function 
   gun();     // calling the gun function 
   console.log(contant);

   //.............................................................................................................................................


   var teacher = "kartik shah";  // global scope

   function fun(){      // global scope
      contant = "js"
      var teacher ="salu shiple"   //that are fun scope
      console.log("Teacher",teacher);
   }
   function gun() {    // global scope
  
      var student  = "kisu sah"   //that are gun scope
      console.log("Welcome to class my student :",student ,", Teacher for your class :",teacher);
      
   }
     //console.log(teacher,contant);   ---> in this line teacher print , and contant get error contain not defined 

     fun();   // calling the fun function 
     gun();     // calling the gun function
     
     
     console.log(teacher,contant);

     //....................................................................................................................................................
      // using st

      "using strigh";
     var teacher = "kartik shah";  // global scope

     function fun(){      // global scope
        contant = "js"
        var teacher ="salu shiple"   //that are fun scope
        console.log("Teacher",teacher);
     }
     function gun() {    // global scope
    
        var student  = "kisu sah"   //that are gun scope
        console.log("Welcome to class my student :",student ,", Teacher for your class :",teacher);
        
     }
       //console.log(teacher,contant);   ---> in this line teacher print , and contant get error contain not defined 
  
       fun();   // calling the fun function 
       gun();     // calling the gun function
       
       
       console.log(teacher,contant);

       //...............................................................................................................................................

       function fun() {
        console.log(x); // in this line print undefined 

        var x ="10"
        console.log(x); //its print value of x is :10
        
       }
       fun();

       //.........................................................................................................................................................

       function fun() {
        console.log(x); //TDZ for x
        
        let x ="10" // in this line get error due to 'let' is spacial scope 
        console.log(x); //TDZ for x
        
       }
       fun();

       function fun() {
        console.log(x); //TDZ for x
        
        const x ="10" // in this line get error due to 'const' is spacial scope 
        console.log(x); //TDZ for x
        
       }
       fun();
