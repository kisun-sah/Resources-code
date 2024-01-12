/* In this JS we learn Below the topic as follow:-

1. if statement
2. if-else statement
3. switch statement 
4. & all statement example

*/

let temperature = 26

if (temperature < 20){
    //body - executable code

    console.log("it's really cold");

}
else{

    console.log("it's really HOT");

}

console.log("pw skill's");



//...............................................................


// const score = 99


// //avobe 99, you get a life up
// //below that you don't get it 

// //A welcome message to game 

// console.log("Welcome to the pw skill");

// if (score < 100){
//     console.log("you gained a life");
// }
// else{
//     console.log("you can't gained a life");
// }


//..............................................................


let score = 110
let life = 3
let bullets = 1000

console.log("Welcome to the pw skill");

if (score > 100){
    console.log("you gained a life");
    score =score -100
    life = life+1
    let bullets = 2000 
    console.log(`your bullets ${bullets}`);


}
else{
    console.log("you can't gained a life");
}
console.log(`your score is ${score} an my life is ${life} and your bullets ${bullets}`);


//'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

 let balance = 500;

 if(balance > 100){
    console.log("you'r balance is above than 100");
 }
 else{
    console.log("your balance is less than 100");
 }

 //..................................................................

//Build a rating system for pizzahut 
// 1 star - poor 
// 2 star - emm,ok
// 3 star - average
//4 star - cool 
//5 star - great
//6 star - awasome
//7 star - nailed it

let getStarFromUser = "3"
let starInNumber = parseInt(getStarFromUser)

if(starInNumber == 1){
    console.log("poor");
}
else if(starInNumber == 2){
    console.log("emm,ok");
}
else if(starInNumber == 3){
    console.log("average");
}
else if(starInNumber == 4){
    console.log("cool");

}
else if(starInNumber == 5){
    console.log("great");
}
else if(starInNumber == 6){
    console.log("awasome");
}
else if(starInNumber == 7){
    console.log("nailed it !!!!");
}
else{
    console.log("i don't know that rating  !!!");
}

// switch statement ......................................................

/*
switch statements syntax
switch (experssin){
    case value1:
        statement1;
        statement2;
        break;

        case value2:
            statement3;
            statement4;
            break;
}


*/ 

let getStarFromRealUser = "4"
let starInaNumber = parseInt(getStarFromRealUser)

switch (starInaNumber) {
    case 1:

    console.log("poor");
                 break;


        case 2:
     console.log("emm,ok");
                   break;

      case 3:
       console.log("average");
                  break;

     case 4:
   console.log("cool");
            // break;
                   
     case 5:
      console.log("great");
                // break;

     case 6:
    console.log("awasome");
                            
                     break;
     case 7:
   console.log("Nailed it !!");
                                
                         break;

    default:

    console.log("I don't know about the rating");
        break;
}
