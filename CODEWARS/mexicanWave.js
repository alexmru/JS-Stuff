function wave(str){
    let array = [];
    let arrLength = str.length;
    for(i=0; i<arrLength; i++) {
        let model = str.split('');
        if(model[i] !== ' ') {
        model.splice(i, 1, model[i].toUpperCase());
        array.push(model.join(''));
            }
        }
    return array;
  }

console.log(wave('  al   exandru'))