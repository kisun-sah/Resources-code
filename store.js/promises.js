// promises in js 


function createPromises(){
    return new Promise((res, rej) => {
      
        res("kartik");
     
    })
}

function blockingcode(){
  
    for(let i =0; i<1000000000;i++){//some time
    }
}

let a = 10;
blockingcode();
setTimeout(() => {
    console.log("timer 1 done ");
    console.log("Value of a is ",a);
    
}, 3000);

setTimeout(() => {
    console.log("timer 2 done ");
    console.log("Value of a is  " , a);
    
}, 0);

a ++;

 pr = createPromises();

pr.then(function sucess(value){
    a++;

    console.log("Pe Promises fulfilled with a value ",value);

}, function failure(value ){
    console.log("pr Promises rejection with a value ",value);
});

a++;

blockingcode();

//.......................................................................................................................
//.......................................................................................................................



function downloader(url,cb){
//Anyone who wants to download something first and then execute something else 
// can use this function 

console.log("started downloading from ", url);
setTimeout(() => {

    console.log("Download completed");
    // with the downloaded content , whatever you want to do you can do
    let downloadedData = "Dummy content ";

    cb(downloadedData); //cb -> any callback 
    
}, 4000);
}

function writeFile(data , cb){
    // write a dummy imp using settime out to show the delay

    console.log("started writing  data ", data);
setTimeout(() => {

    console.log("writing  completed");
    // with the writing content , whatever you want to do you can do
    let Filename = "Dummy.txt";

    cb(Filename); //cb -> any callback 
    
}, 2000);
}

function uploadFile (Filename , newurl,cb){
    // write a dummy imp using SetTimeOut to show the delay

    console.log("started uploading  file ", Filename,"on the url",newurl);
    setTimeout(() => {
    
        console.log("uploaded  completed");
        // with the writing content , whatever you want to do you can do
        let uploadResponse = "sucess ";
    
        cb(uploadResponse); //cb -> any callback 
        
    }, 3000);
}

//let 's start

console.log("starting the program ");
downloader("www.google.com",(downloadedData)=>{
    writeFile(downloadedData,(Filename)=>{
        uploadFile(Filename,"www.drive.google.com",(uploadResponse)=>{
            console.log("Status of upload",uploadResponse);
        })
    })
})


//............................................................................................................................
//............................................................................................................................

//created the promises

function CreateAsyncPromises(){
    return new Promise((res,rej)=>{
        //Async alogrithm
        setTimeout(function timercompleted(){
            //lets change the state of promise
            const value = Math.random();
            if (value<0.5) {
                //resolve the promise
                res(value);

                
            }else{
                //reject the promises
                rej(value)
            }
        },1000)
      
    });
}
const response = CreateAsyncPromises();
console.log("Promises",response);

for(let i=0;i<10000000000;i++){
    //some task
}

console.log("Promises",response);


console.log("End of the code");



//.................................................................................................................

function createPromises(time){
    return new Promise((res,rej)=>{

        setTimeout(() => {

            res(time)
            
        }, time);
     });
}



const pr1 = createPromises(10000);//first promise object
console.log("PR1",pr1);

const pr2 = pr1.then((val)=>console.log("Resolving with",val),(val)=>console.log("Rejecting with",val));
console.log("PR2",pr2);

//...............................................................................................................................................
//promiseschanging.js

function createPromise(time){
    return new Promise((res,rej)=>{

        setTimeout(() => {

            res(time)
            
        }, time);
     });
}

 createPromise(10000)
 .then((value)=>{
    console.log("value in first then",value);
    return value*2;
})

.then((value)=>{
    console.log("value in second then",value);
    return value*2;
})

.then((value)=>{
    console.log("value in third then",value);
    return value*2;
});