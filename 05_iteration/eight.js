const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and cuurval: ${currval}`);
//     return acc + currval
// }, 0)        //-->> jo bhi object ke bad value denge wo accumulator ke pas chli jati hai
// console.log(myTotal);
//Output :- 
// acc: 0 and cuurval: 1
// acc: 1 and cuurval: 2
// acc: 3 and cuurval: 3
// 6

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)  // same above operation in arrow function


const shoppingCart = [{
    itemName: "js course",
    price: 2999,
},
{
    itemName: "py course",
    price: 999,
},
{
    itemName: "java course",
    price: 1999,
},
{
    itemName: "ruby course",
    price: 3999,
}
]

newTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(newTotal);



//-->> reduce() use case : suppose shopping cart hai usme sale products ko add krke total dena hai to ek ko add krne k lie pichla hta to ni skte, islie reduce () ka use hoga wha pe{this is just an example}

