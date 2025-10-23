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
}
