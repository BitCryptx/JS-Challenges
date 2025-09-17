/*
Challenge: Are all characters unique?
Instructions
Write a function called areAllCharactersUnique that takes in a string and returns true or false depending on whether all characters in the string are unique (i.e., no character is repeated).

Function Signature
/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.

function areAllCharactersUnique(str: string): boolean;
Examples
areAllCharactersUnique('abcdefg'); // true
areAllCharactersUnique('abcdefgA'); // true
areAllCharactersUnique('programming'); // false
areAllCharactersUnique(''); // true
areAllCharactersUnique('a'); // true
Constraints
It should be case sensitive, so a and A are considered different characters
An empty string should return true by default
*/

const areAllCharactersUnique = (str)=>{
    if (str.length===0){
        return true ;
    }
    for(let i=0 ; i<str.length ; i++){
        for(let j = i+1 ; j<str.length ; j++){
            if(str[i]===str[j]){
                 return false ;
            } 
        }
    }
    return true ;
}

module.exports = areAllCharactersUnique ;