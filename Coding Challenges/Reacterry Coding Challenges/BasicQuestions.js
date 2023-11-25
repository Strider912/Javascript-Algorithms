// Solution 1
const removeWhitespaces = (string) => {
  if (string === "") return string;

  return string.replace(/\s/g, "");
};

// Solution 2
// function removeWhitespaces(string) {
//   if (string === "") return string;

//   let chars = string.split("");

//   let filteredChars = chars.filter((char) => char.trim() !== "");

//   let finalString = filteredChars.join("");

//   return finalString;
// }

function Q1() {
  const result = removeWhitespaces("Hello,   World!"); // Output: 'Hello,World!'
  //   const result = removeWhitespaces("\t  \n\n"); // Output: ''
  console.log({ result });
}

Q1();
// 👉 1) Remove all whitespaces
// In this coding challenge, you will be implementing a function called removeWhitespaces(string) that takes a string as the input.
//  The function should return the string with all the whitespace removed.

// Directions
// If the input string is empty, then return an input string.
// Remember to account for \n and \t.

const reverseArray = (array) => {
  let rightIndex = array.length - 1;
  let temp;

  for (let leftIndex = 0; leftIndex < array.length / 2; leftIndex++) {
    temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    rightIndex--;
  }
};

function Q2() {
  const numbers = [10, 20, 30, 40, 50];
  reverseArray(numbers);
  console.log({ numbers });
}

Q2();
// 👉 2) Array.reverse
// In this coding challenge, you will be implementing a function called reverseArray(array, value) that takes one argument: an array.
//  The function should reverse the order of the elements in the array.

// Directions
// If the input array is empty, return an empty array.

function isLeapYear(year) {
  if (year <= 0) {
    return false; // Year should be greater than 0
  } else if (year % 400 === 0) {
    return true; // Divisible by 400
  } else if (year % 100 === 0) {
    return false; // Divisible by 100, but not by 400
  } else if (year % 4 === 0) {
    return true; // Divisible by 4, but not by 100
  } else {
    return false; // Not divisible by 4
  }
}

function Q3() {
  console.log(isLeapYear(2000)); // true (divisible by 400)
  console.log(isLeapYear(2020)); // true (divisible by 4, but not by 100)
  console.log(isLeapYear(1900)); // false (divisible by 100, but not by 400)
  console.log(isLeapYear(2022)); // false (not divisible by 4)
  console.log(isLeapYear(-100)); // false (year is less than or equal to 0)
}

Q3();
// 👉 3) Leap year
// Write a function isLeapYear(year) that takes in an integer number year as the argument and returns true if year is a leap year, and false otherwise.
// A leap year is:
// divisible by 400
// divisible by 4, but not by 100

// Directions
// Should return false if year is less than or equal to 0.
// Should return true if year is a leap year.
// Should return false if year is not a leap year.
