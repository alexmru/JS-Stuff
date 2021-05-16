function solution(number){
  let i = 0;
  let collection = [];
  while(i < number) {
      if(i % 3 === 0 || i % 5 === 0) {
        collection.push(i); 
      }
      i++;
  }
  if(collection.length === 0) {
      return 0;
  } else{
  return collection.reduce((a,b) => a+b);
}
}

console.log(solution(0));