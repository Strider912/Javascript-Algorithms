Array.prototype.customReduce = function (callbackFun, initialVal) {
  if (typeof this === "object" && !Array.isArray(this))
    throw new Error("Filters can only used in array instance");

  if (typeof callbackFun !== "function")
    throw new Error("Callback is not a function");

  let array = this;
  let index = 0;
  let initialValue = initialVal;
  let previousValue;

  if (array.length === 0) {
    if (initialValue || initialValue === 0) return initialVal;
    else throw new Error("Array must be provided with initialValue");
  }

  if (initialValue || initialValue === 0) previousValue = initialVal;
  else previousValue = array[index++];

  while (index < array.length) {
    previousValue = callbackFun(previousValue, array[index], index, array);
    index++;
  }
  return previousValue;
};

const array = [];
const initialValue = 0;

const callback = (prev, curr) => prev + curr;

const actualResult = array.customReduce(callback, initialValue);
const expectedResult = array.reduce(callback, initialValue);

console.log({ actualResult, expectedResult });
