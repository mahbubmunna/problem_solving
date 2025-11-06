function checkValidParenthesesOrder(s) {
  const stack = [];

  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const openings = ["(", "{", "["];

  for (const char of s) {
    if (openings.includes(char)) {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(checkValidParenthesesOrder("(((("));
console.log(checkValidParenthesesOrder("()(){}[]"));
console.log(checkValidParenthesesOrder("([{}])"));
