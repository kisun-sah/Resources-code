/**
 * Async 
 * We can so more example of the  Async & used timeout function 
 */

//sync programming using the for loop 
console.log("Hey there !!");

console.log("starting to execute ");

for (let i = 0; i < 10000000000; i++) {

   // it's will consume  sometime 
    
}

console.log("End !!");


//...........................................................................................................................

// we make Async programming using the set time function 

console.log("Hey there !!");

console.log("starting to execute ");

setTimeout(() => {
    console.log("Working to execute");
    
}, 5000);//5000 ms , set timeout will execute the callback after 5000ms = 5 sec

console.log("End !!");

//.............................................................................................................................

console.log("Starting the Execution ");  //print 1st 

for(let i=0; i<10000000000;i++){} //it's will take about 7 sec time

console.log("starting time"); // then print this

setTimeout(() => {

    console.log("work from set timeout"); //it's will take 5 sec and print this last 
    
}, 5000);

console.log("Time triggered");     //3td print this function 

//............................................................................................................................

for(let i=0; i<1000000000;i++){
      //some work 
}
      
for(let i=0; i<100000000;i++){
    //some more work 
}
       
console.log("starting timer 1");
setTimeout(() => {
    console.log("timer 1 done");
    
}, 20000);

console.log("starting timer 2");
setTimeout(() => {
    console.log("timer 2 done");
    
}, 0);


for(let i=0; i<20;i++){
      //some more work 
}
     


console.log("starting timer 3");
setTimeout(() => {
    console.log("timer 3 done");
    
}, 100);

 // End here

 //..................................................................................
 //it's function take near 5 sec 
 function blockingcodeForMoreThanASec() {

    for(let i = 0; i <1000000000 ; i++){
         
        // some task 
    }
    
 }

 let x =10 ;

 setTimeout(() => {
    console.log("Timer 1 done");
    
 }, 5000);

 blockingcodeForMoreThanASec();
 setTimeout(() => {

    console.log("Timer 2 done");
    
 }, 3000);

 setTimeout(() => {

    blockingcodeForMoreThanASec();
    x ++;
    console.log("Timer 3 done");
    
 }, 100);

 blockingcodeForMoreThanASec();
 console.log(x);

