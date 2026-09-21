class Solution {
    public void sortColors(int[] nums) {

        int zeroCount = 0;
        int oneCount = 0;
        int twoCount = 0;

        // Count 0s, 1s and 2s
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                zeroCount++;
            } else if (nums[i] == 1) {
                oneCount++;
            } else {
                twoCount++;
            }
        }

        // Put 0s
        for (int i = 0; i < zeroCount; i++) {
            nums[i] = 0;
        }

        // Put 1s
        for (int i = zeroCount; i < zeroCount + oneCount; i++) {
            nums[i] = 1;
        }

        // Put 2s
        for (int i = zeroCount + oneCount; i < nums.length; i++) {
            nums[i] = 2;
        }
    }
}