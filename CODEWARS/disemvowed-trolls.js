const str = "I think Lewis Hamilton will finish the day in p1 HOORAY";

const func = (string) => {
    let arr = string.split('');
    let arr2 = arr.filter(x =>     !x.includes('a') 
                                && !x.includes('e') 
                                && !x.includes('i') 
                                && !x.includes('o') 
                                && !x.includes('u')
                                && !x.includes('A')
                                && !x.includes('E')
                                && !x.includes('I')
                                && !x.includes('O')
                                && !x.includes('U')
                                );
    let result = arr2.join('');
    console.log(result);
    return result;

}

func(str);
