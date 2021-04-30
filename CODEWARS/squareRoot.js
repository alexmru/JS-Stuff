var isSquare = function(n){
    const sqrt = Math.sqrt(n) % 1;
    if(sqrt === 0) {
        return true;
    } else { 
        return false;
    }
   }

   isSquare(71);