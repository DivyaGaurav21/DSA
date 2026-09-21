class Solution {
    // public void moveZeroes(int[] nums) {
    //     int index = 0;
    //     for(int i = 0; i < nums.length; i++){
    //         if(nums[i] != 0){
    //             int temp = nums[i];
    //             nums[i] = nums[index];
    //             nums[index] = temp;
    //             index ++;
    //         }
    //     }
    // }

public void moveZeroes(int[] nums) {
    int left = 0;
    int right = 0;
    while(right < nums.length){
        if(nums[right] != 0){
            int temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left ++;
            right ++;
        }else{
            right ++;
        }
    } 
}

}