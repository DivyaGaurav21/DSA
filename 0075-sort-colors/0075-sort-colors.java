class Solution {

    //BRUTE FORCE
    // public void sortColors(int[] nums) {
    //     int zeroCount = 0;
    //     int oneCount = 0;
    //     int twoCount = 0;
    //     // Count 0s, 1s and 2s
    //     for (int i = 0; i < nums.length; i++) {
    //         if (nums[i] == 0) {
    //             zeroCount++;
    //         } else if (nums[i] == 1) {
    //             oneCount++;
    //         } else {
    //             twoCount++;
    //         }
    //     }
    //     // Put 0s
    //     for (int i = 0; i < zeroCount; i++) {
    //         nums[i] = 0;
    //     }
    //     // Put 1s
    //     for (int i = zeroCount; i < zeroCount + oneCount; i++) {
    //         nums[i] = 1;
    //     }
    //     // Put 2s
    //     for (int i = zeroCount + oneCount; i < nums.length; i++) {
    //         nums[i] = 2;
    //     }
    // }


    // OPTIMAL in one pass
    public void sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while(mid <= high){
            if(nums[mid] == 0){
                nums[mid] = nums[low];
                nums[low] = 0;
                mid ++;
                low ++;
            }else if(nums[mid] == 1){
                mid ++;
            }else{
                nums[mid] = nums[high];
                nums[high] = 2; 
                high --;
            }
        } 
    }

}