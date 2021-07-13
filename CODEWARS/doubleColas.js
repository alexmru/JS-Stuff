function whoIsNext(names, r){

 for(i=1; i<=r; i++) {
     let colaDrinker = names.shift();
     names.push(colaDrinker, colaDrinker);

 } 

 console.log(names);
 return names[names.length - 1];
}

console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 2));

/// trebuie gasita o solutie eficienta deoarece la numere mari da time-out