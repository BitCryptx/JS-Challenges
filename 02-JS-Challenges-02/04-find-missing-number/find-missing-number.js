/* Challenge: Find The Missing Number
Instructions
Write a function called findMissingNumber that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

Function Signature
/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.

function findMissingNumber(arr: number[]): number;
Examples
findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7
Constraints
If an empty array is passed in, it should return 1
If nothing is passed in, it should return undefined */


const findMissingNumber = (arr)=>{
    const size = arr.length + 1 ;

    const expectedSum = size*(size+1)/2 ;
    let actualSum = 0 ;
    for(let i = 0 ; i<arr.length ; i++){
        actualSum += arr[i]
    }

    return expectedSum - actualSum ;
}

module.exports = findMissingNumber ;
