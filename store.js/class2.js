


/*
IN this class we disscus more thing about javascripts are as know :-
1.conversion
2.null&umbert 
3.Arrays
4.objects

() - parenthisesh
{} - curles breses
[] - spuire bracket

*/

//conversion in java 

let Bankblance ='100'
let BankbalanceinInt = Boolean(Bankblance)
let bankbalanceinInt = parseInt(Bankblance)

console.log( typeof Bankblance);
console.log(typeof BankbalanceinInt);
console.log(typeof  bankbalanceinInt);


// null & number undefined

console.log(5 + undefined)
console.log(5 + null)

const firstname ="kartik"
const lastname = "shah"

console.log(firstname + ' ' + lastname);
console.log('my firstname $ {firstname} is and my lastname is ${lastname}' )

//...............................................................................................

const username = new String('kartik shah')
console.log(username[4])
console.log('length',username.length)
console.log('charat',username.charAt(2))

//................................................................................................


let email ="kartik480@gmaqil.com"
console.log(email.trim())

let emailtwo = "kartik@.liva"
console.log(emailtwo.replace('kartik','kisu'))
console.log(emailtwo.toUpperCase())
console.log(emailtwo.toLowerCase())
console.log(emailtwo.includes('ka'))

//................................................................................................

const num= new Number (5.225)
console.log(num.toFixed(3))

const subscribers =100000
console.log(subscribers.toLocaleString())
console.log(Number.MAX_VALUE)

console.log(Math.floor(Math.random()*10))

//Arrays in javascript...............................................................................

const myArrays = [1,2,3,4,54,5,6,10,7,8,9]
console.log(myArrays)
console.log(myArrays.toString())


const Data = ['kartik',10.000,true,10,"shah"]
console.log(Data)
console.log(typeof Data)
console.log(Data.toString())


const dcHeros =["batman","superhero","flash"]
dcHeros.push("wonder women")
console.log(dcHeros)

const lasthero = dcHeros.pop()
console.log(dcHeros)

dcHeros.unshift("aquaman")
console.log(dcHeros);

console.log('slice',dcHeros.slice(1,2));
console.log('splice',dcHeros.splice(1,2));

//objects .........................................................................................

const user = {
    username:"kartik",
    name:"kisu",
    email:"kisu123@gmail.com",
    age:21,
    isAdmin:false, 
    isloggin:true,
    addresh:"jnk"
}

const anotheruser=user;

console.log(user)
console.log(user.age);
console.log(user['age']);
console.log(user.addresh);
console.log(anotheruser);
console.log(Object.keys(user));

