Array.prototype.customFilter = function (callbackFun) {
  if (typeof this === "object" && !Array.isArray(this))
    throw new Error("Filters can only used in array instance");

  if (typeof callbackFun !== "function")
    throw new Error("Callback is not a function");

  let array = this;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let isEven = callbackFun(array[i], i, array);
    if (isEven) newArray.push(array[i]);
  }
  return newArray;
};

const isEven = (num) => num % 2 === 0;

const actualResult = [1, 2, 3, 4, 5, 6, 7, 8].customFilter(isEven);

const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8].filter((val) => val % 2 === 0);

console.log({ actualResult, expectedResult });
