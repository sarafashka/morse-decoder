const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const exprDec = expr.match(/.{1,10}/g);
    const exprDel = exprDec.map(item => item.replace(/0/g, ' ').trimStart().replace(/ /g, '0'));
    const exprMorse = exprDel.map(item => {
        let newItem = '';
        if (item == '**********') {
            newItem = ' ';
        } else {  
            for (let i=1; i <item.length; i = i +2) {
                if (item[i] == '0') {
                    newItem += '.'
                } else if (item[i] == '1') {
                     newItem += '-'
                }
            }
        }
    return newItem;
    })
    const result = exprMorse.map (item => {
        for (let key in MORSE_TABLE) {
          if (item == key) {
            return MORSE_TABLE[key];
          } else if (item == ' ')
            return item;
        }
    })
    return result.join('');

}

module.exports = {
    decode
}
