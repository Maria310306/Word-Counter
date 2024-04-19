#! /usr/bin/env node 
//Shebang tells to run the code with node.js

import inquirer from "inquirer";
const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a sentence to see number of words in the sentence: "
    }
])
// To make sure that user's input is without widespaces.
// Methods:
//Trim: Removes the leading and trailing white space and line terminator characters from a string.
// Split: Split a string into substrings using the specified separator and return them as an array.

const words = answers.Sentence.trim().split(" ")

// Print an array of words
console.log(words)

// Print the number of words in the sentence
console.log(`Length of words in your Sentence is : ${words.length}`);


