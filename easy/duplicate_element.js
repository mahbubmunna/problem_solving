function findDuplicateBruteForce(nums) {
  const array = [];

  for (let i = 0; i < nums.length; i++) {
    if (array.includes(nums[i])) {
      return true;
    }
    array.push(nums[i]);
  }
  return false;
}

function findDuplicateOptimal(nums) {
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i]);
  }
  return false;
}

console.log(findDuplicateBruteForce([1, 2, 3]));
console.log(findDuplicateOptimal([1, 3, 4, 4]));
