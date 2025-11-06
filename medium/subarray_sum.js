function subArraySum(nums, k) {
  const sorted = nums.sort((a, b) => a - b);

  let subArray = [];
  for (let left = 0; left < sorted.length; left++) {
    subArray.push(sorted[left]);
    for (let right = left + 1; right < sorted.length; right++) {
      subArray.push(sorted[right]);
      console.log(subArray);
    }
    subArray = [];
  }
}

console.log(subArraySum([1, 1, 1, 2, 3, 4], 2));
