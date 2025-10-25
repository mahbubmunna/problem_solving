//Input: strs = ["eat","tea","tan","ate","nat","bat"]

//Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
//
function groupAnagram(strs) {
  const map = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

function groupAnagramOptimal(strs) {
  const map = new Map();
  for (const word of strs) {
    const freq = new Array(26).fill(0);

    for (const char of word) {
      const index = char.charCodeAt(0) - "a".charCodeAt(0);
      freq[index]++;
    }

    const key = freq.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagramOptimal(["eat", "tea", "tan", "ate", "nat", "bat"]));
