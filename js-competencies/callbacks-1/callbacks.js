//////////////////PROBLEM 1////////////////////

// Write a function called stringItOut that takes in an array. Determine if it is an array of numbers or strings and sort it greatest to least accordingly (sort strings alphabetically). Return the array converted into a string using the toString method.

//Code here
function stringItOut (arr) {
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === "string"){
      let string = arr.sort()
      let reverse = string.reverse()
      return reverse.toString()
    } else if (typeof arr[i] === "number"){
      let number = arr.sort((a,b) => b - a)
      return number.toString()
    }
  }
}

//////////////////PROBLEM 2////////////////////

// Given the functions below: invoke the function math passing in complex, 2, and 3 as parameters. Save the result to a variable called mathResult.

function math(cb, num1, num2) {
  return cb(num1, num2)
}

function complex(num1, num2) {
  return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
}

//Code here
const mathResult = math(complex, 2, 3)