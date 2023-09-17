let a = 10
const b = 20
var c = 30
//console.log();

function one(){
    const username = "Pranav"

    function two(){
        const age = "24"                  
        console.log(username); 
        console.log(age);              //-->>> parent function ke elements ko child function access kr skta hai lekin parent func child function ke element ko access ni kr skta
    }
    //console.log(age);   -->> ye two wale function ke scope se bahar hai islie access ni kr skte
    two()
}
//one()


if(true) {


    const username = "Pranav"
    if (username === "Pranav"){
        const website = " youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//++++++++++++++++++++++++++++++++++ Interesting Example ++++++++++++++++++++++++


function addone(num){
    return num + 1
    
}
console.log(addone(6))

const addTwo = function(num){         //-->> JS me variables bhto powerful hote hain, ye kuch bhi hold kr skte hain, function, json file,etcccc...

    return num + 2                   //-->> is tarah se bhi hm fucntion declare kr skte hain 
}
addTwo(6)