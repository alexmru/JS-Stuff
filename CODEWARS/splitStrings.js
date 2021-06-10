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

// Solutie simpla si la obiect

// function solution(str){
//     var i = 0;
//     var result = new Array();
//     if (str.length % 2 !== 0) {
//       str = str + '_';
//     }
//     while (i < str.length) {
//         result.push(str[i] + str[i+1]);
//         i += 2;
//       }
//     return result;
//   }