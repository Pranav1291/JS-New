const userEmail = "p@gmail.com"
const useremail = []

if(userEmail){
    console.log("got email");
} else {
    console.log("dont have email");
}

// Falsy values :-
// false, 0, -0, BigInt(0n), "", null, undefined, NaN 
// Truthy value :-
// "0", 'false', " ", [], {}, function(){}

if (useremail.length === 0) {
    console.log("Array is empty");
    
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


//Nullish Coalescing operator (??): null undefined

let val1;
val1 = 5 ?? 10   //--->>> suppose agar koi database fetch kr rhe h aur kbhi kbhi kisi value ke sath null ya undefined value aa jati hai to hme null coalescing operator(??) se null aur undefined ke alawa jo next first value hogi wo mil jaegi
val1 = null ?? 15
val1 = undefined ?? 20

console.log(val1);



//Turniary Operator :-

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")