/**
 * @param {number[]} nums
 * @return {number[]}
 */

//BRUTE_FORCE
// var rearrangeArray = function(nums) {
//   let neg = [];
//   let pos = [];
//   for(let i = 0; i < nums.length; i++){
//     if(nums[i] > 0){
//         pos.push(nums[i]);
//     }else{
//         neg.push(nums[i]);
//     }
//   }
//   for(let i = 0; i < Math.floor(nums.length/2); i++){
//        nums[2*i] = pos[i];
//        nums[2*i+1] = neg[i];
//   }
//   return nums;
// };

//OPTIMAL
var rearrangeArray = function(nums) {
   let segArr = [];
   let pos = 0;
   let neg = 1;
   for(let i = 0; i < nums.length; i++){
    if(nums[i] > 0){
        segArr[pos] = nums[i];
        pos += 2;
    }else{
       segArr[neg] = nums[i];
       neg += 2;
    }
   }
   return segArr;
};

