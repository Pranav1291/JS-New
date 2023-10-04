class User{
    constructor(username){
        this.username = username
        
    }
    logMe(){
        console.log(`username is : ${this.usernmae}`);

    }

    createId(){  //--> static ka use jab sbko access ni dena hota hai tab krte hain.

        return `123`
    }
}
const Pranav = new User("Pranav")
console.log(Pranav.createId())


class Teacher extends User{

    constructor(username, email){
        super(username)
        this.email = email;
    }
}
const iphone = new Teacher("Lala", "lala@g.com", "54321")
iphone.createId();