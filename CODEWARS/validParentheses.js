function validParentheses(parens){
    let onesAndZeros = parens.split('').map(x => x === '(' ? 1 : 0).join('');
    do {
        let newStr = onesAndZeros.replace('10', '');
        onesAndZeros = newStr;
    } while(onesAndZeros.includes('10'));
    if(onesAndZeros.length === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(validParentheses("())(()"));


// function validParentheses(parens){
//     var n = 0;
//     for (var i = 0; i < parens.length; i++) {
//       if (parens[i] == '(') n++;
//       if (parens[i] == ')') n--;
//       if (n < 0) return false;
//     }
    
//     return n == 0;
//   }

