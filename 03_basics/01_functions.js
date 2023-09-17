
function sayMyName() {
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");

}

//sayMyName();                         //-->> parenthesis lgate hi fucntion ka execution hota h



function addTwoNumbers(number1, number2) {
                      // ^^ isko parameters bolte hain
    //console.log(number1 + number2)

}

//addTwoNumbers(10, 10)
            // ^ isko arguments bolte hain

function loginUserMessage (username){
    if(username === undefined){          //--> (!username bhi kr skte h)
        console.log("PLease enter a username")
        return
    }
    return (`${username} just logged in `)
}            
// console.log(loginUserMessage())


function calculateCartPrice (...num1){   // -->>"..." ko spread operator bhi bolte h aur rest operator bhi bolte hain ,depends on use case
    return num1
}
//console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "Pranav",
    prices: "99"
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "Sam",
    price: "98"
})


const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getarray){
    return getarray[3]
}
console.log(returnSecondValue(myNewArray));