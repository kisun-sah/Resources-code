//Async Await 

function downloader(url ){
    return new Promise((res,rej)=>{
        console.log("started downloading from ",url);
        setTimeout(() => {
            console.log("Downloaded completed");
            let downloadedData = "Dummy data"
            res(downloadedData);

            
        }, 4000);
    })
}


function writeFile(data){
    return new Promise((res,rej)=>{
        console.log("started writing  data",data);
        setTimeout(() => {
            console.log("writing  completed");
            let filename = "Dummy.txt"
            res(filename);

            
        }, 2000);
    })
}


function uploadedfile(filename ,  newurl){
    return new Promise((res,rej)=>{
        console.log("started uploading file",filename,"on the url",newurl);

        setTimeout(() => {
            console.log("uploaded completed");
            let uploadresponse = "sucess"
            res(uploadresponse);

            
        }, 3000);
    })
}

async function execute(){
    console.log("We are inside the execution functuon !!");
    const downloadedData = await  downloader("www.google .com");
    console.log("Data downloaded is ",downloadedData);
    const filename = await writeFile (downloadedData);
    console.log("File writen is ",filename);
    const response = await uploadedfile (filename,"drive.google.com")
    console.log("upload response is ",response);
}

console.log("start");
execute();
console.log("End");