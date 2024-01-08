/* In this session cover Topic are:-
  1.simple console.log
  2.variable 
  3.constants
  4.Datatype
  5.operater  

  */

// simple console program run
console.log("Hello i am  kartik !!!");
console.error("l am error");
console.warn("i am warn i  toid you ar be carefull !!")


//......................................................................................................................

// variables in js

// variable - let
// constants - const

let username="Kartik shah"
const password="1234"
 
console.log(username)
console.log(password)

//......................................................................................................................

// In the javascript there are two type of  datatype

//Primitive  (STACK).............................................................

/*
string
Number
Boolean
Null
Undefined
Symbol
Bigint

*/

const firstname ="Kartik"
let age = 20
const score = 200.21
let islogin = true
const nodeversion =null
let Bankbalance = undefined
const buttonid = Symbol("id")
const LongerNum = 6086168458467

//Reference ( Non-primitive ) - objects (HEAP)...................................

/*

Arrays
objects
Function

*/

//Arrays
const number =[1,2,3,4,5,6,7]     

const heros = [
    "superhero",
    "batman",
    "flase"
]

//objects

const userobject ={
    name:"kartik",
    age:20,
    Loggin:true
    
}

//Function

const sayHello =function(){
    console.log("Hello user")
}

const registerUser =function(){}
const logginUser =function(){}

// Arithmatic operators.......................................................................................................................

// 5+5
// 10-5
// 5*5
// 10/2

const numberone = 10
const numbertwo = 5

const numberthree= numberone + numbertwo
console.log("Addition is",numberthree)

//Assignment operaters
let valuetwo = 3
 valuetwo += 10

 // comparision operators

 let pw = 3
 let pwskills =3
 console.log(pw==pwskills)

