/*
    Challenge: Find Missing Letter
Instructions
Write a function called findMissingLetter that takes in an array of consecutive (increasing) letters as input and returns the missing letter in the array.

Function Signature
/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string} - The missing letter.

function findMissingLetter(arr: string[]): string;
Examples
findMissingLetter(['a', 'b', 'c', 'd', 'f']); // => "e"
findMissingLetter(['O', 'Q', 'R', 'S']); // => "P"
findMissingLetter(['t', 'u', 'v', 'w', 'x', 'z']); // => "y"
Constraints
The input array will only contain letters in one case (lower or upper)
If no letters are in the array, return an empty string


*/

const findMissingLetter = (arr)=>{
     const alpha_str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const startInd = alpha_str.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alpha_str[startInd + i]) {
      return alpha_str[startInd + i];
    }
  }

  return '';
}

module.exports = findMissingLetter ; 