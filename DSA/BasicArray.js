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

  let minNumber = array[0];
  let maxNumber = array[0];

  for (let i = 1; i < array.length; i += 2) {
    if (i == array.length - 1) {
      minNumber = Math.min(minNumber, array[i]);
      maxNumber = Math.max(maxNumber, array[i]);
    } else {
      if (array[i] < array[i + 1]) {
        minNumber = Math.min(minNumber, array[i]);
        maxNumber = Math.max(maxNumber, array[i + 1]);
      } else {
        minNumber = Math.min(minNumber, array[i + 1]);
        maxNumber = Math.max(maxNumber, array[i]);
      }
    }
  }
  console.log({ minNumber, maxNumber });
};

function Q2() {
  const numbers = [9, 4, 2, 11, 7, 33];
  findMaxMin(numbers);
}

Q2();
