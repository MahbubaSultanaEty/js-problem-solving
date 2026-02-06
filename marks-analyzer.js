// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }


// ----------------       ----------------
// Take an object of marks as input
// The function receives an object of student marks.

// Prepare a variable for total marks
// A variable is created to store the sum of all marks.

// Prepare a variable for highest mark
// This variable will track the highest mark found so far.

// Prepare a variable for lowest mark
// This variable will track the lowest mark found so far.

// Prepare a variable for highest scoring subject
// This will store the subject name with the highest marks.

// Prepare a variable for lowest scoring subject
// This will store the subject name with the lowest marks.

// Go through each subject one by one
// A loop runs through the marks object.
// Read the mark for the current subject

// The value (marks) of the current subject is accessed.

// Add the mark to total
// Each mark is added to the total marks variable.

// Check if this is the highest mark

// If the current mark is greater than the stored highest mark, update it and save the subject name.

// Check if this is the lowest mark
// If the current mark is smaller than the stored lowest mark, update it and save the subject name.

// Repeat for all subjects

// The loop continues until all subjects are processed.

// Calculate the average marks
// Total marks are divided by the number of subjects.

// Return the result as an object
// The function returns total, average, highest subject, and lowest subject.

function analyzeMarks(marksObj) {
    let total = 0;
    let highestMark = -Infinity;
    let lowestMark = Infinity;

    let lowestSubject = null;
    let highestSubject = null;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;

        if (mark > highestMark) {
            highestMark = marksObj[subject];
            highestSubject = subject;
        }
        if (mark < lowestMark) {
            lowestMark = marksObj[subject];
            lowestSubject = subject;
        }
    } // console.log(lowestSubject);
    let average = total / Object.keys(marksObj).length;
    return {
        total,
        highestSubject: highestMark,
        lowestSubject: lowestMark,
        average
    }
}
let marks = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
  console.log(marks);