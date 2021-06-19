function checkString(str) {
    let regx = /\d+/;
    return str.match(regx)[0];
}

console.log(checkString('Alex are 445 mere'))