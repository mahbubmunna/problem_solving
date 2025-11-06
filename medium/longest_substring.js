function findLongestSubString(str) {
  let subString = "";
  let heighstCount = 0;

  for (const char of str) {
    if (subString.includes(char)) {
      if (subString.length > heighstCount) heighstCount = subString.length;
      const position = subString.indexOf(char);
      subString = subString.slice(position + 1);
    }
    subString += char;
  }

  return Math.max(heighstCount, subString.length);
}

function longestSubStringOptimal(str) {
  let left = 0;
  let maxLen = 0;
  const seen = new Set();

  for (let right = 0; right < str.lenth; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(longestSubStringOptimal("abcabcbbbabcdklm"));
