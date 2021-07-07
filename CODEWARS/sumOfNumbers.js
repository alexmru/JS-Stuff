function getSum( a,b ){
   let arr = [];
   if(a < b) {
   for(i=a; i<=b; i++) {
       arr.push(i);
   }
   return arr.reduce((x,y) => x+y);
} else if (b > a) {
    for(i=b; i<=a; i++) {
        arr.push(i);
    }
   return arr.reduce((x,y) => x+y);

} else {
    return a;
}
}

console.log(getSum(-1,1));