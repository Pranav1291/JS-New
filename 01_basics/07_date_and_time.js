//Dates

let myDate = new Date() //declare date
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());


let myCreatedDate = new Date(2023, 0, 23) //jan dikhaega kyu months 0 se start hote h js me
//console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);  //kyuki month 0 se start hota h islie + 1 kie h

newDate.toLocaleString('default', {
    weekday: "long"
    
})

 



