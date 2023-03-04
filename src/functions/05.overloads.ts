function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: string | number, b: string | number) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a.toString() + b.toString();
	}

	return +a + +b;
}

const strResult = add('1', '2');
const numResult = add(1, 2);

console.log('strResult', strResult);
console.log('numResult', numResult);

export {};
