function toCamelCase(str){
    let arr1 = [];
    if(str.split('').includes('-')) {
        arr1 = str.split('-');
    } else if(str.split('').includes('_')){
        arr1 = str.split('_');
    }
    let arrCamelCase = new Array;
    let camelCaseItem;
    for(i=1; i< arr1.length; i++ ) {
        camelCaseItem = arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
        arrCamelCase.push(camelCaseItem);
    }
    arrCamelCase.unshift(arr1[0]);
    return arrCamelCase.join('');
}   

console.log(toCamelCase('the_stealth_warrior'))