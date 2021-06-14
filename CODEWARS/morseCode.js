decodeMorse = function(morseCode){
    const mc = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----", 
    "2": "..---",
    "3": "...--",
    "4": "....-", 
    "5": ".....", 
    "6": "-....", 
    "7": "--...", 
    "8": "---..", 
    "9": "----.", 
    "0": "-----"
    }
    const letters = Object.keys(mc);
    const values = Object.values(mc);

    let decode = morseCode.split(' ').map(x =>
        values.includes(x) ? letters[values.indexOf(x)] : ' '
     );
     console.log(decode);
     return decode.join('');
}

console.log(decodeMorse('...---...'));

// nerezolvata