// let myName = "Pranav     "

// console.log(myName.truelength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: (() => {
        console.log(`spidy power is ${this.spiderman}`);

    })
}

Object.prototype.Pranav = (() => {    //-->> creating my own property 'Pranav'
    console.log(`Pranav is present in all objects`);
})
Array.prototype.heyPranav = (() => {
    console.log(`Pranav says Hello`);
})

// heroPower.Pranav()
// myHeros.Pranav()
// myHeros.heyPranav()
//heroPower.heyPranav()


//Inheritance

const User = {
    name: "Pranav",
    email: "Pranav@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



//Modern Syntax:-

//Object.setPrototypeOf(TeachingSupport, Teacher)  //-->> syntax for prototypical inheritance

let anotherUsername = "PranavLala     "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"      Srivastavaa   ".trueLength()