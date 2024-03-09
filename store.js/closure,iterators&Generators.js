//Closer 

function Takentask(task){
    console.log("initialising do something");

    setTimeout(() => {

        console.log("Timer done !! and task done complete",task);
        
    }, 3000);

    console.log("Exitting do something after initlising a timer ");

}

Takentask("Homework");

//..................................................................................

function createcounter(){
    let count = 0;

    return {
        //returing an object

        increment :function (){count += 1},
        decrement : function (){count -=1},
        getcount : function (){return count}
    }
}
let c = createcounter();
c.increment();
c.increment();
console.log(c.getcount());
c.decrement();
console.log(c.getcount());

//.....................................................................................

function outer(){
    let i = 0;
    let j = [1,2,3];
    let k = "Kartik" // wont be using k inside inner

    function inner(){
        const z= 99;
        i += 1 ;//using i
        console.log(j); // using j
      
        return i;

    }

    i +=2;

    return inner
}

x = outer();

x();

//.........................................................................................................
//.........................................................................................................

function customiterator(arr){

    let idx = 0;
    function next(){
        if(idx == arr.length){
            return {value : undefined , done : true};
        }

        const nextElement = arr[idx];

        return {value : undefined , done : true}
    }

    return {next};
}

c = customiterator();
console.log(c);


//........................................................................................................
//.........................................................................................................

//generater function 

function gen(){
    console.log("line 0");
    yield 1;
    console.log("Line 1");
    yield  2;
    console.log("Line 2");

    yield 3;
    console.log("Line 3");

    yield 4;
    console.log("Line 4");

    yield 5;
    console.log("Line 5");

    yield 6;
    console.log("Line 6");

    yield 7;

    console.log("Line 7");

}

const x = gen();
console.log(x.next());
console.log("is paused");
console.log(x.next());
console.log("is paused");
console.log(x.next());
console.log("is paused");
console.log(x.next());
console.log("is paused");
console.log(x.next());
console.log("is paused");
console.log(x.next());
console.log(x.next());
//generater are similar to normal function a few changes
// to declare a generator 




