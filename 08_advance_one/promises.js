const promiseOne = new Promise(function(resolve, reject){  //-->syntax
    //Do an asyn task--> DB calls, cryptography, network 

    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000)
    resolve()  //--> .then ke sath connect krne k lie resolve execute bhi to krenge!
})

promiseOne.then(function(){   //-->.then ka seedha connection h resolve ke sath
    console.log("Promise consumed");
})

const promiseTwo = new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username: "Pranav", sirname: "Lala"})
        
        
    }, 1000);

})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Pranav", password: "123"})
        } else {
            reject("ERROR: Something went wrong !")
        }
    }, 1000)

})

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong !")
        }
    }, 1000)

})

async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);
}
consumePromiseFive()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then ((data)=>{
    console.log(data);
})
.catch((error) => console.log(error));



