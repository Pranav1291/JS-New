const user = {
    username: 'John',
    loginCount: 8,
    signedIn: true,

    getUserDetails: () => {

        //console.log("Got user details from database");
        //console.log(`here it is ${this.username}`);
    }
}
//console.log(user.getUserDetails());

///console.log(user.username);
//

//-----------------------------Constructor---------------------------------------------

//const promiseOne = new Promise() //-->> new keyword nya context bnane k kam ata h isi ko constructor bolte hain


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("Pranav", 10, true)
const userTwo = new User("Srivastava", 20, false)
console.log(userOne);