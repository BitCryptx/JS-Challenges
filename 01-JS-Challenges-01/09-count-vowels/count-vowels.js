/*

Challenge: Count Vowels
Instructions
Write a function called countVowels that takes in a string and returns the number of vowels in the string.

Function Signature
/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.

function countVowels(str: string): number;
Examples
countVowels('hello'); // 2
countVowels('why'); // 0
countVowels('mississippi'); // 4
Constraints
It shouldn't matter if the input string is uppercase or lowercase

*/

const countVowels = (str)=>{
    let count = 0 ;
    const vowels = ['a' , 'e' , 'i' , 'o' , 'u' , "A" , "E" , "O" , "U" , "I"]
    for(let i = 0 ; i<str.length ; i++){
        for(let j = 0 ; j<vowels.length ; j++){
            if(str[i] === vowels[j]){
                count++ ;
            }
        }
        
    }
    return count++ ;
}

module.exports = countVowels ;

