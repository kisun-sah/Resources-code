/*
In this JS we learn more as follow :-
1.login system
2. loop statement
3.for loop 
4. & many more

*/

// Login system

const email = "kartik512@gmail.com"

// if email is present , ask for password otherwise ask for email

if(email == "kartik512@gmail.com"){
    console.log("Please enter your password");
}
else{
    console.log("please enter your email");
}


if(email != ""){
    console.log("Please enter your password");
}
else{
    console.log("please enter your email");
}

console.log(Boolean(email));

//..........................................................................
// if user provide a email , password then allow login ,else ask for it.

const Email = "kartik512@gmail.com"
const Password = "1433545"

if(Email){
    if(Password){
        console.log("You'r allow to loggin ");
    }
    else{
        console.log("Enter your password");
    }
}
else{
    console.log("please Enter you'r your Email");

}

// Logical operater.
//&& -> and  : || => or
if(email && password){
    console.log("you'r allow to login");
}
else {
    console.log("please enter you'r your email and password");
}


// alow user to singin with google or github

const googlelogintoken =""
const githublogintoken =""
if(googlelogintoken || githublogintoken){
    console.log("Welcome to the app");
}
else{
    console.log("plsase login to view your account");
}

// example 

let  age =19

if(age >= 18){
    console.log("You are allow to get a driving license ");

}
else{
    console.log("you are not eligible for driving licenas!!");
}

//...............................................................................................

/* loop statement
for loop syntax
for([initialExperssion / declaraction]; [condition]; [changer] )
body


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

for(let userscore = 1; userscore <= 10; userscore )
{
    console.log(`userscore is ${userscore}`);

}


 let  userScore=10;
 const minvalue = 1;

 // if score hit less than 5 don't print.

 for( userScore ; userScore >= minvalue; userScore = userScore - 1 )
{
    console.log(`userscore is ${userScore}`);
    if (userScore == 5) {
        break ;
        
    }
       
}

// Using a for loop
for (let i = 1; i <= 10; i++) {
    console.log("YourName is Kartik shah");
}


