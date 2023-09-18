// const balance = 1000

// if(balance > 500) console.log("test");     //--> implicit scope, but ek hi line me


// if(balance < 500) {
//     console.log("less than 500 ");

// } else if(balance < 750){
//     console.log("less than 750");
// } else if(balance < 900){
//     console.log("less than 900");
// } else{
//     console.log("less than 1000");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2==2){   //--> and me sare conditions true hone chhie tb hi execute hoga
    console.log("allow to buy ");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");                  //-->> "or" mein koi bhi ek condition shi hogi tb hi execute hoga
}


