var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// Remove the last item from the vegetable array.
vegetables.pop()
console.log(vegetables)

// Remove the first item from the fruit array.
fruit.shift()
console.log(fruit)

// Find the index of "orange."
var fruitIndex = fruit.indexOf("orange")
console.log(fruitIndex)

// Add that number to the end of the fruit array.
var newFruit = fruit.push("1")
console.log(fruit)

// Use the length property to find the length of the vegetable array.
console.log(vegetables.length)

// Add that number to the end of the vegetable array.
var newVegetables = vegetables.push("3")
console.log(vegetables)

// Put the two arrays together into one array. Fruit first. Call the new Array "food".
var newArr = fruit.concat(vegetables)
console.log(newArr)

// Remove 2 elements from your new array starting at index 4 with one method.
newArr.splice(4,2)
console.log(newArr)

// Reverse your array.
var reverseArr = newArr.reverse()
console.log(newArr)

// Turn the array into a string and return it.
var stringArr = newArr.join(" ")
console.log(newArr)