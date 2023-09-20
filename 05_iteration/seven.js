const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//newNums = myNumbers.map( (num) => num + 10)                 //-->>> map did automatically

const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)   //--->> This is called "chaining" 
                    //^^yha pe jo num value lega wo pichle mapping ke according lega mtlb, num * 10 ho chuka hai to uske bad se 1 add hog a[11, 21, 31], etc   
                .filter((num) => num > 40)


console.log(newNums);