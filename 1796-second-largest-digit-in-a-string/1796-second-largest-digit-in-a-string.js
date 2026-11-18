/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let highest = -1;
    let secondHighest = -1;
    let checkChar = "abcdefghijklmnopqrstuvwxyz"
    for(const char of s){
        if(checkChar.includes(char)) continue;

     const digit = Number(char);

      if(digit === highest || digit === secondHighest) continue;

       if(digit > highest){
        secondHighest  = highest;
        highest = digit;
       }else if(digit > secondHighest){
        secondHighest = digit;
       }

    }
     return secondHighest;
};