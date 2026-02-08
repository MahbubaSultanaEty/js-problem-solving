// Problem 7: Text Stats Generator
// Function name: textStats(text)
// Statement:
//  Return an object containing:
// Characters count excluding spaces

// Words count

// Vowels count

// Consonants count

// Test case 1
// Input:
//  "JavaScript is fun to learn"
// Output:
// { characters: 22, words: 5, vowels: 8, consonants: 14 }

function textStats(text) {
     text = text.toLowerCase();
    let characters= text.split(" ").join("").length;
    let wordsArr = text.split(" ");
    let words = 0;
    for (let word of wordsArr) {
        words++;
    }
    let letters = text.split("");
    let vowels = 0;
    let consonants = 0;
    for (let letter of letters) {
         if (letter === " ") {
            continue;
         }
        if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
            vowels++
        }
        else {
            consonants++;
        }
    }
    // console.log(i);
    return {
        characters,
        words,
        vowels,
        consonants,
    }
}

let output = textStats("JavaScript is fun to learn");
console.log(output);