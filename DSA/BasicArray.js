// 👉 1) Reverse an array
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

// 👉 2) Reverse an array
const reverseArrayWithWhileloop = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;
  let temp;
  while (leftIndex < rightIndex) {
    temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
};

function Q1() {
  const numbers = [10, 20, 30, 40, 50];
  reverseArray(numbers);
  //   reverseArrayWithWhileloop(numbers);
  console.log({ numbers });
}

Q1();

// 👉 2) Maximum and minimum of an array using minimum number of comparisons
// Input: arr = [9, 4, 2, 11, 7, 33];
// Output: Minimum element is: 2
//         Maximum element is: 33

const findMaxMin = (array) => {
  if (array.length === 0) {
    console.log("Array is empty");
    return;
  }

  let minElement = array[0];
  let maxElement = array[0];

  for (let i = 1; i < array.length; i += 2) {
    if (i == array.length - 1) {
      minElement = Math.min(minElement, array[i]);
      maxElement = Math.max(maxElement, array[i]);
    } else {
      if (array[i] < array[i + 1]) {
        minElement = Math.min(minElement, array[i]);
        maxElement = Math.max(maxElement, array[i + 1]);
      } else {
        minElement = Math.min(minElement, array[i + 1]);
        maxElement = Math.max(maxElement, array[i]);
      }
    }
  }
  console.log({ minElement, maxElement });
};

function Q2() {
  const numbers = [9, 4, 2, 11, 7, 33];
  findMaxMin(numbers);
}

Q2();

// 👉 3) Find the "Kth" max and min element of an array
// array=[54, 21, 34, 78, 62, 47]
// K = 2;
// Output: kth Min => 34, kth Max => 62

const findkthMinMax = (array, k) => {
  if (k < 1 && k > array.length) {
    console.log("Invalid value of K Provided");
  }

  let minElement, maxElement;
  const sortedArray = array.slice().sort((a, b) => a - b);

  minElement = sortedArray[k - 1];
  maxElement = sortedArray[sortedArray.length - k];
  console.log({ minElement, maxElement, sortedArray });
};

function Q3() {
  const numbers = [54, 21, 34, 78, 62, 47];
  findkthMinMax(numbers, 2);
}

Q3();

// 👉 4) Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order without sort.
// arr = [ 0, 2, 1, 2, 1, 0 ]
// Output: [ 0, 0, 1, 1, 2, 2 ]

const sortArray = (arr) => {
  let array = arr.slice();
  let low = 0;
  let mid = 0;
  let high = array.length - 1;

  while (mid <= high) {
    switch (array[mid]) {
      case 0:
        [array[low], array[mid]] = [array[mid], array[low]];
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [array[mid], array[high]] = [array[high], array[mid]];
        high--;
        break;
    }
  }
  return array;
};

function Q4() {
  const arr = [0, 2, 1, 2, 1, 0];
  const finalArray = sortArray(arr);
  console.log({ arr, finalArray });
}

Q4();

// 👉 5) Move all negative numbers to beginning and positive to end without extra space
// Input: [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// Output:[  -12, -13, -5, -7, -3,-6,   5,  6, 11]

const reArrange = (array) => {
  if (array.length === 0) {
    console.log("Array is empty");
    return;
  }
  let j = 0;
  let temp;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      if (i != j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
  }
};

function Q5() {
  const array = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
  reArrange(array);
  console.log({ array });
}

Q5();
