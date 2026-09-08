/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sign = x > 0 ? 1 : -1;
    let revNum = 0;
    let num = Math.abs(x);
    while(num > 0){
        let rem = num % 10;
        revNum = revNum * 10 + rem;
        num = Math.floor(num/10);
    }
    revNum = revNum * sign;
     if (revNum < -2147483648 || revNum > 2147483647) {
        return 0;
    }
    return revNum;
};