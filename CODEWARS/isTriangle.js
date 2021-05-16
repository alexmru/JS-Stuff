function isTriangle(a,b,c){
   if ((a + b) <= c || (a + c) <= b || (c + b) <= a) {
       return false;
   } else if(a <= 0 || b <= 0 || c <= 0) {
        return false ;
   } else {
       return true;
   }
}

console.log(isTriangle(4, 5, 9));