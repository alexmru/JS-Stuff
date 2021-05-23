let stringOne = 'Here we stand or here we fall History wont care at all Make the bed light the light Lady mercy wont be home tonight yeah';
function characterCounter(str) {
    let counts = {};

    let ch, i, count;
    
    for (i=0; i< str.length; i++) {
        //itereaza pe rand , fiecare litera din string
        ch = str.charAt(i);
        //atribuie count fiecarei litere din array-ul [ch] care urmeaza sa fie creat prin FOR LOOP
        count = counts[ch];
        //verifica daca exista count , daca nu exista atribuie 1 , daca exista adauga 1
        counts[ch] = count ? count + 1 : 1 ;
    }
    // returneaza un obiect cu key / value pairs 
    // unde keys sunt literele si valorile sunt numarul de apartii a fiecarei litere in string
    return counts;
}


console.log(characterCounter(stringOne));