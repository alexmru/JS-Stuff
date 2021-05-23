var counter = 0;

function persistence(num) {
    const numberSum = num.toString().split('').reduce((a,b) => a*b);
    counter ++;
    if(numberSum > 9) {
        return persistence(numberSum);
    
    } else if(numberSum <= 9){ 
        console.log(counter);
    }
    
 }


//  console.log(persistence(27));
//  console.log(counter);

persistence(4);
