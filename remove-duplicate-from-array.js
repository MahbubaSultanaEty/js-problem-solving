// Problem 5: Remove Duplicates From Array
// Function name: removeDuplicates(arr)
// Statement:
//  Return a new array where duplicate values are removed, keeping the original order.
// Test case 1
// Input:
//  [5, 3, 5, 2, 3, 9, 2, 7]
// Output:
// [5, 3, 2, 9, 7]

function removeDuplicates(arr) {
    let newArr = [];
    for (let num of arr) {
        // console.log(num);
        if (newArr.includes(num)) {
            continue;
        } else {
            newArr.push(num);
        }
    } return newArr;
}

let numbers = removeDuplicates([5, 3, 5, 2, 3, 9, 2, 7]);
console.log(numbers);

//Test case 2
// Input:
//  [1, 1, 1, 1]
// Output:
// [1]

let numbers2= removeDuplicates([1, 1, 1, 1])
console.log(numbers2);