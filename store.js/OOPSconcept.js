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