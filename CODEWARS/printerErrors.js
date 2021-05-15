function printerErrors(s) {
    let arrString = s.split('');
    let errorsArr = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let errorCount = arrString.filter(x => errorsArr.includes(x)).length;
    return `${errorCount}/${s.length}`;
}

console.log(printerErrors('asdasnjxcnzxcnuqounasndlasd'));