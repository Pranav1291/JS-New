//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Pranav"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "pranav@gmail.com",                   
    fullname: {
        userfullname: {
            firstname: "Pranav",               // --> jitna chahe utna nesting kr skte hain objects me
            lastname: "Srivastava"
        }
    }
}
//console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


//const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}             //-->> mostly ye wala syntax hi use me aega
//console.log(obj3);



const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));        //-->> method to question that, it includes or not?


//################### De-structure of Objects ##########################


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "pranav"
}

//course.courseInstructor
const{courseInstructor: instructor} = course                                 // -->  curly braces me hoga ki kon si value extract krni h, aur right side hoga ki kaha se krni h
                        //  ^^ yha pe aise, kisi bhi value ko destruct kr skte hain ya nya nam de skte hain   

console.log(instructor);


//API -JSON  -->>> jitne bhi api's hain wo sare json format me hi hote hain
//Mostly object hote hain , lekin array me bhi ho skte hain api's, like this:-

// {
//     "name": "pranav",
//     "age": "22",                     // --> ye json format hai, isme key aur values dono string datatype ke hote hain
//     "city": "gorakhpur"
// }

// [
//     {},
//     {},
//     {}                     //-->> this is also an api of json format in array form


// ]   