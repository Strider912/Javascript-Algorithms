Array.prototype.customMap = function (callbackFun) {
  if (typeof this === "object" && !Array.isArray(this))
    throw new Error("Filters can only used in array instance");

  if (typeof callbackFun !== "function")
    throw new Error("Callback is not a function");

  let array = this;
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let isEven = callbackFun(array[i], i, array);

    if (isEven) {
      newArray.push(isEven);
    }
  }
  return newArray;
};

const squareNum = (num) => num * num;

const actualResult = [1, 2, 3, 4, 5].customMap((val) => val * val);

const expectedResult = [1, 2, 3, 4, 5].map((val) => val * val);

console.log({ actualResult, expectedResult });
