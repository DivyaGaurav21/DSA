// find common element of array
// i/p:-
//    arr1 = 2 6 8 5 4 3
//	  arr2 = 2 3 4 7
//o/p:;-2 4 3

//	i/p:-
//	arr1 = 10 10
//	 arr2 = 10
//	 o/p:-10

function intersection(arr1, arr2) {
  // Convert arrays to sets
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];
  set1.forEach((element) => {
    if (set2.has(element)) {
      result.push(element);
    }
  });
  return result;
}

let arr1 = [2, 2, 6, 8, 3, 5, 4, 3];
let arr2 = [2, 3, 4, 7];
let res = intersection(arr1, arr2);
console.log(res);
