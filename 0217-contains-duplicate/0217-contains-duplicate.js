/**
 * @param {number[]} nums
 * @return {boolean}
 */
 //BruteForce
// var containsDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) {
//                 return true;
//             }
//         }
//     }

//     return false;
// };

var containsDuplicate = function(nums) {
    let map = new Map();

    for(let ele of nums){
        if(map.has(ele)){
            return true;
        }
        map.set(ele);
    }
    return false;
}