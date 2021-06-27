function generateHashtag (str) {
    if(str.trim().length === 0) {
        return false;
    }
    let arr = str.split(' ').map(x =>x.charAt(0).toUpperCase() + x.substring(1));
    let resultedString = '#' + arr.join('');
    if(resultedString.length > 140) {
        return false;
    } else if (resultedString.length <= 140) {
        return resultedString;
    }
}

console.log(generateHashtag('Hello world '))