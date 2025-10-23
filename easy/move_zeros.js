function moveZeros(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
      nums.splice(i, 1);
    }
  }

  for (let i = 0; i < count; i++) {
    nums.push(0);
  }

  return nums;
}

console.log(moveZeros([2, 3, 4, 0, 10, 10, 12]));
