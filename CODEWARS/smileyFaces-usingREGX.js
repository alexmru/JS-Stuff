function countSmileys(arr) {
    let counter = 0;
    let regx = /[;:][-~]?[)D]/i;
    for(i=0; i<arr.length; i++) {
        let item = arr[i];
        if(regx.test(item)) {
            counter++;
        }
        
    }
    console.log(counter);
}

countSmileys([':D', ':)',':-D', ':~)']);

// Alte variante 

// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
//   }