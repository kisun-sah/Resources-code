// bind example

// IN this session we will disscuss more about bind , apply and call

const player =  {

    firstname : "virath",
    lastname : "koli",
    numbertobat : 3
}

const player2 =  {

    firstname : "Rohit",
    lastname : "sharma",
    numbertobat : 5
}

const  details = function(){
    console.log(this);
    console.log(`${this.firstname +" " + this.lastname } comes to bat no .${this.numbertobat}`);
}

const newdetailswithvirath =  details.bind(player);
const newdetailswithRohit =  details.bind(player2);
// newdetailswithvirath();
// newdetailswithRohit();

// both details.call & newdetailswithvirath are geting the same thing  and output
details.call(player)
details.call(player2)


//.........................................................................................................
//.........................................................................................................

// bind and apply yhis both gettin the same thing and same output

const player1 =  {

    firstname : "virath",
    lastname : "koli",
    numbertobat : 3
}

const player3 =  {

    firstname : "Rohit",
    lastname : "sharma",
    numbertobat : 5
}

const  detail = function(){
    console.log(this);
    console.log(`${this.firstname +" " + this.lastname } comes to bat no .${this.numbertobat}`);
}

const newdetailswithvirath1 =  detail.bind(player1);
const newdetailswithRohit2 =  detail.bind(player3);


// both details.call & newdetailswithvirath are geting the same thing  and output
detail.apply(player1)
detail.apply(player3)

//...................................................................................................................

// (...)spread function example 

obj={a:10,b:20,c:30,d:40 }

const newobj = {...obj} 

console.log(newobj);


//.......................................
// (...)spread function example 

function arraynumber(...numbers){
    console.log(numbers);
}
arraynumber(1,2,3,4,5,6,7,8);

