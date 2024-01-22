//Number & Date

console.log(Number.MAX_VALUE); // + Infinity
console.log(Number.MIN_VALUE); //  Infinity

// convert a dicimal number to binary number .

const x = 13;
console.log(x.toString(2));// converts the number to a binary

console.log(x.toString(8));  // converts the number to a octal

// if you call tostring without an argument , then it just convertsthe  number to  a string

console.log(x.toString());

// to convert a binary to decimal 
// we have a function partseInt that takes a string representing the binary number
//and throw the decimal value of it.

console.log(parseInt("1101",2));
console.log(parseInt("15",8));



//The most interesting number of JS : NaN

//NaN --> Not a number



console.log(typeof NaN );


// precision of a number
const num = 10.5612345
console.log(num.toPrecision(4));

x = 10 ;
console.log(x.toString);
console.log(x);


// Zero 

const zero = 0;
const pos_zero = +0;
const ng_zero = -0;
console.log(zero,pos_zero,ng_zero);
console.log(zero == ng_zero);
console.log(zero===ng_zero);



//......................................................................................................................................

//Date related data 

const d = Date();
// The Date () function return a new date objects
console.log(d);

const dt = new Date();
console.log(dt);
console.log(dt.getDate()); // return curent day 
console.log(dt.getMonth());  // return a month  "0 --> Jan "
console.log(dt.getFullYear()); 
console.log(dt.getDay());  
console.log(dt.toDateString());  
console.log(dt.getMilliseconds());  
console.log(dt.getTime());  
console.log(dt.getHours());  




// intresting function 

const custom = new Date(2-9-2023);
console.log(custom.toDateString());

// a Big intiger as well  is present in JS

const y = 12345678999999999999999998766666666666543212670987654321345678998766666666666666;

console.log(y);// it 's only return a fload value because computer not store a big int.

//.........................................................................................................

const Q = 12345678999999999999999998766666666666543212670987654321345678998766666666666666n;

console.log(Q); // In this case print all  the big int number because "n " are used in the last of num

