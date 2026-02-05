// Problem 4: Shopping Bill Calculator
// Function name: calcBill(prices, items)
// Statement:  Calculate total bill amount and count how many times each item appears.
// Test case 1
// Input:
//      prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
//      items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

// Output:
// {
//   total: 376,
//   itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
// }

// --------------     --------------

// Take prices and items as input

// The function receives:

// an object of prices (item → price)

// an array of purchased items (list of item names)

// Prepare an empty object to count items
// An empty object is created to store:

// each item name as a key
// how many times that item appears as the value

// Go through the items list one by one
// A loop runs over the items array.

// Count how many times each item appears
// If the item already exists in the object, its count is increased

// If the item does not exist, it is added with count 1

// Prepare a variable for total bill
// A variable is created to store the final bill amount.
// Go through each counted item

// A loop runs over the item-count object.
// Get price and quantity for each item

// The price is taken from the prices object
// The quantity is taken from the item-count object

// Calculate total price for each item

// Price is multiplied by quantity
// This gives the cost for that item

// Add item cost to the total bill
// Each item’s total cost is added to the final total
// Repeat until all items are processed

// The loop continues until every item is calculated
// Return the final result
// The function returns an object containing:
// the total bill amount
// the item-wise quantity breakdown

function calcBill(prices, items) {
    let itemCount = {}
    
    for (let item of items) {
        if (itemCount.hasOwnProperty(item)) {
            itemCount[item]++;
        }
        else {
            itemCount[item] = 1;
        }
    }
    // console.log(itemCount);
    let total = 0;
    for (let item in itemCount) {
        let price = prices[item];
        let quantity = itemCount[item];
        let pricesWithQuantity = price * quantity;
        total += pricesWithQuantity;
    } 
    return {
        total,
        itemCount
    }
}

let bill = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, ["egg", "egg", "rice", "oil", "egg", "sugar"])
console.log(bill);



// Test case 2
// Input:
// prices = { pen: 10, book: 50 };
// items = ["pen", "pen", "book", "pen"];
bill = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"])

// test case 03
let output2 = calcBill(
  { apple: 30, banana: 10, orange: 20 },
  ["apple", "banana", "apple", "orange", "banana", "banana"]
);
console.log(output2);