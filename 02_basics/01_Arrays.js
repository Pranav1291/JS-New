//Array

const myArr = [0, 1, 2, 3, 4, 5]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1])

//Array Methods

//myArr.push(6)  //add value to the last of array
//console.log(myArr)
//myArr.pop()  //delete the last value from the array

//myArr.unshift(9) //add element at first place in the array
//console.log(myArr);

//myArr.shift() //remove the first element from the array
//console.log(myArr);


console.log(myArr.includes(10)) //asks include or not?
console.log(myArr.indexOf(4)); //index of given element 


const newArr = myArr.join()    //-->> converts array into string
console.log(newArr);
console.log(myArr);
console.log(typeof newArr);

//************** Slice And Splice ******************/


console.log("A ", myArr);

const myn1 = myArr.slice(0, 3)   //->> slices in given range
console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(2, 6)  //The splice() method of Array instances 
                                //changes the contents of an array by removing 
                                //or replacing existing elements and/or adding new elements in place
console.log(myn2);