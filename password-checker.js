// Problem 3: Password Strength Checker
// Function name: checkPassword(password)
// Rules:
// Length must be at least 8

// Must contain at least 1 number

// Must contain at least 1 uppercase letter

// Must not contain spaces

// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }

// --------------- -----------
// Take a password as input
// The function receives a password as a string.

// Prepare an empty list for reasons
// An empty array is created to store the reasons why the password is invalid.

// Get the password length

// The total number of characters in the password is stored for looping.

// Prepare flags[variables that stores boolean values] to track conditions

// Three checks are prepared:

// one to detect if the password has a number

// one to detect if the password has an uppercase letter

// one to detect if the password contains a space

// All checks start as false (or based on initial checking).

// Go through each character one by one

// A loop runs through every character in the password.

// Read the current character
// Each character is accessed individually from the password.

// Check if the character is a number

// If the character falls between 0 and 9,
// the number condition is marked as true.

// Check if the character is an uppercase letter
// If the character falls between A and Z,
// the uppercase condition is marked as true.

// Finish scanning the password

// After the loop ends, the function now knows:

// whether a number exists

// whether an uppercase letter exists

// whether a space exists

// Check for missing number
// If no number was found,
// a reason is added explaining the problem.

// Check for missing uppercase letter
// If no uppercase letter was found,
// a reason is added explaining the problem.

// Check for space in password
// If a space exists,
// a reason is added explaining that spaces are not allowed.

// Decide if the password is valid
// If there are no reasons, the password is valid
// If there is at least one reason, the password is invalid


function checkPassword(password) {
    let reasons = []
     
    let hasUpperCase = false;
    let hasNumber = false;
    let hasSpace = password.includes(" ");

    for (let i = 0; i < password.length; i++){
        // console.log(password[i]);
        let character= password[i]

        if (character >= "A" && character <= "Z") {
            hasUpperCase = true;
        }
        if (character >= "0" && character <= "9") {
            hasNumber = true;
        }
    }
        if (!hasNumber) {
            reasons.push("please include a number")
        }
    if (!hasUpperCase) {
        reasons.push("please include an UpperCase letter");
    }
    if (hasSpace) {
        reasons.push("reomve space!!")
    }
    let isValid;
    if (reasons.length === 0) { 
        isValid = true;
    }
    else {
        isValid = false;
    }
    return {
        valid: isValid,
        reasons
    }
}
let password = checkPassword("helloWorld");
console.log(password);


// Input:  "Hello123"
// Output: { valid: true, reasons: [] }

password = checkPassword("Hello123");
console.log(password);