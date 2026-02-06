// Problem 6: Phonebook Prefix Search
// Function name: searchByPrefix(phonebook, prefix)
// Statement:
//  Return an array of names that start with the given prefix.
// Test case 1
// Input:
// phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
// prefix = "ra";

// Output:
// ["rahim", "rafi"]

function searchByPrefix(phonebook, prefix) {
    let searchResult = [];
    for (let key in phonebook) {
        if (key.startsWith(prefix)) {
            searchResult.push(key);
        }
    } return searchResult;
}

let searchResult = searchByPrefix({ rahim: "0181", karim: "0172", rafi: "0193" }, "ra");
console.log(searchResult);