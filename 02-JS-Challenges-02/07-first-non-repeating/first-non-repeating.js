/*
Challenge: Find First Non-Repeating Character
This challenge is similar to the last. So if you understood that, you should be able to get this one on your own.

Instructions
Write a function called findFirstNonRepeatingCharacter that takes in a string and returns the first non-repeating character in the string.

If there are no non-repeating characters, the function should return null.

Function Signature
/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.

function findFirstNonRepeatingCharacter(str: string): string | null;
Examples
findFirstNonRepeatingCharacter('aabccdeff'); // should return 'b'
findFirstNonRepeatingCharacter('aabbcc'); // should return null
findFirstNonRepeatingCharacter('abcdef'); // should return 'a'
Constraints
The input string will only contain lowercase letters and spaces

*/

const findFirstNonRepeatingCharacter = (str)=>{

    for (let i = 0 ; i<str.length ; i++){
        if(str[i]!==str[i+1]){
            return str[i];
        }else{
            i=i+1 ;
        }
    }
    return null ;
}

module.exports = findFirstNonRepeatingCharacter ;