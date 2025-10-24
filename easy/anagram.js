function anagramBruteForce(s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join("") === t.split("").sort().join("");
}

function anagramOptimal(s, t) {
  if (s.length !== t.length) return false;

  const count = {};
  for (const char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of t) {
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

// --- Test ---
console.log("Sort:", anagramBruteForce("anagram", "nagaram")); // true
console.log("Map:", anagramOptimal("anagram", "nagaram")); // true

console.log("Sort:", anagramBruteForce("rat", "car")); // false
console.log("Map:", anagramOptimal("rat", "car")); // false
