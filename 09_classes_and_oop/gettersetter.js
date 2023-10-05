class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //suppose ki hm password ka access dena ni chahte to wha pe getter and setters ka use krte hain.
    
    get email(){
        return this._email.toUpperCase()
        
    }
    set email(value){
        this._email = value
    }



    
    get password(){
        return this._password.toUpperCase()

    }
    set password(value){
        this._password = value.toUpperCase()
    }

}

const pranav = new User("p@gmail.com", "12345")
console.log(pranav.password);
console.log(pranav.email);