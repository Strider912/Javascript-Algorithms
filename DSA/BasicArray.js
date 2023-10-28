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
