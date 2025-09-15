/*
        Challenge: Remove Duplicates
Instructions
Write a function called removeDuplicates that takes in an array and returns a new array with duplicates removed.

Function Signature
/**
 * Returns a new array with duplicates removed.
 * @param {Array<string | boolean | number>} arr - The array to remove duplicates from.
 * @returns {Array<string | boolean | number>[]} - The new array with duplicates removed.
 
function removeDuplicates(arr: Array<string | boolean | number>): Array<string | boolean | number>;
Examples
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // [1]
removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello' 2, 3, 'hello', true]); // [1, 2, 3, 4, 5, true, 'hello']
Constraints
The array can contain strings, numbers or boolean data types.

*/

const removeDuplicates = (arr)=>{
    const cleanedArr = [];

    for(let i = 0 ; i<arr.length ; i++){
        
           if(!cleanedArr.includes(arr[i])){
            cleanedArr.push(arr[i])
           }
        
       
    }
     return cleanedArr ;

}


module.exports = removeDuplicates ;
   
