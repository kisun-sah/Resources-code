// In the class we Explain more about the loop and condition.
/**
 * for loop
 * while loop
 * do while loop
 * switch case
 */



// while loop in js..........
// when the user want to print 1 to 10 prime number using while loop.


let i = 1;
while (i<=10) {    // condition

    console.log(i); // print the value of i 

    //i++;          // That are the update or incriment
    i = i +1   // That are the update or incriment

}
console.log("End");




// for  loop in js..........
// when the user want to print 1 to 10 prime number using for loop.

let A  = 1;

for(A=1;A<=10;A++){

    console.log(A);
  

}
console.log("End");

//Qusetion --> print the first 20 natural no. in reverse order using for loop.

for(let i = 20; i>=1; i--){
    console.log(i);

}
console.log("End of the Reverse order using the for loop");


//Qusetion --> print the first 20 natural no. in reverse order using while loop.

let N = 20;
while(N>=1){
    console.log(N);
    N--;
}
console.log("End of the Reverse order using while loop");

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


let total_row= 5;
for (let i =1; i<=total_row;i++) {

    for(let j= 1; j<=i;j++){
 Process.stdout.write("*")
    }
    console.log();
    
}
/**
 * output of the following code
 *  *
 *  ** 
 *  ***
 *  ****
 *  *****
 */

//................................................................................................


let n = 5;
for (let i =1; i<=n;i++) {

    for(let j= 1; j<=n;j++){
 Process.stdout.write("*")
    }
    console.log();
    
}
/**
 * output of the following code
 *  *****
 *  ***** 
 *  *****
 *  *****
 *  *****
 */


//....................................................................................................

let x= 5123;
let sum =0;
while (x>0) {  //condition
    let lastdigit = x%10;
    sum +=lastdigit;
    //remove the last digits
    x = Math.floor(x/10);
}
console.log(sum);

//..............................................................................................................


let arr = [1,2,3,4,5];

for(let i=0; i < arr.length ; i++){
    if(arr[i] % 3 ==0){
        //if the number is division by 3
        break;// break the statement.
    }
    console.log(arr[i] **2);
}


//...............................................................................................................

//Example switch case 

switch (10+3) {
    case 10:
        console.log("case 1");
        console.log(10);
        break;

        case 11:
            console.log("case 2");
            console.log(11);
            break;

         case 12:
            console.log("case 3");
            console.log(12);
           break;  // break of you out of case.

    default:
        console.log("case not match !!");
        break;
}

















