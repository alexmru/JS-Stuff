function isValidIP(str) {
    if(!str.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/)) {
        return false;
    } 
    let numbers = str.split('.');
    for(i=0; i< numbers.length; i++) {
        console.log(i);
        if(numbers[i].charAt(0) === '0' && numbers[i].length > 1) {
            return false;
        }
        if(Number(numbers[i]) > 255 || Number(numbers[i]) < 0) {
            return false;
        }
    }
    return true;
}


console.log(isValidIP('224.126.0.2'));