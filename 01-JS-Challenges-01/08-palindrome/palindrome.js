

/*

Challenge: Palindrome
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. An example of a palindrome is "madam".

Instructions
Write a function called isPalindrome that takes in a string and returns true if the string is a palindrome and false if it is not.

Function Signature
/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 
function isPalindrome(str: string): boolean;
Examples
isPalindrome('madam') // true
isPalindrome('racecar') // true
isPalindrome('hello') // false
isPalindrome('') // true
Constraints
The input string will only contain lowercase letters and spaces
The function should ignore spaces when checking if the string is a palindrome
*/


const isPalindrome = (str)=>{

   let start = 0;
   
    let words = str.toLowerCase().trim();
    let end = words.length-1;
   for(let i = 0 ; i<words.length ; i++){
        if(words[start++]!==words[end--]){
            return false ;
        }else{
            return true ;
        }
   }
}

module.exports = isPalindrome ;