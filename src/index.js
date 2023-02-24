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
	const arr = expr.split('')
	const sortArr = []; 
	const subarr = [];
	const morse = [];
	const result = [];

	for (let i = 0; i < arr.length - 1; i = i + 2) {
		sortArr.push(arr[i] + arr[i + 1]);
	}
		
	let size = 5;
	for (let i = 0; i <Math.ceil(sortArr.length/size); i++){
			subarr[i] = sortArr.slice((i*size), (i*size) + size);
	}

	for (let i = 0; i < subarr.length; i++) {
		for (let j = 0; j < subarr[i].length; j++) {
			if (subarr[i][j] === '00' || subarr[i][j] === '**') {
				subarr[i][j] = '';
			} if (subarr[i][j] === '10') {
				subarr[i][j] = '.';
			} if (subarr[i][j] === '11') {
				subarr[i][j] = '-';
			}
		}
	}

	for (let i = 0; i < subarr.length; i++) {
		morse.push(subarr[i].toString().replace(/[,]/gi, ''));
	};

	for (let i = 0; i < morse.length; i++) {
		let morseLetter = morse[i];
		if (morseLetter === '') {
			result.push('.')
		} else {
			result.push(MORSE_TABLE[morseLetter]);
		}
	}

	return result.join().replace(/[,]/gi, '').replace(/[.]/gi, ' ');
}

module.exports = {
    decode
}