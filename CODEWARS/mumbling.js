const str = 'BabaganarD';


function accum(string) {
	const arr1 = string.split('');
    let arr2 = [];
    for(i=0; i< arr1.length; i++) {
        arr2.push(arr1[i].repeat(i+1));
    }
    let finalArr = [];
    for(n=0; n < arr2.length; n++) {
        let item = arr2[n];
        let cutItem = arr2[n].substring(1).toLowerCase();
        let firstLetter = item[0].toUpperCase();
        let finalItem = firstLetter + cutItem;
        finalArr.push(finalItem);
    }
    let finalString = finalArr.join('-');
    console.log(finalString);
    
}

accum(str);