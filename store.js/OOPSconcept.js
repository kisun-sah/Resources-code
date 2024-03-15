// In this secession we will discuss the concept of class and object
//we know the example of the class and object

class product{
    // //Properties  --> class member /

    Name ;

    Image ;

    Description ;

    Price ;

    constructor (n,i,d,p){
        console.log("loggin this before value");// if u donot return anything then also newly created object is return

        this.Name = n;
        this.Image = i;
        this.Description= d;
        this.Price = p;
       

        console.log("Created an obj",this);
       // return {x : 10}
      //  return [1,2,3,4]   -->if u return object that the object mentioend here is returned 
      //  return "Kartik"    ---> if u return primitive that newly created object is returned
    }
    //Behaviours --> class member / method 

    Buyproduct(){

        console.log("Ought Buy a product");

    }

}

const obj = new product("Iphone","some image","Apple Iphone",120000);
console.log(obj);
const p = new product("$34","some image","Samsung galaxy",900000)
console.log(p)


//..............................................................................................
//..............................................................................................
//  this keyword using in function
const obj1 = {
    x : 10,
    y : 20,

    nested : {
        z: 30,
        y:224444,

        displayFromInner : function (){
            console.log(`value of x is ${this.x}and y is ${this.y}`);
        }
      
    },
    displayFromOuter : function(){
        console.log(`value of x is ${this.x}and y is ${this.y}`);
    }

}

obj1.displayFromOuter();
obj1.nested.displayFromInner();


// in this function without this keyword Arrow keyword is using ,

const obj2 = {
x: 10,
y:20,

display : ()=>{
    console.log(`The Value of x is ${obj2.x} and the value of y is ${this.y}`);
/**
 *  obj2.x is geting the value of x = 10  but
 *  In the same th9ng we want to access the value of this.y is getting the undefined
 * 
 * Because we are in the arrow function In the Arrow function this keyword is can't be access.
 * 
 */
}
}

obj2.display();

//..................................................................................................................

class product {

    constructor(N,I,P,D){
    this.Name=N;
    this.Image =I;
    this.Price=P;
    this.Descr =D;

   
    
    }
    Displayproduct (){
        //something about product
        setTimeout(() => {

         console.log("product detail are  ",this.Name,this.Image,this.Price,this.Descr);
            
        }, 5000);
        console.log("Waiting the code");
    }
}

const p1 = new  product("Iphone ","someimage",12000,"this is a Apple product ")
console.log(p1);
p1.Displayproduct();

const p2 = new  product("Samsung","someimage",10000,"this is a samsung glaxy product ")
console.log(p2);

p2.Displayproduct();


//.......................................................................................................

// we used the simple function for same code 

function product(n,i,p,d){
    this.name=n;
    this.image=i;
    this.price=p;
    this.desc=d;

    this.showme=function(){
        setTimeout(() => {

            console.log("Name:", this.name,"price",this.price);
            
        }, 5000);
    
        console.log("you are waiting about 5 sec to display list product  ");
    }
    }

    

 
const store = new product("Apple","someimage ", 10000,"some dec");
console.log(store);
store.showme();

//....................................................................................................................

class complex{

    constructor(real,imag){
        this.real=real;
        this.imag=imag;
    }
   add( num){
    return `${this.real}+i${this.imag+num.imag}`
   }

   multiply( num){
    return `${this.real*num.real-this.imag*num.imag}+i${this.real*num.imag+ this.imag*num.real}`
   }

}

const c1 = new complex(3,5)
const c2 = new complex(6,7)
console.log(c1.add(c2));
console.log(c1.multiply(c2));