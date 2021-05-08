function XO(str) {
    let stringToLower = str.toLowerCase();
    let xArray = stringToLower.split('').filter(n => n === 'x');
    let oArray = stringToLower.split('').filter(n => n === 'o');
    if(xArray.length === oArray.length) {
        return true;
    } else {
        return false;
    }
}

console.log(XO('jj'));