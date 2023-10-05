function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', { //--> define property get set ka hi method hai jo khud ka object bnane ke lie kam me ata h
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }

    } )
    Object.defineProperty(this, 'password', { 
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }

    })

}

const pranav = new User("lala@lala.com", "pranav")
console.log(pranav.email);