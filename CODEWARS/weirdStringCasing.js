function toWeirdCase(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let parity = 'even';
    let newStringArray = [];
    for(i=0; i<string.length; i++ ) {
        let char = string.charAt(i);
        if(alphabet.includes(char) && parity === 'even') {
            newStringArray.push(char.toUpperCase());
            parity = 'odd';
        } else if(alphabet.includes(char) && parity === 'odd') {
            newStringArray.push(char.toLowerCase());
            parity = 'even';
        } else if(char === ' ') {
            newStringArray.push(char);
            parity = 'even';
        }
    }
    return newStringArray.join('');
}

console.log(toWeirdCase('this is a test'));