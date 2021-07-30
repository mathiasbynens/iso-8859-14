/*! https://mths.be/iso-8859-14 v3.0.0 by @mathias | MIT license */

const stringFromCharCode = String.fromCharCode;

const INDEX_BY_CODE_POINT = new Map([
	[128, 0],
	[129, 1],
	[130, 2],
	[131, 3],
	[132, 4],
	[133, 5],
	[134, 6],
	[135, 7],
	[136, 8],
	[137, 9],
	[138, 10],
	[139, 11],
	[140, 12],
	[141, 13],
	[142, 14],
	[143, 15],
	[144, 16],
	[145, 17],
	[146, 18],
	[147, 19],
	[148, 20],
	[149, 21],
	[150, 22],
	[151, 23],
	[152, 24],
	[153, 25],
	[154, 26],
	[155, 27],
	[156, 28],
	[157, 29],
	[158, 30],
	[159, 31],
	[160, 32],
	[163, 35],
	[167, 39],
	[169, 41],
	[173, 45],
	[174, 46],
	[182, 54],
	[192, 64],
	[193, 65],
	[194, 66],
	[195, 67],
	[196, 68],
	[197, 69],
	[198, 70],
	[199, 71],
	[200, 72],
	[201, 73],
	[202, 74],
	[203, 75],
	[204, 76],
	[205, 77],
	[206, 78],
	[207, 79],
	[209, 81],
	[210, 82],
	[211, 83],
	[212, 84],
	[213, 85],
	[214, 86],
	[216, 88],
	[217, 89],
	[218, 90],
	[219, 91],
	[220, 92],
	[221, 93],
	[223, 95],
	[224, 96],
	[225, 97],
	[226, 98],
	[227, 99],
	[228, 100],
	[229, 101],
	[230, 102],
	[231, 103],
	[232, 104],
	[233, 105],
	[234, 106],
	[235, 107],
	[236, 108],
	[237, 109],
	[238, 110],
	[239, 111],
	[241, 113],
	[242, 114],
	[243, 115],
	[244, 116],
	[245, 117],
	[246, 118],
	[248, 120],
	[249, 121],
	[250, 122],
	[251, 123],
	[252, 124],
	[253, 125],
	[255, 127],
	[266, 36],
	[267, 37],
	[288, 50],
	[289, 51],
	[372, 80],
	[373, 112],
	[374, 94],
	[375, 126],
	[376, 47],
	[7682, 33],
	[7683, 34],
	[7690, 38],
	[7691, 43],
	[7710, 48],
	[7711, 49],
	[7744, 52],
	[7745, 53],
	[7766, 55],
	[7767, 57],
	[7776, 59],
	[7777, 63],
	[7786, 87],
	[7787, 119],
	[7808, 40],
	[7809, 56],
	[7810, 42],
	[7811, 58],
	[7812, 61],
	[7813, 62],
	[7922, 44],
	[7923, 60]
]);
const INDEX_BY_POINTER = new Map([
	[0, '\x80'],
	[1, '\x81'],
	[2, '\x82'],
	[3, '\x83'],
	[4, '\x84'],
	[5, '\x85'],
	[6, '\x86'],
	[7, '\x87'],
	[8, '\x88'],
	[9, '\x89'],
	[10, '\x8A'],
	[11, '\x8B'],
	[12, '\x8C'],
	[13, '\x8D'],
	[14, '\x8E'],
	[15, '\x8F'],
	[16, '\x90'],
	[17, '\x91'],
	[18, '\x92'],
	[19, '\x93'],
	[20, '\x94'],
	[21, '\x95'],
	[22, '\x96'],
	[23, '\x97'],
	[24, '\x98'],
	[25, '\x99'],
	[26, '\x9A'],
	[27, '\x9B'],
	[28, '\x9C'],
	[29, '\x9D'],
	[30, '\x9E'],
	[31, '\x9F'],
	[32, '\xA0'],
	[33, '\u1E02'],
	[34, '\u1E03'],
	[35, '\xA3'],
	[36, '\u010A'],
	[37, '\u010B'],
	[38, '\u1E0A'],
	[39, '\xA7'],
	[40, '\u1E80'],
	[41, '\xA9'],
	[42, '\u1E82'],
	[43, '\u1E0B'],
	[44, '\u1EF2'],
	[45, '\xAD'],
	[46, '\xAE'],
	[47, '\u0178'],
	[48, '\u1E1E'],
	[49, '\u1E1F'],
	[50, '\u0120'],
	[51, '\u0121'],
	[52, '\u1E40'],
	[53, '\u1E41'],
	[54, '\xB6'],
	[55, '\u1E56'],
	[56, '\u1E81'],
	[57, '\u1E57'],
	[58, '\u1E83'],
	[59, '\u1E60'],
	[60, '\u1EF3'],
	[61, '\u1E84'],
	[62, '\u1E85'],
	[63, '\u1E61'],
	[64, '\xC0'],
	[65, '\xC1'],
	[66, '\xC2'],
	[67, '\xC3'],
	[68, '\xC4'],
	[69, '\xC5'],
	[70, '\xC6'],
	[71, '\xC7'],
	[72, '\xC8'],
	[73, '\xC9'],
	[74, '\xCA'],
	[75, '\xCB'],
	[76, '\xCC'],
	[77, '\xCD'],
	[78, '\xCE'],
	[79, '\xCF'],
	[80, '\u0174'],
	[81, '\xD1'],
	[82, '\xD2'],
	[83, '\xD3'],
	[84, '\xD4'],
	[85, '\xD5'],
	[86, '\xD6'],
	[87, '\u1E6A'],
	[88, '\xD8'],
	[89, '\xD9'],
	[90, '\xDA'],
	[91, '\xDB'],
	[92, '\xDC'],
	[93, '\xDD'],
	[94, '\u0176'],
	[95, '\xDF'],
	[96, '\xE0'],
	[97, '\xE1'],
	[98, '\xE2'],
	[99, '\xE3'],
	[100, '\xE4'],
	[101, '\xE5'],
	[102, '\xE6'],
	[103, '\xE7'],
	[104, '\xE8'],
	[105, '\xE9'],
	[106, '\xEA'],
	[107, '\xEB'],
	[108, '\xEC'],
	[109, '\xED'],
	[110, '\xEE'],
	[111, '\xEF'],
	[112, '\u0175'],
	[113, '\xF1'],
	[114, '\xF2'],
	[115, '\xF3'],
	[116, '\xF4'],
	[117, '\xF5'],
	[118, '\xF6'],
	[119, '\u1E6B'],
	[120, '\xF8'],
	[121, '\xF9'],
	[122, '\xFA'],
	[123, '\xFB'],
	[124, '\xFC'],
	[125, '\xFD'],
	[126, '\u0177'],
	[127, '\xFF']
]);

// https://encoding.spec.whatwg.org/#error-mode
const decodingError = (mode) => {
	if (mode === 'replacement') {
		return '\uFFFD';
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

const encodingError = (mode) => {
	if (mode === 'replacement') {
		return 0xFFFD;
	}
	// Else, `mode == 'fatal'`.
	throw new Error();
};

// https://encoding.spec.whatwg.org/#single-byte-decoder
export const decode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `replacement` (default) or `fatal` for a
	// decoder.”
	if (mode !== 'replacement' && mode !== 'fatal') {
		mode = 'replacement';
	}

	const length = input.length;

	// Support byte strings as input.
	if (typeof input === 'string') {
		const bytes = new Uint16Array(length);
		for (let index = 0; index < length; index++) {
			bytes[index] = input.charCodeAt(index);
		}
		input = bytes;
	}

	const buffer = [];
	for (let index = 0; index < length; index++) {
		const byteValue = input[index];
		// “If `byte` is an ASCII byte, return a code point whose value is
		// `byte`.”
		if (0x00 <= byteValue && byteValue <= 0x7F) {
			buffer.push(stringFromCharCode(byteValue));
			continue;
		}
		// “Let `code point` be the index code point for `byte − 0x80` in index
		// single-byte.”
		const pointer = byteValue - 0x80;
		if (INDEX_BY_POINTER.has(pointer)) {
			// “Return a code point whose value is `code point`.”
			buffer.push(INDEX_BY_POINTER.get(pointer));
		} else {
			// “If `code point` is `null`, return `error`.”
			buffer.push(decodingError(mode));
		}
	}
	const result = buffer.join('');
	return result;
};

// https://encoding.spec.whatwg.org/#single-byte-encoder
export const encode = (input, options) => {
	let mode;
	if (options && options.mode) {
		mode = options.mode.toLowerCase();
	}
	// “An error mode […] is either `fatal` (default) or `HTML` for an
	// encoder.”
	if (mode !== 'fatal' && mode !== 'html') {
		mode = 'fatal';
	}
	const length = input.length;
	const result = new Uint16Array(length);
	for (let index = 0; index < length; index++) {
		const codePoint = input.charCodeAt(index);
		// “If `code point` is an ASCII code point, return a byte whose
		// value is `code point`.”
		if (0x00 <= codePoint && codePoint <= 0x7F) {
			result[index] = codePoint;
			continue;
		}
		// “Let `pointer` be the index pointer for `code point` in index
		// single-byte.”
		if (INDEX_BY_CODE_POINT.has(codePoint)) {
			const pointer = INDEX_BY_CODE_POINT.get(codePoint);
			// “Return a byte whose value is `pointer + 0x80`.”
			result[index] = pointer + 0x80;
		} else {
			// “If `pointer` is `null`, return `error` with `code point`.”
			result[index] = encodingError(mode);
		}
	}
	return result;
};

export const labels = [
	'iso-8859-14',
	'iso8859-14',
	'iso885914'
];
