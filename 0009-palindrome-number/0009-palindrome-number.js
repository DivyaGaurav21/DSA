/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = "";
    if(x === 0){
        return true;
    }
    let sign = x > 0 ? "" : "-";
    let num = Math.abs(x);
    while(num > 0){
        let lastDigit = num % 10;
        str = str + lastDigit;
        num = Math.floor(num / 10);
    }
   return String(x) === str + sign;
};