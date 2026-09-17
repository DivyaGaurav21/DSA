class Solution {
    public int reverse(int x) {
        int sign = x > 0 ? 1 : -1;
        long revNo = 0;
        int num = Math.abs(x);
        while(num > 0){
            int rem = num % 10;
            revNo = revNo * 10 + rem;
            num = num / 10; 
        }
        revNo = revNo * sign;
        if(revNo < Integer.MIN_VALUE || revNo > Integer.MAX_VALUE){
            return 0;
        }
        return (int)revNo;
    }  
}