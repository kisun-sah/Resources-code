// prototype
 function productitem (name,price){
    this.name=name;
    this.price=price;
 }
 const p1 =new productitem("Iphone",120000);

 //................................................................................

 function product1 (name ,price ){
   this.name = name;
   this.price = price;

 }

 const  p = new product1("Iphoine ", 120000);

 product1.prototype.display = function (){
   console.log("Details of the product are",this);
 }
 p.display();

 // if you want to access product1 .prtotype from p
 console.log(p.__proto__);



 //.......................................................................................
 const mp = new Map();

 mp.set("namae","kartik");
 mp.set("age",22);
 mp.set("hobbies","coding");


 console.log(mp);

 for(entry of mp){
   console.log(entry);
 }

 mp.forEach((key,value) => {
   console.log(key,value);
 });

 