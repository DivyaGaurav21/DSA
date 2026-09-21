/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
   let zeroCount = 0;
   let oneCount = 0;
   let twoCount = 0;
   for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
        zeroCount ++;
    }else if(nums[i] === 1){
        oneCount ++;
    }else{
        twoCount ++;
    }
   }
    for(let i = 0; i < zeroCount; i++){
        nums[i] = 0;
    }
    for(let i = zeroCount; i < zeroCount + oneCount; i++){
        nums[i] = 1;
    }
    for(let i = zeroCount + oneCount; i < nums.length; i++){
        nums[i] = 2;
    }
};