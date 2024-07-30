const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function splitIntoChars(str, wordLength) {
    const chars = [];
    for (let i = 0; i < str.length; i += wordLength) {
        chars.push(str.slice(i, i + wordLength));
    }
    return chars;
}

function splitIntoPairs(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
        pairs.push(str.slice(i, i + 2));
    }
    return pairs;
}


function decode(expr) {

    let res = [];

    const divider = '**********';
    expr = expr.split(divider);
    expr.forEach((word) => {
        const chars = splitIntoChars(word, 10);
        const decodedChar = [];
        chars.forEach((char) => {


            const charsArr = splitIntoPairs(char)
                .map(item => {
                    if (item === '00') return '';
                    if (item === '10') return '.';
                    if (item === '11') return '-';
                })
                .filter(item => item !== '')
                .join('');

            decodedChar.push(charsArr);
        });
        const decodedArray = decodedChar
            .map(morseCode => MORSE_TABLE[morseCode] || '')
            .join('');
        res.push(decodedArray);
    });
    res = res.join(' ');
    return res;
}

module.exports = {
    decode
}