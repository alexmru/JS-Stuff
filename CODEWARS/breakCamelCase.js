function solution(string) {
    let alphabetLC = 'abcdefghijklmnopqrstuvwxyz';
    let alphabetUC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let array = string.split('');
    let result = [];
    for(i=array.length-1; i>=0; i--) {
        alphabetLC.split('').includes(array[i]) ? result.unshift(array[i]) : result.unshift(' ' + array[i]);
    }
    return result.join('');
}

console.log(solution('alexAreMere'));

// Super solutie

// function solution(string) {
//     return(string.replace(/([A-Z])/g, ' $1'));
  
//   }