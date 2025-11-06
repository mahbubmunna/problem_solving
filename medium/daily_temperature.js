console.log(dailyTemperature([1, 2, 3, 4, 5, 6, 7, 3, 4, 5, 6, 7]));

function dailyTemperature(temperatures) {
  const stack = [];
  const result = new Array(temperatures).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const lastIndex = stack.pop();
      result[lastIndex] = i - lastIndex;
    }

    stack.push[i];
  }

  return result;
}
