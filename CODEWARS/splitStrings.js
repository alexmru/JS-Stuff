function solution(str){
    if (str.length === 0) {
        return [];
    }
    let array = str.match(/(..?)/g);
    if(array[array.length-1].length !== 2) {
        let lastItem = array.pop();
        lastItem += '_';
        array.push(lastItem);
        return array;
    } else {
        return array;
    }
}

console.log(solution(''));