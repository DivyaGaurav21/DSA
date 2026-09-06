/**
 * @param {number[]} nums
 * @return {number}
 */

 //BRUTE FORCE
// var singleNumber = function(nums) {
//     let obj = {};
//     for(let i = 0; i < nums.length; i++){
//         if(!obj[nums[i]]){
//             obj[nums[i]] = 1;
//         }else{
//             obj[nums[i]]++;
//         }
//     }
//     for(let key in obj){
//         if(obj[key] === 1){
//             return Number(key);
//         }
//     }
// };

var singleNumber = function(nums) {
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        res ^= nums[i];
    }
    return res;
}