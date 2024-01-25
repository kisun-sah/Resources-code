//.......................................................................................
/**
 * In this class we will  discuss mor eAdvance of the Array function method  let's on the topic
 * 
 * 1. ForEach array method               // using Example
 * 
 * 2. Map array method                  //using function or  more clear example
 * 
 * 3. Filter array method             // using function and moe example
 * 
 * 4. Reduce array method            // using function and real-lmplement example 
 * 
 * 5. Array-form method             // using function example
 * 
 */


const arr = [1,2,3,4,5]

const result = arr.forEach((element) => {

    console.log("Element iS",element);
   

});

console.log(result);

//.......................................................................................................................
/**
 * .1
 * 
 * Map function return us an array
 * Map function always retuen a new array
 * 
 */
const arr1 = [1,2,3,4,5]

const result1 = arr1.map((element) => {

    console.log("Element iS",element);
    return element*element;

});

console.log(result1);//  this is a new array 
console.log(arr1); //original array  

//..................................................................................

/**
 * Important usecase of Map method 
 * production sectior
 * Example 
 * 
 */

  product = [{id:1,name:"iphone",price:100000},{id:2,name:"makbook",price:200000},{id:3,name:"ipad",price:12341}];

   const modifyproduct =  product.map((product)=>{
    return {productid:product.id,name:product.name}
   }) 
   console.log("original product",product);    // it's represent the original product
    
   console.log("modifyproduct",modifyproduct); //it's only represent the modifyproduct

   //...............................................................................................................................


   /**
    * 
    * 
    * filter function 
    * 
    * we can filter of all the represent array 
    * 
    * when we want to filter of the odd element you have to given array using filter method
    * --> so that on,
    */

   arr= [1,2,3,4,5,6,7,8,9];

   const oddelement = arr.filter((element)=>{

    // Build your logic
    return element % 2 != 0;

   })
   console.log(arr);// it,s a original array
   console.log("odd-element",oddelement); //new array

   /**
    * using the production method filter
    * Example
    */

   product = [{id:1,name:"iphone",price:100000},{id:2,name:"makbook",price:200000},{id:3,name:"ipad",price:12341}];

   const modifyproduct1 =  product.filter((product)=>{
    return product.price <= 100000
   }) 
  // console.log("original product",product);    // it's represent the original product
    
   console.log("modifyproduct",modifyproduct1);








   //....................................................................................................................................................................


   /**
    * One of the important array function is so that,
    * 
    * Reduce function
    * 
    * We can  so , one strong Example of the shoping cart of any shoping app feature add this feature.
    * 
    * so, let on the Example
    */


   const shopingcart = [
    {product : "shoes", price: 800 , Quentity: 1},
    {product : "coat", price: 80 , Quentity: 2},
    {product : "jacket", price: 200 , Quentity: 1},
    {product : "ElecticJug", price: 600 , Quentity: 2},
    {product : "smartphone", price: 950 , Quentity: 3}
   ]

   // When  I want to calculate total price of the cart 

   /**
    * let value = 0
    * shoppingcart.forEach(product => {
    * value += product.price + product.Quentity})
    */

   const result2 = shopingcart.reduce(function  reduce(accumulater , currentvalue){

    console.log(shopingcart); // it's print the current items in shopingcart

    return accumulater + currentvalue.price *currentvalue.Quentity

   },0 )

   console.log("Total Prica :",result2); // it's print the Total price in the item'sin the cart


   //.............................................

   

   // one more example are

   function factorial() {

    return [1,2,3,4,5].reduce(function reduce(acc,val) {

        return acc *val;
        
    },1)
    
   }
   console.log(factorial());




   //..................................................................................................................................................................../
   /**
    * Array.form
    */

   function factorial1(num) {

    return Array.from({length: num},function (_ , i) {

        console.log(_ , i);
        return i+1
        
    }) .reduce((acc , val)=> acc +val , 1); 
    
   }
   console.log(factorial1(5));