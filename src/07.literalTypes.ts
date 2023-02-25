// resultConvertion: 'as-number' | 'as-text' - literal type

function combine(
	param1: number | string,
	param2: number | string,
	resultConvertion: 'as-number' | 'as-text'
) {
	let result;

	if (typeof param1 === 'number' && typeof param2 === 'number') {
		result = param1 + param2;
	} else {
		result = param1.toString() + param2.toString();
	}

	if (resultConvertion === 'as-number') {
		return +result;
	} else {
		return result.toString();
	}
}

const combinedNumbers = combine('1', '2', 'as-number');
const combinedStrings = combine('Test1', 'Test2', 'as-text');

console.log('combinedNumbers', combinedNumbers);
console.log('combinedStrings', combinedStrings);

export {};
