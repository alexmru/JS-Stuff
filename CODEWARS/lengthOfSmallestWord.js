let str = 'this is gonna be legendary';

function findShort(s){
    let splitStr = s.split(' ').map(x => x.length);
    return Math.min(...splitStr);
}

console.log(findShort(str));