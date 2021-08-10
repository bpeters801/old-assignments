// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capilizeAndLowercase(str){
    let upperCase = str.toUpperCase()
    let lowerCase = str.toLowerCase()
    return upperCase + lowerCase
}
console.log(capilizeAndLowercase("HelLo"))

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(str){
    let middleIndex = (str.length / 2)
    let half = (Math.floor(middleIndex))
    return half
}
console.log(findMiddleIndex("Hello World"))

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(str){
    let half = (str.length / 2)
    let halfWayThrough = str.slice(0, half)
    return halfWayThrough
}
console.log(returnFirstHalf("Testing"))

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capilizeAndLowercase1(str){
    let halfCapital = (str.length / 2)
    let firstHalf = str.toUpperCase().slice(0, halfCapital)
    let secondHalf = str.toLowerCase().slice(halfCapital)
    return firstHalf + secondHalf
}
console.log(capilizeAndLowercase1("This is a test"))