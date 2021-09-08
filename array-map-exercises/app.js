// 1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
    return arr.map(num => num * 2);
  }
  
  console.log(doubleNumbers([2, 5, 100])); 

  // 2) Take an array of numbers and make them strings
  
  function stringItUp(arr){
    return arr.map(num => num.toString())
  }
  
  console.log(stringItUp([2, 5, 100])); 

  // 3) Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase())
  }
  
  console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
  
//   //4) Make an array of strings of the names

  function namesOnly(arr){
    return arr.map(names => names.name)
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

//5) Make an array of strings of the names saying whether or not they can go to The Matrix
  
  function makeStrings(arr){
    return arr.map(matrix => {
        if (matrix.age > 17){
            return matrix.name + " can go to The Matrix"
        } else {
            return matrix.name + " is under age!!"
        }
    })
  }
  
  console.log(makeStrings([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 

// 6) Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    return arr.map(name => "<h1>" + name.name + "</h1><h2>" + name.age + "</h2>")
  }
  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 