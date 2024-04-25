// merge two shorted array and return a new shorted array
// let arr1 = [1, 3, 4, 6, 8, 9];
// let arr2 = [2, 5, 7, 10, 11, 12, 13, 14, 15];

// approach 1
// function mergeBySort(arr1, arr2) {
//   let finalArr = [...arr1, ...arr2];
//   let res = finalArr.sort((a, b) => a - b);
//   return res;
// }

//approach 2
function mergeByCustom(arr1, arr2) {
  let res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    res.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    res.push(arr2[j]);
    j++;
  }
  return res;
}

let arr1 = [1, 3, 4, 6, 8, 9];
let arr2 = [2, 5, 7, 10, 11, 12, 13, 14, 15];
let res = mergeByCustom(arr1, arr2);
console.log(res);
