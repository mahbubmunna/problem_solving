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

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));
