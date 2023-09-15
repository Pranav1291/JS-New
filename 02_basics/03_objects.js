// singleton --> constructor se bnega object to hmesha singleton hi bnega

//object literals


const mySym = Symbol("key1")    // -->> declare symbol

const JsUser = {                   //--> object created
    name: "Pranav",
    "full name": "Pranav Srivastava",
    //mySym: "mykey1",   //--> symbol as a key directly is tarah se declare ni kr skte
    [mySym]: "key1",  
    age: 25, 
    location: "Gorakhpur",
    email: "pranav@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]                 //--> key aur value ka game hai

}      
console.log(JsUser.email);                
console.log(JsUser["email"]);  
console.log(JsUser["full name"]);    // -->>   isko dot se access ni kr skte square braces hi hoga


JsUser.email = "pranavpiyush@gmail.com"  //-->> is tareeke se hm values ko overwrite kr skteh hain
//Object.freeze(JsUser)  //--> Object ko freeze kr skte hain jisse koi values ko overwrite na kr ske.


JsUser.greeting = function() {       
    console.log("Hello There !");
}
JsUser.greetingTwo = function() {       
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

