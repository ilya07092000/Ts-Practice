// strign | number | string[]

function combine(
	param1: number | string,
	param2: number | string
): number | string {
	let result;

	if (typeof param1 === 'number' && typeof param2 === 'number') {
		result = param1 + param2;
	} else {
		result = param1.toString() + param2.toString();
	}

	return result;
}

const combinedNumbers = combine(1, 2);
const combinedStrings = combine('Test1', 'Test2');

console.log('combinedNumbers', combinedNumbers);
console.log('combinedStrings', combinedStrings);
