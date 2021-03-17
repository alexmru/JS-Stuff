//sets

const arrayCuNume = ['alex', 'oana', 'alex', 'adi'];
console.log(arrayCuNume);

// const setNume =  new Set(['alex', 'oana', 'alex', 'adi']);
// const setNume2 = new Set(arrayCuNume);

// console.log(setNume);
// console.log(setNume2);

const numeUnice = [...new Set(arrayCuNume)];
console.log(numeUnice);

const varste = new Set();
varste.add(20);
varste.add(30).add(40);
varste.delete(30);


console.log(varste, varste.size);
console.log(varste.has(40));

varste.clear();

console.log(varste);

const ninjas = new Set([{nume: 'alex', varsta: 32}, {nume: 'oana', varsta: 29}, {nume: 'cata', varsta: 30}]);

ninjas.forEach(item => {
    console.log(item.nume);
})

