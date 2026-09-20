class Solution {
    //Pattern - Two Pointer Approach
    public int[] twoSum(int[] numbers, int target) {
         int i = 0;
         int j = numbers.length - 1;
         while(i < j){
            int sumRes = numbers[i] + numbers[j];
            if(sumRes == target){
                return new int[]{i+1 , j+1};
            }else if(sumRes > target){
                j--;
            }else{
                i++;
            }
         }
         return new int[]{-1 , -1};
    }
}