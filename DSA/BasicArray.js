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
