const user = {
    username: "Pranav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
                       //^^"this" keyword current context ko refer krta hai
        console.log(this);               

    }                  

}

// user.welcomeMessage()
// user.username = "Lala"
// user.welcomeMessage()
// console.log(this);              //-->> ek empty object output dega



// function lala(){
//     console.log(this);
// }
// lala()

// const lala = () => {
//     let username = "Pranav"
//     console.log(this);   //--->> undefined dega kyuki directly function ke andr "this" ni kam krta  ^^
// }

// lala()


//const addTwo = (num1, num2) =>  (num1 + num2)
                                //-->> curly braces lgaoge to return keyword likhna pdega ,aur parenthesis me return keyword ni likhna pdega
                                //^ this is called implicit return where return keyword wasnt used, and explicit return me return keyword lgana hota h
const addTwo = (num1, num2) => ({username: "Pranav"})  //-->> is tarah se hm object bhi return kr skte hain, lekin dont forget to use parenthesis                                
console.log(addTwo(5, 5))
