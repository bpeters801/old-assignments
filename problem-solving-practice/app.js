//Write a function that takes an array of numbers and returns the largest
const arr = ([3, 5, 2, 8, 1]); // => 8
largest = 0;

arr.forEach ((element) => {
    if (largest < element) {
        largest = element;
    }
})

console.log(`The largest number in the array : ${largest}`);

//Write a function that takes an array of words and a character and returns each word that has that character present.

function lettersWithStrings(array, x) {
    let arrayWithMatches = [];
    for (let i = 0; i < array.length; i++) {
        let arrayValue = array[i].split('');
        for (let n = 0; n < arrayValue.length; n++) {
            if (arrayValue[n] == x) {
                arrayWithMatches.push(arrayValue.join(''));
            } 
        }
    }
    return arrayWithMatches;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"))

//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.


let isDivisible = (num1, num2) => {
    if(num1 % num2 === 0) {
        console.log("true")
    }
    else{
        console.log("false")
    }
    
}

isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false



