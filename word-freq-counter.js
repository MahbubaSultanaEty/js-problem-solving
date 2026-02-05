// Problem 1: Word Frequency Counter
// Function name: wordFrequency(sentence)
// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences

// Ignore extra spaces

// Test case 1
// Input: "I love JS and I love coding and JS is fun"
// Output: { i: 2, love: 2, js: 2, and: 2, coding: 1, is: 1, fun: 1 }


// -----------------------    ---------------------
// Step-by-step logic (plain English)

// Take a sentence as input
// The function receives a full sentence (a string).

// Break the sentence into individual words
// The sentence is split wherever there is a space, creating a list of words.

// Prepare an empty object to store counts
// This object will keep:

// each word as a key

// how many times it appears as the value

// Go through each word one by one
// A loop runs over the list of words.

// Convert each word to lowercase
// This ensures:

// "Fun", "FUN", and "fun" are treated as the same word
// (this is how case differences are ignored)

// Check if the word already exists in the object

// If the word already exists → increase its count by 1

// If the word does not exist → add it to the object with count 1

// Repeat until all words are processed
// Every word updates the object accordingly.

// Return the final object
// The object now contains:

// each unique word

// how many times it appeared in the sentence


function wordFrequency(sentence) {
    let words = sentence.trim().split(" ");
    let obj = {};
    for (let word of words) {
        let wordLowerCase = word.toLowerCase();
        if (obj.hasOwnProperty(wordLowerCase)) {
            // wordLowerCase[word] += 1;
           obj[wordLowerCase]++;
        } else if (word === "") {
            continue
        }
            else {
            obj[wordLowerCase] = 1;
            }
    } return obj;
}

let wordCount = wordFrequency("I love JS and I love coding and JS is fun");
console.log(wordCount);

// Test case 2
// Input:  " Hello hello HELLO "
// Output: { hello: 3 }

 wordCount = wordFrequency(" Hello hello  HELLO");
console.log(wordCount);