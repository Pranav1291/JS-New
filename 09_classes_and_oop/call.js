function SetUsername(username){
    //complexx DB calls

    this.username = username

}
function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const lala = new createUser("Lala", "lala@gmail.com", "lala123")
console.log(lala);