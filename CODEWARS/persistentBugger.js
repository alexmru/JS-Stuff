function persistence(num) {
    let counter = 0;
    while(num.toString().length > 1){
        counter++;
       num = num.toString().split('').reduce((a,b) => a*b);
       
    }
    console.log(num);
    return counter;
}



//  console.log(persistence(27));
//  console.log(counter);

console.log(persistence(999));
