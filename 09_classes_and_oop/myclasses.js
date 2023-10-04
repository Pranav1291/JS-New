// ES 6

// -->> note:- classes are just the syntactical sugar

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password} abc`
    }
}

const lala = new User("Pranav", "lala@gmail.com", "12334")
console.log(lala);