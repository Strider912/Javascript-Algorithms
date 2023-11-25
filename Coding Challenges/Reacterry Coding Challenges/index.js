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
// 👉 Array.reverse
// In this coding challenge, you will be implementing a function called reverseArray(array, value) that takes one argument: an array.
//  The function should reverse the order of the elements in the array.

// Directions
// If the input array is empty, return an empty array.
