const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

const newArr = numbers.map((num)=>{
    return num * 4 ;
})
console.log(newArr);


/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const newArrWithFilter = numbers.filter((num)=>{
    return num%3===0 ;
})
console.log(newArrWithFilter);


/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

const newArrWithReduce = numbers.reduce((accumlator , num)=>{

        return accumlator + num ;
        
},0);

console.log(newArrWithReduce);




/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

const arrWithForEach = numbers.forEach((num)=>{
    return num ;
})

console.log(arrWithForEach);



 /**
 * find: Returns the first array element that satisfies a specified condition.
 */

 const arrWithFind = numbers.find((num)=>{
    return num > 2 ;
 })

 console.log(arrWithFind);


/**
 * some: Checks if at least one array element satisfies a condition.
 */

const arrWithSome = numbers.some((num)=>{
    return num===3 ;
})

console.log(arrWithSome); 

/**
 * every: Checks if all array elements satisfy a condition.
 */

const arrWithEvery = numbers.every((num)=>{
    return num%2===0 ;
})
console.log(arrWithEvery);
