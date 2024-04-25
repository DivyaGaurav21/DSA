// question
// given an unsorted a of size n , having both
// negative and positive element
// task:- to segregate element like
// input:8
// arr[] = {1,-1,3,2,-7,-5,11,6}
// o/p=> {1,3,2,11,6,-1,-7,-5}
// Note=> Dont change the order of positive and negative element

// o(n) space complexicity
function segregateElements(arr) {
  const result = [];
  // Collect positive elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }
  // Collect negative elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      result.push(arr[i]);
    }
  }
  return result;
}

// O(1) space by two pointer approach
//NOTE: this can segregate negative/positive elements but not in the order of positive and negative element
function segregateNegativeElementBetter(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    if (arr[left] > 0) {
      left++;
    } else if (arr[right] < 0) {
      right--;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return arr;
}

let arr = [1, -1, 3, 2, -7, -5, 11, 6];
// let res = segregateNegativeElement(arr);
let res = segregateNegativeElementBetter(arr);
console.log(res);
