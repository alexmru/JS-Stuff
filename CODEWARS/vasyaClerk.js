function tickets(peopleInLine){
  let twentyFive = 0;
  let fifty = 0;
  let hundred = 0;
  for(i=0; i< peopleInLine.length; i++) {
      if(peopleInLine[i] === 25) {
          twentyFive++;
      } else if (peopleInLine[i] === 50) {
          if(twentyFive> 0) {
            twentyFive--;
            fifty++;
          } else if(twentyFive <= 0) {
              return "NO";
          }
      } else if (peopleInLine[i] === 100) {
          if(fifty > 0 && twentyFive > 0) {
              fifty--;
              twentyFive--;
          } else if(fifty <= 0 && twentyFive > 2) {
              twentyFive -= 3;
          } else {
              return "NO"
          }
      }
  }
  console.log(twentyFive, fifty, hundred);
  return "YES";

}

console.log(tickets([25,50,25,100,25,25,50,100,25,50,25,100,25,50,25,100,50,25]));