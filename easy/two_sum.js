/**
 * Two Sum Problem
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Because nums[0] + nums[1] = 2 + 7 = 9
 */

//O(n²)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumHashMap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

function twoSum(nums, target) {
  return twoSumHashMap(nums, target);
}

// Test cases
// Test both approaches
console.log("=== Testing Brute Force Approach ===");
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSumBruteForce([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSumBruteForce([3, 3], 6)); // Expected: [0, 1]

console.log("\n=== Testing Hash Map Approach ===");
console.log(twoSumHashMap([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSumHashMap([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSumHashMap([3, 3], 6)); // Expected: [0, 1]

console.log("\n=== Using Default (Optimized) Function ===");
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]

// Run with: node two_sum.js
