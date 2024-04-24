//Problem Statement: Given an array consisting of only 0s, 1s and 2s.
// Write a program to in-place sort the array without using inbuilt sort functions.
//( Expected: Single pass-O(N) and constant space)
//Example 1:
//Input: nums = [2,0,2,1,1,0]
//Output: [0,0,1,1,2,2]

//Input: nums = [2,0,1]
//Output: [0,1,2]

//	direct sorting algorithm in JS || TC= o(nlogn)
// function sortByComperator(arr) {
//   let res = arr.sort((a, b) => a - b);
//   return res;
// }

//	Approach-1  (TC= o(n))
// function sort012(arr) {
//   let count0 = 0;
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 0) {
//       count0++;
//     }
//     if (arr[i] == 1) {
//       count1++;
//     }
//     if (arr[i] == 2) {
//       count2++;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (i < count0) {
//       arr[i] = 0;
//     } else if (i < count0 + count1) {
//       arr[i] = 1;
//     } else {
//       arr[i] = 2;
//     }
//   }
//   return arr;
// }

//	Approach-3
function sort012Better(arr) {
	let s_idx = 0;
	let e_idx = arr.length - 1;
	let m_idx = 0;
	let temp;

	while(m_idx < e_idx) {
		if(arr[m_idx] == 0) {
			temp = arr[s_idx];
			arr[s_idx] = arr[m_idx];
			arr[m_idx] = temp;
			s_idx++;
			m_idx++;
		}
		if(arr[m_idx] == 1) {
			m_idx++;
		}
		if(arr[m_idx] == 2) {
			temp = arr[e_idx];
			arr[e_idx] = arr[m_idx];
			arr[m_idx] = temp;
			e_idx--;
		}
	}
    return arr;
}

let arr = [2, 0, 2, 1, 1, 0, 2, 2, 1, 0, 0, 0];
// let res = sort012(arr);
// let res = sortByComperator(arr);
let res = sort012Better(arr);
console.log(res)
