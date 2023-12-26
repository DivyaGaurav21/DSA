// Given an array A of n positive numbers. The task is to find the first equilibrium point in an array. Equilibrium point in an array is an index (or position) such that the sum of all elements before that index is same as sum of elements after it.

// Note: Return equilibrium point in 1-based indexing. Return -1 if no such point exists.

// Example 1:

// Input:
// n = 5
// A[] = {1,3,5,2,2}
// Output:
// 3
// Explanation:
// equilibrium point is at position 3 as sum of elements before it (1+3) = sum of elements after it (2+2).

// Example 2:

// Input:
// n = 1
// A[] = {1}
// Output:
// 1
// Explanation:
// Since there's only element hence its only the equilibrium point.


function findEquilibriumIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
      let leftSum = 0;
      let rightSum = 0;
      // Calculate sum of elements to the left of the current index
      for (let j = 0; j < i; j++) {
        leftSum += arr[j];
      }
      // Calculate sum of elements to the right of the current index
      for (let k = i + 1; k < arr.length; k++) {
        rightSum += arr[k];
      }
      // Check if the left and right sums are equal
      if (leftSum === rightSum) {
        return i+1;
      }
    }
  
    // If no equilibrium index is found, return -1
    return -1;
  }
  
  // Example usage
//   const inputArray = [1, 7, 3, 6, 5, 6];
//   const equilibriumIndex = findEquilibriumIndex(inputArray);
//   console.log("Equilibrium Index:", equilibriumIndex);
  

// ------------   Approach -2 ----------------//

function findEquilibriumIndex2(arr) {
    const n = arr.length;
  
    // Calculate the total sum of the array
    let totalSum = 0;
    for (let i = 0; i < n; i++) {
      totalSum += arr[i];
    }
  
    let leftSum = 0;
  
    for (let i = 0; i < n; i++) {
      // Subtract the current element from the total sum
      totalSum -= arr[i];
  
      // Check if the left and right sums are equal
      if (leftSum === totalSum) {
        return i;
      }
  
      // Add the current element to the left sum
      leftSum += arr[i];
    }
  
    // If no equilibrium index is found, return -1
    return -1;
  }
  
  // Example usage
  const inputArray = [1, 7, 3, 6, 5, 6];
  const equilibriumIndex = findEquilibriumIndex2(inputArray);
  console.log("Equilibrium Index:", equilibriumIndex);
  