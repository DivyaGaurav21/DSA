/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//    let zeroCount = 0;
//    let oneCount = 0;
//    let twoCount = 0;
//    for(let i = 0; i < nums.length; i++){
//     if(nums[i] === 0){
//         zeroCount ++;
//     }else if(nums[i] === 1){
//         oneCount ++;
//     }else{
//         twoCount ++;
//     }
//    }
//     for(let i = 0; i < zeroCount; i++){
//         nums[i] = 0;
//     }
//     for(let i = zeroCount; i < zeroCount + oneCount; i++){
//         nums[i] = 1;
//     }
//     for(let i = zeroCount + oneCount; i < nums.length; i++){
//         nums[i] = 2;
//     }
// };

var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high){
        if(nums[mid] === 0){
            nums[mid] = nums[low];
            nums[low] = 0;
            mid ++;
            low ++; 
        }else if(nums[mid] === 1){
            mid ++;
        }else{
            nums[mid] = nums[high];
            nums[high] = 2;
            high --;
        }
    }
}