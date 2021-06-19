var findMissing = function (list) {  
    list.sort((a,b) => a - b);
    console.log(list);
    let listSum = list.reduce((a,b) => a+b)
    let diff ;
    if(listSum > 0) {
    if(list[1] - list[0] > list[list.length-1] - list[list.length - 2]) {
            diff = list[list.length-1] - list[list.length - 2];
        } else if(list[1] - list[0] < list[list.length-1] - list[list.length - 2] || list[1] - list[0] === list[list.length-1] - list[list.length - 2]) {
            diff = list[1] - list[0];
        }
    } 
    if(listSum < 0) {
    if(list[1] - list[0] < list[list.length-1] - list[list.length - 2]) {
            diff = list[list.length-1] - list[list.length - 2];
        } else if(list[1] - list[0] > list[list.length-1] - list[list.length - 2] || list[1] - list[0] === list[list.length-1] - list[list.length - 2]) {
            diff = list[1] - list[0];
        }
    } 
    console.log(diff)
    let comparator = list[0];
    for(i=1; i< list.length; i++) {
        comparator += diff;
        if(comparator !== list[i]) {
            return comparator;
        }
    }
  }

// neterminat


console.log(findMissing([21, 15, 12]))