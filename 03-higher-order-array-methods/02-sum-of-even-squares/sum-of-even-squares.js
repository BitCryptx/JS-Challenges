/*
Challenge: Sum of Squares of Even Numbers
Instructions
Let's start off with a fairly simple challenge, but one that uses a few different array methods. Write a function called sumOfEvenSquares that takes an array of numbers and returns the sum of the squares of the even numbers in the array.

Function Signature
/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.

function sumOfEvenSquares(numbers: number[]): number
Examples
sumOfEvenSquares([1, 2, 3, 4, 5]); // 20 (2^2 + 4^2)
sumOfEvenSquares([-1, 0, 1, 2, 3, 4]); // 20 (0^2 + 2^2 + 4^2)
sumOfEvenSquares([]); // 0 
*/

const sumOfEvenSquares = (numbers)=>{
    const evenNumbers = numbers.filter((num)=>{
        return num%2===0 ;
    });
    
    const evenNumbersMapped = evenNumbers.map((num)=>{
        return num ;
    })
    const reducedNumbers = evenNumbersMapped.reduce((accumalator , num)=>{
            accumalator = accumalator+num*num ;
            return   accumalator;

    },0)

    return reducedNumbers ;
}

module.exports = sumOfEvenSquares ;