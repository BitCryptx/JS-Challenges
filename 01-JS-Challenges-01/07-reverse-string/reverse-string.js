/*
    Challenge: Reverse String
Instructions
Write a function called reverseString that takes in a string and returns the reverse of that string. In this section, we are really focusing on loops without using any built-in methods, so try that first. If you get stuck, you can always use the built-in methods to solve the problem.

Function Signature
/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.

function reverseString(str: string): string;
Examples
reverseString('hello') // 'olleh'
reverseString('world') // 'dlrow'
reverseString('') // ''
Constraints
The input string will only contain lowercase letters and spaces
*/


const reverseString = (str)=>{
    let revStr = "";
    for(let i = str.length-1; i>=0 ; i--){
        revStr =  revStr + str[i];
    }
    return revStr ;
}

module.exports = reverseString ;