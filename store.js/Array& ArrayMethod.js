// In this class we disscus in the Array 

//How can we create a array in the JS

let x=[] // pair of squire bracket 

// this avobe code initialized  as empty array
console.log(x);

//................................................................................
 let arr = [18 , "kartik",null, undefined , false ,10.0129348]
// ther above code initialised in the default value
 console.log(arr);
 




//....................................................................................


let array = Array(15);

console.log(array);

//length of an array
console.log(array.length);

//...........................................................................

let arrwithAll0 = Array(20).fill(0);

console.log(arrwithAll0);

let arrwithdata = Array(20).fill(-1,3,6)

console.log(arrwithdata);

//............................................................................

let z = [1,2,3,4,5,6,7,8,9];
//index  o,1,2,3,4,5,6,7,8

// get value at a particular index --> name of array [index_you _want_to_access]
console.log(z[6], z[7]);

// Update an index 

//arrayname[index]=value

z[4]=56; // update the index 4

console.log(z);

//......................................................................................................

// if we have an array empty or having some values we can add more value to it. 

let arr1 = [3,4,5,6,7]

console.log(arr1); // print the value of array

arr1.push(10);
console.log(arr1);//it add 10 the last of the array

arr1.unshift(-1);
console.log(arr1);  // it's add -1 to the start of the array 

arr1.pop(10)
console.log(arr1); // it's remove 10 from the array



//remove element at the start , at the 0 th index
arr1.shift()
console.log(arr1);


//......................................................................................................
//......................................................................................................

// Array method 

/**
 * 1. slice -- given an array and you want continous segment of array them
 *  you can use slice
 * arr -[10,20,30,40,50,60,70]
 * 
 * index-0, 1, 2, 3, 4, 5, 6  
 * 
 *      -7,-6,-5,-4,-3,-2,-1
 */

let arr2 = [10,20,30,40,50,60,70];

console.log(arr2.slice(1,4)); // segment from the index [1,4)

console.log(arr2.slice(-4 ,-2)); // [-4 ,-2) 

console.log(arr2.slice(-2,4)); // you get an emt array like this []

console.log(arr2.slice(-1,-3)); // you get an emt array like this []



/**
 * Reverse  function in Array
 * --> this reversed of an array
 * Example
 *  */

let arr3 = [1,2,3,45,6,45,67,8,5]
arr3.reverse()

console.log(arr3);

/**
 * Joint function in array
 * --> it combine of an array into a string
 */

let result = arr3.join(); //default segment between element be come
console.log(result);

let result1  = arr3.join("  ")
console.log(result1);

/** 
 * delete
 */

let arr4 = [12,13,14,15,16,17 ]

delete arr4[1] // In this array 1th index value 13 is delete

console.log(arr4);

/**
 * splice
 * 
 * 
 */

let arr5 = [10,13,133,35,5,76,67,9,89,3]

console.log(arr5);

const result2 = arr5.splice(3,5)  // from index 1 to 3 elements to the right 
console.log("Returned value",result2);
console.log(arr5);

arr5.splice(2) //it's  add number of the index value  

console.log(arr5);


//...............................................................................................................................

// Array method 2

let arr6 = [1,2,3,4,5,6,7,8,9];

for(let i =0 ; i<arr6.length;i++){
    console.log("Element at index",i,"is", arr6[i]);
}

/**
 * foreach gives to every of the array , and executed the given callback at the element
 * 
 * 
 */




let arr7 = [1,2,3,4,5,6,7,8,9];
arr7.forEach(element => {
    console.log("element is",element);
});


/**
 * Implement your own  dummy customforeach 
 * 
 * function customforeach (arr8  ,cb)
 * //it applies the cb to every element 
 */

function customforeach (arr8 ,cb ){

    for (let i = 0; i < arr8.length; i++) {
        // now we have the cb to every index and element of and array 
        cb ( arr8[i],i);
        
    }

}
customforeach([1,2,3],(element,ibx) => {
    console.log("Element at index",ibx,"is",element);
});// explain of  how you will call you function

 

   function sum() {
    console.log("Hello !!");
    return 4+4;
   
    
   }

   function sqr() {
    console.log("Hello world!!");
    return "kartik";
   
    
   }

   let res = (sum(),sqr())
   console.log(res);




