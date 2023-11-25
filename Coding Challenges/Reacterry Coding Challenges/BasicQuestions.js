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
