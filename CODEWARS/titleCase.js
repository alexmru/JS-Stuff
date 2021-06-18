function titleCase(title, minorWords) {
    let titleArr = title.toLowerCase().split(' ');
    if(!minorWords) {
        let result = [];
        for(i=0; i< titleArr.length; i++) {
            result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].substring(1))
        }
        return result.join(' ');
    } else if (title === minorWords) {
        return title.charAt(0).toUpperCase() + title.substring(1);
    } else if (minorWords) {
        let minorArr = minorWords.toLowerCase().split(' ');
        let result = [];
        result.push(titleArr[0].charAt(0).toUpperCase() + titleArr[0].substring(1))
        for(i=1; i< titleArr.length; i++) {
            minorArr.includes(titleArr[i]) 
            ? result.push(titleArr[i].charAt(0).toLowerCase() + titleArr[i].substring(1)) 
            : result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].substring(1))
        }
        return result.join(' ');
    } 

    
}

console.log(titleCase('a clash of KINGS', 'a an the OF'))