/*
    Challenge: Highest Scoring Word
Instructions
Given a string of words, you need to find the highest scoring word. Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3, and so on.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Function Signature
/**
 * Returns the highest scoring word from a string.
 * @param {string} str - The input string.
 * @returns {string} - The highest scoring word.

function highestScoringWord(str: string): string;
Examples
highestScoringWord('man i need a taxi up to ubud'); // 'taxi'
highestScoringWord('what time are we climbing up the volcano'); // 'volcano'
highestScoringWord('take me to semynak'); // 'semynak'
Constraints
The input string will only contain lowercase letters and spaces. It can not include numbers, special characters, or punctuation
*/

const highestScoringWord = (str) => {
    const splitWord = str.split(" ");

    const scores = splitWord.map(word =>
        Array.from(word).reduce((sum, letter) => sum + (letter.charCodeAt(0) - 96), 0)
    );

    const maxScore = Math.max(...scores);
    const maxIndex = scores.indexOf(maxScore);

    return splitWord[maxIndex];
};

module.exports = highestScoringWord;
